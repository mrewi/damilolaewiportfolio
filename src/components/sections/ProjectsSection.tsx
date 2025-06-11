import { FEATURED_PROJECTS } from '@/lib/constants';
import ProjectCard from '@/components/cards/ProjectCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of the projects I&apos;ve worked on, showcasing my skills in development and design.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {/* Optional: Add a button to view all projects if you have a dedicated projects page */}
        {/* 
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        */}
      </div>
    </section>
  );
}
