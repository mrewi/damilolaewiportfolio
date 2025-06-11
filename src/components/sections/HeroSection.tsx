import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary/30 rounded-lg shadow-lg">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-6">
            <span className="block">Hi, I&apos;m <span className="text-primary">Your Name</span>.</span>
            <span className="block text-3xl md:text-4xl text-accent mt-2">Full-Stack Web Developer</span>
            <span className="block text-3xl md:text-4xl text-accent">& UI/UX Designer</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
            I create seamless, engaging, and high-performance web applications from concept to deployment, specializing in Next.js, React, and modern UI/UX practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/#contact">
                Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Download CV <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="relative aspect-square max-w-md mx-auto md:max-w-none">
          <Image
            src="https://placehold.co/600x600.png"
            alt="Developer working on a laptop"
            data-ai-hint="developer coding"
            width={600}
            height={600}
            className="rounded-lg shadow-2xl object-cover"
            priority
          />
           <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent rounded-full opacity-50 animate-pulse"></div>
           <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-lg opacity-30 transform rotate-45"></div>
        </div>
      </div>
    </section>
  );
}
