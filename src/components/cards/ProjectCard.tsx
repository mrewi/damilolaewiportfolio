import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SkillBadge from '@/components/shared/SkillBadge';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="aspect-video relative w-full">
          <Image
            src={project.imageUrl}
            alt={project.title}
            data-ai-hint={project.imageHint}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-2xl font-headline mb-3">{project.title}</CardTitle>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 text-foreground">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 border-t">
        <div className="flex space-x-3">
          {project.liveLink && (
            <Button variant="outline" asChild>
              <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
          {project.repoLink && (
            <Button variant="ghost" asChild>
              <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View Code
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
