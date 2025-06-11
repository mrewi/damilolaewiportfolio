
import type { Skill } from '@/types';
import { Badge } from '@/components/ui/badge';

interface SkillBadgeProps {
  skill: Skill;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  const IconComponent = skill.icon;
  return (
    <Badge variant="secondary" className="flex items-center gap-1.5 py-1 px-2.5 transition-all duration-200 ease-out hover:scale-125 hover:rotate-[-6deg] hover:shadow-lg hover:bg-primary hover:text-primary-foreground cursor-pointer">
      <IconComponent className="h-3.5 w-3.5" />
      <span className="text-xs">{skill.name}</span>
    </Badge>
  );
}
