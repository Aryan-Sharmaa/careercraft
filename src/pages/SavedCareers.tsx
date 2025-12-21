import { Bookmark, Trash2, Map, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const savedCareersData = [
  {
    id: 1,
    title: "Data Scientist",
    savedAt: "Dec 15, 2024",
    fitScore: 92,
    description:
      "Analyze complex data sets to help organizations make data-driven decisions. Combine statistics, programming, and domain expertise.",
    skills: ["Python", "Machine Learning", "Statistics", "SQL"],
  },
  {
    id: 2,
    title: "Product Manager",
    savedAt: "Dec 12, 2024",
    fitScore: 85,
    description:
      "Lead product development from conception to launch. Bridge technical teams and business stakeholders to create user-centric products.",
    skills: ["Strategy", "Communication", "Analytics", "Agile"],
  },
  {
    id: 3,
    title: "UX Designer",
    savedAt: "Dec 10, 2024",
    fitScore: 78,
    description:
      "Create intuitive and engaging user experiences. Conduct research, design interfaces, and iterate based on user feedback.",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
  },
];

export default function SavedCareers() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [careers, setCareers] = useState(savedCareersData);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const removeCareer = (id: number) => {
    setCareers(careers.filter((c) => c.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-primary p-3">
            <Bookmark className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Saved Careers
            </h1>
            <p className="text-muted-foreground">
              Your bookmarked career paths for future reference
            </p>
          </div>
        </div>
      </div>

      {careers.length === 0 ? (
        <div className="glass-card p-12 text-center animate-fade-in">
          <Bookmark className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
          <h2 className="font-display text-lg font-semibold text-foreground mb-2">
            No saved careers yet
          </h2>
          <p className="text-muted-foreground mb-4">
            Explore career options and save the ones that interest you
          </p>
          <Button variant="gradient">Explore Careers</Button>
        </div>
      ) : (
        <div className="space-y-4">
          {careers.map((career, idx) => (
            <div
              key={career.id}
              className="glass-card overflow-hidden animate-slide-up opacity-0"
              style={{ animationDelay: `${idx * 100}ms`, animationFillMode: "forwards" }}
            >
              <button
                onClick={() => toggleExpand(career.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">
                      {career.fitScore}
                    </span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {career.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Saved on {career.savedAt}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "text-sm font-semibold",
                      career.fitScore >= 80
                        ? "text-green-500"
                        : career.fitScore >= 60
                        ? "text-yellow-500"
                        : "text-orange-500"
                    )}
                  >
                    {career.fitScore}% match
                  </span>
                  {expandedId === career.id ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </button>

              {expandedId === career.id && (
                <div className="px-6 pb-6 border-t border-border pt-4 animate-fade-in">
                  <p className="text-muted-foreground mb-4">{career.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Key Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="gradient" size="sm">
                      <Map className="h-4 w-4" />
                      View Roadmap
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeCareer(career.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
