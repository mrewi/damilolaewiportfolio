'use client';

import { useState, useTransition } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { getEnhancedMessage, submitContactForm } from '@/lib/actions';
import { Wand2, Send, Loader2 } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, startSubmitTransition] = useTransition();
  const [isSuggesting, startSuggestTransition] = useTransition();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    startSubmitTransition(async () => {
      const response = await submitContactForm(data);
      if (response.success) {
        toast({
          title: "Message Sent!",
          description: response.message,
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: response.message || "Failed to send message. Please try again.",
          variant: "destructive",
        });
        if (response.fieldErrors) {
          (Object.keys(response.fieldErrors) as Array<keyof ContactFormValues>).forEach((key) => {
            form.setError(key, { type: 'manual', message: response.fieldErrors![key] });
          });
        }
      }
    });
  };

  const handleSuggestEdit = () => {
    const currentMessage = form.getValues('message');
    if (!currentMessage.trim()) {
      toast({
        title: 'Empty Message',
        description: 'Please type a message before suggesting edits.',
        variant: 'destructive',
      });
      return;
    }

    startSuggestTransition(async () => {
      const suggestion = await getEnhancedMessage(currentMessage);
      form.setValue('message', suggestion, { shouldValidate: true });
      toast({
        title: 'Suggestion Applied',
        description: 'AI-powered suggestion has been applied to your message.',
      });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel>Your Message</FormLabel>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={handleSuggestEdit}
                  disabled={isSuggesting || isSubmitting}
                  className="text-xs text-accent hover:text-accent/80"
                >
                  {isSuggesting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  Suggest Edits
                </Button>
              </div>
              <FormControl>
                <Textarea placeholder="Tell me about your project or inquiry..." rows={6} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isSubmitting || isSuggesting}>
          {isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
             <Send className="mr-2 h-4 w-4" />
          )}
          Send Message
        </Button>
      </form>
    </Form>
  );
}
