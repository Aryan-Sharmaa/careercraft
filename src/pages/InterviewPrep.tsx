import { MessageSquare, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const interviewTypes = [
  "Behavioral",
  "Technical",
  "Case Study",
  "Panel",
  "Phone Screen",
];

export default function InterviewPrep() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-primary p-3">
            <MessageSquare className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Interview Preparation
            </h1>
            <p className="text-muted-foreground">
              Practice with AI-generated questions and expert tips
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="glass-card p-6 animate-slide-up opacity-0 animation-delay-100" style={{ animationFillMode: "forwards" }}>
            <h2 className="font-display font-semibold text-foreground mb-4">
              Interview Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Job Role
                </label>
                <Input placeholder="e.g., Software Engineer, Product Manager" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Experience Level
                </label>
                <select className="flex h-11 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm">
                  <option>Entry Level</option>
                  <option>Junior (1-3 years)</option>
                  <option>Mid-Level (3-5 years)</option>
                  <option>Senior (5+ years)</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Company Type
                </label>
                <Input placeholder="e.g., Startup, Enterprise, FAANG" />
              </div>
            </div>
          </div>

          <div className="glass-card p-6 animate-slide-up opacity-0 animation-delay-200" style={{ animationFillMode: "forwards" }}>
            <h2 className="font-display font-semibold text-foreground mb-4">
              Interview Types
            </h2>
            <div className="flex flex-wrap gap-2">
              {interviewTypes.map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-input bg-background cursor-pointer hover:border-primary transition-colors"
                >
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 animate-slide-up opacity-0 animation-delay-300" style={{ animationFillMode: "forwards" }}>
            <h2 className="font-display font-semibold text-foreground mb-4">
              Additional Context
            </h2>
            <Textarea
              placeholder="Any specific areas you want to focus on or challenges you're facing..."
              className="min-h-[100px]"
            />
          </div>

          <Button
            variant="gradient"
            size="lg"
            className="w-full"
            onClick={handleGenerate}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Preparing Your Guide...
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5" />
                Generate Interview Guide
              </>
            )}
          </Button>
        </div>

        <div className="space-y-6">
          {showResults ? (
            <>
              <div className="glass-card p-6 animate-scale-in">
                <h2 className="font-display font-semibold text-foreground mb-4">
                  Sample Questions
                </h2>
                <div className="space-y-4">
                  {[
                    "Tell me about a challenging project you led and how you overcame obstacles.",
                    "How do you prioritize tasks when working on multiple projects?",
                    "Describe a time when you had to learn a new technology quickly.",
                  ].map((q, i) => (
                    <div key={i} className="p-4 rounded-xl bg-muted/50 text-sm">
                      <span className="text-primary font-medium">Q{i + 1}:</span> {q}
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 animate-scale-in">
                <h2 className="font-display font-semibold text-foreground mb-4">
                  STAR Method Tips
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <span className="font-bold text-primary">S</span>
                    <span className="text-muted-foreground">Situation: Set the context</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-primary">T</span>
                    <span className="text-muted-foreground">Task: Describe your responsibility</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-primary">A</span>
                    <span className="text-muted-foreground">Action: Explain what you did</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold text-primary">R</span>
                    <span className="text-muted-foreground">Result: Share the outcome</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="glass-card p-6 flex items-center justify-center min-h-[300px] animate-slide-up opacity-0 animation-delay-200" style={{ animationFillMode: "forwards" }}>
              <div className="text-center text-muted-foreground">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Fill in the details and generate your personalized interview guide</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
