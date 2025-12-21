import { useState } from "react";
import {
  Sparkles,
  Send,
  Loader2,
  GraduationCap,
  Briefcase,
  Heart,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CareerCard } from "@/components/careers/CareerCard";

const educationLevels = [
  "High School",
  "Associate Degree",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "Self-taught",
];

const sampleCareers = [
  {
    title: "Data Scientist",
    description:
      "Analyze complex data sets to help organizations make data-driven decisions. Combine statistics, programming, and domain expertise.",
    fitScore: 92,
    resources: [
      { label: "Coursera Course", url: "#" },
      { label: "Career Guide", url: "#" },
    ],
  },
  {
    title: "Product Manager",
    description:
      "Lead product development from conception to launch. Bridge technical teams and business stakeholders to create user-centric products.",
    fitScore: 85,
    resources: [
      { label: "PM Handbook", url: "#" },
      { label: "Community", url: "#" },
    ],
  },
  {
    title: "UX Designer",
    description:
      "Create intuitive and engaging user experiences. Conduct research, design interfaces, and iterate based on user feedback.",
    fitScore: 78,
    resources: [
      { label: "Design Course", url: "#" },
      { label: "Portfolio Tips", url: "#" },
    ],
  },
];

export default function CareerAdvice() {
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    education: "",
    skills: "",
    interests: "",
    goals: "",
    additionalInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 2000);
  };

  const [savedCareers, setSavedCareers] = useState<string[]>([]);

  const toggleSave = (title: string) => {
    setSavedCareers((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-primary p-3">
            <Sparkles className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              AI Career Guidance
            </h1>
            <p className="text-muted-foreground">
              Get personalized career recommendations powered by AI
            </p>
          </div>
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="glass-card p-6 animate-slide-up opacity-0 animation-delay-100" style={{ animationFillMode: "forwards" }}>
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="h-5 w-5 text-primary" />
            <h2 className="font-display font-semibold text-foreground">
              Education & Background
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Highest Education
              </label>
              <select
                className="flex h-11 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value={formData.education}
                onChange={(e) =>
                  setFormData({ ...formData, education: e.target.value })
                }
              >
                <option value="">Select level...</option>
                {educationLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Field of Study
              </label>
              <Input placeholder="e.g., Computer Science, Business..." />
            </div>
          </div>
        </div>

        <div className="glass-card p-6 animate-slide-up opacity-0 animation-delay-200" style={{ animationFillMode: "forwards" }}>
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="h-5 w-5 text-primary" />
            <h2 className="font-display font-semibold text-foreground">
              Skills & Experience
            </h2>
          </div>
          <Textarea
            placeholder="List your key skills (e.g., Python, Data Analysis, Project Management, Communication...)"
            className="min-h-[100px]"
            value={formData.skills}
            onChange={(e) =>
              setFormData({ ...formData, skills: e.target.value })
            }
          />
        </div>

        <div className="glass-card p-6 animate-slide-up opacity-0 animation-delay-300" style={{ animationFillMode: "forwards" }}>
          <div className="flex items-center gap-2 mb-4">
            <Heart className="h-5 w-5 text-primary" />
            <h2 className="font-display font-semibold text-foreground">
              Interests & Passions
            </h2>
          </div>
          <Textarea
            placeholder="What topics excite you? What do you enjoy doing? (e.g., solving puzzles, helping others, creating things...)"
            className="min-h-[100px]"
            value={formData.interests}
            onChange={(e) =>
              setFormData({ ...formData, interests: e.target.value })
            }
          />
        </div>

        <div className="glass-card p-6 animate-slide-up opacity-0 animation-delay-400" style={{ animationFillMode: "forwards" }}>
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-5 w-5 text-primary" />
            <h2 className="font-display font-semibold text-foreground">
              Career Goals
            </h2>
          </div>
          <Textarea
            placeholder="What are your career aspirations? Where do you see yourself in 5 years?"
            className="min-h-[100px]"
            value={formData.goals}
            onChange={(e) =>
              setFormData({ ...formData, goals: e.target.value })
            }
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            type="submit"
            variant="gradient"
            size="lg"
            disabled={isLoading}
            className="flex-1"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Analyzing your profile...
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5" />
                Get Career Recommendations
              </>
            )}
          </Button>
          <Button type="button" variant="outline" size="lg">
            <Send className="h-5 w-5" />
            Deep Dive Analysis
          </Button>
        </div>
      </form>

      {/* Results */}
      {showResults && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-semibold text-foreground">
              Recommended Career Paths
            </h2>
            <span className="text-sm text-muted-foreground">
              Based on your profile
            </span>
          </div>
          <div className="space-y-4">
            {sampleCareers.map((career) => (
              <CareerCard
                key={career.title}
                {...career}
                isSaved={savedCareers.includes(career.title)}
                onSave={() => toggleSave(career.title)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
