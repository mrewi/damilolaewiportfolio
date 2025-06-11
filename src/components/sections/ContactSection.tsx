import ContactForm from '@/components/forms/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind, a question, or just want to say hi? Feel free to reach out!
        </p>
        <div className="max-w-2xl mx-auto bg-card p-8 md:p-12 rounded-lg shadow-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
