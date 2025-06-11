import { SKILLS_LIST, ABOUT_ME_TEXT } from '@/lib/constants';
import SkillBadge from '@/components/shared/SkillBadge';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto md:order-last">
            <Image
              src="https://placehold.co/500x500.png"
              alt="Profile picture"
              data-ai-hint="professional portrait"
              width={500}
              height={500}
              className="rounded-lg shadow-xl object-cover"
            />
            <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-accent rounded-full opacity-40 animate-ping-slow"></div>
            <div className="absolute -top-5 -right-5 w-16 h-16 bg-primary rounded-lg opacity-30 transform rotate-12"></div>
          </div>
          <div className="md:order-first">
            <div
              className="prose prose-lg max-w-none text-foreground"
              dangerouslySetInnerHTML={{ __html: ABOUT_ME_TEXT }}
            />
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold font-headline text-center mb-8">
            My <span className="text-primary">Skills</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto">
            {SKILLS_LIST.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
