
'use server';

import { ai } from '@/ai/genkit'; // This should provide the configured model instance

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface FormResponse {
  success: boolean;
  message: string;
  fieldErrors?: Partial<Record<keyof ContactFormData, string>>;
}

export async function getEnhancedMessage(currentMessage: string): Promise<string> {
  if (!currentMessage.trim()) {
    return "Please enter a message first.";
  }

  try {
    const response = await ai.generate({
      model: 'googleai/gemini-2.0-flash', // Explicitly using the model, ai.model() is not the way for this call
      prompt: `You are an AI assistant that helps users refine their professional messages.
The user wants to send the following message. Suggest edits to increase its impact, relevance, and professionalism.
Keep the core meaning of the message. Output only the refined message. Avoid conversational fluff or preambles like "Here's the refined message:".

Original message: "${currentMessage}"

Refined message:`,
      config: {
        temperature: 0.5,
        maxOutputTokens: Math.max(200, currentMessage.length + 100), // Allow for longer output
      }
    });
    return response.text;
  } catch (error) {
    console.error("AI suggestion failed:", error);
    // Check if error has a message property
    const errorMessage = error instanceof Error ? error.message : String(error);
    return `Could not get suggestion due to an error: ${errorMessage}. Original message: ${currentMessage}`;
  }
}

export async function submitContactForm(formData: ContactFormData): Promise<FormResponse> {
  // Basic validation (Zod on client-side is primary, this is a fallback)
  const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
  if (!formData.name.trim()) fieldErrors.name = "Name is required.";
  if (!formData.email.trim()) fieldErrors.email = "Email is required.";
  else if (!/\S+@\S+\.\S+/.test(formData.email)) fieldErrors.email = "Invalid email address.";
  if (!formData.message.trim()) fieldErrors.message = "Message is required.";
  
  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, message: "Please correct the errors below.", fieldErrors };
  }

  // In a real app, you'd send this data to a backend, email service, or database.
  console.log("Form submitted successfully (simulated):", formData);
  
  // Simulate success
  return { success: true, message: "Message sent successfully! I'll get back to you soon." };
}

