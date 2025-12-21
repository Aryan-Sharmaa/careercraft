import { cn } from "@/lib/utils";

interface SkillProgressProps {
  skill: string;
  level: number;
  maxLevel?: number;
  className?: string;
}

export function SkillProgress({
  skill,
  level,
  maxLevel = 10,
  className,
}: SkillProgressProps) {
  const percentage = (level / maxLevel) * 100;

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{skill}</span>
        <span className="text-sm text-muted-foreground">{level}/{maxLevel}</span>
      </div>
      <div className="skill-progress">
        <div
          className="skill-progress-bar"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
