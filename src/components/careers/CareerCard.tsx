import { Bookmark, ExternalLink, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CareerCardProps {
  title: string;
  description: string;
  fitScore: number;
  resources?: { label: string; url: string }[];
  onSave?: () => void;
  isSaved?: boolean;
  className?: string;
}

export function CareerCard({
  title,
  description,
  fitScore,
  resources = [],
  onSave,
  isSaved = false,
  className,
}: CareerCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-yellow-500";
    return "text-orange-500";
  };

  return (
    <div className={cn("glass-card-hover p-6", className)}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h3 className="font-display text-lg font-semibold text-foreground">
              {title}
            </h3>
            <div className={cn("flex items-center gap-1", getScoreColor(fitScore))}>
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-semibold">{fitScore}% match</span>
            </div>
          </div>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
          {resources.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {resources.map((resource, idx) => (
                <a
                  key={idx}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  <ExternalLink className="h-3 w-3" />
                  {resource.label}
                </a>
              ))}
            </div>
          )}
        </div>
        <Button
          variant={isSaved ? "default" : "outline"}
          size="icon"
          onClick={onSave}
          className="shrink-0"
        >
          <Bookmark className={cn("h-4 w-4", isSaved && "fill-current")} />
        </Button>
      </div>
    </div>
  );
}
