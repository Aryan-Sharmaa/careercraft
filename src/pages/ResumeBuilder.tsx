import { FileText, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ResumeBuilder() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-primary p-3">
            <FileText className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              AI Resume Builder
            </h1>
            <p className="text-muted-foreground">
              Get AI-powered tips to make your resume stand out
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="glass-card p-6 animate-slide-up opacity-0 animation-delay-100" style={{ animationFillMode: "forwards" }}>
            <h2 className="font-display font-semibold text-foreground mb-4">
              Personal Information
            </h2>
            <div className="space-y-4">
              <Input placeholder="Full Name" />
              <Input placeholder="Email Address" type="email" />
              <Input placeholder="Phone Number" />
              <Input placeholder="Location" />
              <Input placeholder="LinkedIn URL" />
            </div>
          </div>

          <div className="glass-card p-6 animate-slide-up opacity-0 animation-delay-200" style={{ animationFillMode: "forwards" }}>
            <h2 className="font-display font-semibold text-foreground mb-4">
              Professional Summary
            </h2>
            <Textarea
              placeholder="Write a brief professional summary highlighting your key achievements and career objectives..."
              className="min-h-[120px]"
            />
          </div>

          <div className="glass-card p-6 animate-slide-up opacity-0 animation-delay-300" style={{ animationFillMode: "forwards" }}>
            <h2 className="font-display font-semibold text-foreground mb-4">
              Experience
            </h2>
            <Textarea
              placeholder="Describe your work experience, including job titles, companies, dates, and key responsibilities..."
              className="min-h-[150px]"
            />
          </div>

          <div className="glass-card p-6 animate-slide-up opacity-0 animation-delay-400" style={{ animationFillMode: "forwards" }}>
            <h2 className="font-display font-semibold text-foreground mb-4">
              Skills
            </h2>
            <Textarea
              placeholder="List your technical and soft skills..."
              className="min-h-[100px]"
            />
          </div>
        </div>

        <div className="space-y-6">
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
                Generating Tips...
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5" />
                Generate Resume Tips
              </>
            )}
          </Button>

          <div className="glass-card p-6 animate-slide-up opacity-0 animation-delay-200" style={{ animationFillMode: "forwards" }}>
            <h2 className="font-display font-semibold text-foreground mb-4">
              AI Recommendations
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <p className="font-medium text-foreground mb-2">💡 Action Verbs</p>
                <p>Use strong action verbs like "Led", "Developed", "Implemented" to start your bullet points.</p>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <p className="font-medium text-foreground mb-2">📊 Quantify Achievements</p>
                <p>Add metrics to your accomplishments. Instead of "Improved sales", write "Increased sales by 35%".</p>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <p className="font-medium text-foreground mb-2">🎯 ATS Optimization</p>
                <p>Include keywords from the job description to pass Applicant Tracking Systems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
