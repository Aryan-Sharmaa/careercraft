import { useState } from "react";
import { Target, Save, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const skillCategories = {
  Technical: [
    { name: "Python Programming", level: 7 },
    { name: "JavaScript", level: 6 },
    { name: "Data Analysis", level: 8 },
    { name: "Machine Learning", level: 5 },
    { name: "SQL & Databases", level: 7 },
    { name: "Cloud Computing", level: 4 },
  ],
  Soft: [
    { name: "Communication", level: 9 },
    { name: "Leadership", level: 6 },
    { name: "Problem Solving", level: 8 },
    { name: "Teamwork", level: 9 },
    { name: "Time Management", level: 7 },
    { name: "Adaptability", level: 8 },
  ],
  Creative: [
    { name: "Design Thinking", level: 6 },
    { name: "Content Writing", level: 7 },
    { name: "Visual Design", level: 5 },
    { name: "Storytelling", level: 8 },
    { name: "Innovation", level: 7 },
  ],
  Business: [
    { name: "Project Management", level: 6 },
    { name: "Strategic Planning", level: 5 },
    { name: "Market Analysis", level: 4 },
    { name: "Financial Literacy", level: 5 },
    { name: "Negotiation", level: 6 },
  ],
};

type CategoryKey = keyof typeof skillCategories;

export default function SkillAssessment() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("Technical");
  const [skills, setSkills] = useState(skillCategories);
  const [expandedCategories, setExpandedCategories] = useState<CategoryKey[]>(["Technical"]);

  const updateSkill = (category: CategoryKey, skillName: string, newLevel: number) => {
    setSkills((prev) => ({
      ...prev,
      [category]: prev[category].map((skill) =>
        skill.name === skillName ? { ...skill, level: newLevel } : skill
      ),
    }));
  };

  const toggleCategory = (category: CategoryKey) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const getCategoryAverage = (category: CategoryKey) => {
    const categorySkills = skills[category];
    return Math.round(
      categorySkills.reduce((sum, skill) => sum + skill.level, 0) /
        categorySkills.length
    );
  };

  const categoryColors: Record<CategoryKey, string> = {
    Technical: "from-blue-500 to-cyan-500",
    Soft: "from-purple-500 to-pink-500",
    Creative: "from-orange-500 to-yellow-500",
    Business: "from-green-500 to-emerald-500",
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-primary p-3">
            <Target className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Skill Assessment Center
            </h1>
            <p className="text-muted-foreground">
              Rate your skills to get better career recommendations
            </p>
          </div>
        </div>
      </div>

      {/* Category Overview */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {(Object.keys(skills) as CategoryKey[]).map((category, idx) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              if (!expandedCategories.includes(category)) {
                toggleCategory(category);
              }
            }}
            className={cn(
              "glass-card-hover p-4 text-left animate-slide-up opacity-0",
              selectedCategory === category && "ring-2 ring-primary"
            )}
            style={{ animationDelay: `${idx * 100}ms`, animationFillMode: "forwards" }}
          >
            <div className={cn("h-2 w-full rounded-full bg-gradient-to-r mb-3", categoryColors[category])} />
            <h3 className="font-display font-semibold text-foreground">
              {category}
            </h3>
            <p className="text-sm text-muted-foreground">
              {skills[category].length} skills
            </p>
            <div className="mt-2 flex items-center gap-2">
              <div className="text-2xl font-bold text-foreground">
                {getCategoryAverage(category)}
              </div>
              <span className="text-xs text-muted-foreground">/10 avg</span>
            </div>
          </button>
        ))}
      </div>

      {/* Skill Details */}
      <div className="space-y-4">
        {(Object.keys(skills) as CategoryKey[]).map((category) => (
          <div
            key={category}
            className="glass-card overflow-hidden animate-fade-in"
          >
            <button
              onClick={() => toggleCategory(category)}
              className="w-full flex items-center justify-between p-6 hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "h-10 w-10 rounded-xl bg-gradient-to-r flex items-center justify-center",
                    categoryColors[category]
                  )}
                >
                  <Target className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <h2 className="font-display text-lg font-semibold text-foreground">
                    {category} Skills
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {skills[category].length} skills · Average: {getCategoryAverage(category)}/10
                  </p>
                </div>
              </div>
              {expandedCategories.includes(category) ? (
                <ChevronUp className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              )}
            </button>

            {expandedCategories.includes(category) && (
              <div className="px-6 pb-6 space-y-6 border-t border-border pt-6">
                {skills[category].map((skill) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-primary">
                        {skill.level}/10
                      </span>
                    </div>
                    <Slider
                      value={[skill.level]}
                      min={1}
                      max={10}
                      step={1}
                      onValueChange={([value]) =>
                        updateSkill(category, skill.name, value)
                      }
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Beginner</span>
                      <span>Intermediate</span>
                      <span>Expert</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button variant="gradient" size="lg">
          <Save className="h-5 w-5" />
          Save Assessment
        </Button>
      </div>
    </div>
  );
}
