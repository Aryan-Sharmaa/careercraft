import { Map, Sparkles, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";

const phases = [
  {
    name: "Foundation",
    duration: "0-6 months",
    skills: ["Core programming", "Basic statistics", "SQL fundamentals"],
    milestones: ["Complete online course", "Build first project", "Join community"],
  },
  {
    name: "Growth",
    duration: "6-18 months",
    skills: ["Machine learning", "Data visualization", "Cloud basics"],
    milestones: ["Get first job/internship", "Contribute to open source", "Build portfolio"],
  },
  {
    name: "Mastery",
    duration: "18-36 months",
    skills: ["Deep learning", "MLOps", "System design"],
    milestones: ["Lead a project", "Publish findings", "Mentor others"],
  },
  {
    name: "Leadership",
    duration: "3+ years",
    skills: ["Team management", "Strategy", "Architecture"],
    milestones: ["Lead a team", "Define standards", "Drive innovation"],
  },
];

export default function CareerRoadmap() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showRoadmap, setShowRoadmap] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowRoadmap(true);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-primary p-3">
            <Map className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Career Roadmap Generator
            </h1>
            <p className="text-muted-foreground">
              Get a personalized roadmap to your dream career
            </p>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 animate-slide-up opacity-0 animation-delay-100" style={{ animationFillMode: "forwards" }}>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Target Career
            </label>
            <Input placeholder="e.g., Data Scientist, Product Manager" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Current Level
            </label>
            <select className="flex h-11 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm">
              <option>Beginner</option>
              <option>Junior</option>
              <option>Mid-Level</option>
              <option>Senior</option>
            </select>
          </div>
        </div>
        <Button
          variant="gradient"
          size="lg"
          className="w-full mt-6"
          onClick={handleGenerate}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Building Your Roadmap...
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5" />
              Generate Roadmap
            </>
          )}
        </Button>
      </div>

      {showRoadmap && (
        <div className="space-y-0 animate-fade-in">
          {phases.map((phase, idx) => (
            <div key={phase.name} className="relative flex gap-6">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "h-12 w-12 rounded-full flex items-center justify-center z-10",
                    idx === 0 ? "bg-gradient-primary" : "bg-muted border-2 border-primary/30"
                  )}
                >
                  {idx === 0 ? (
                    <CheckCircle2 className="h-6 w-6 text-primary-foreground" />
                  ) : (
                    <span className="font-bold text-foreground">{idx + 1}</span>
                  )}
                </div>
                {idx < phases.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/30 to-primary/10" />
                )}
              </div>

              {/* Content */}
              <div className="glass-card p-6 mb-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {phase.name}
                  </h3>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {phase.duration}
                  </span>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Key Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Milestones
                    </h4>
                    <ul className="space-y-2">
                      {phase.milestones.map((milestone) => (
                        <li
                          key={milestone}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {milestone}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
