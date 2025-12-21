import {
  Search,
  Bookmark,
  Trophy,
  Target,
  TrendingUp,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { SkillProgress } from "@/components/dashboard/SkillProgress";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const recentActivity = [
  { action: "Completed skill assessment", time: "2 hours ago", icon: Target },
  { action: "Saved 'Data Scientist' career", time: "1 day ago", icon: Bookmark },
  { action: "Unlocked 'Explorer' achievement", time: "2 days ago", icon: Trophy },
  { action: "Generated career roadmap", time: "3 days ago", icon: TrendingUp },
];

const topSkills = [
  { skill: "Python Programming", level: 8 },
  { skill: "Data Analysis", level: 7 },
  { skill: "Communication", level: 9 },
  { skill: "Problem Solving", level: 8 },
  { skill: "Project Management", level: 6 },
];

const upcomingGoals = [
  { goal: "Complete AWS certification", dueDate: "Jan 15, 2025" },
  { goal: "Build portfolio project", dueDate: "Feb 1, 2025" },
  { goal: "Network with 10 professionals", dueDate: "Jan 30, 2025" },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="font-display text-3xl font-bold text-foreground">
          Welcome back, John! 👋
        </h1>
        <p className="mt-2 text-muted-foreground">
          Here's an overview of your career journey progress
        </p>
      </div>

      {/* Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Career Queries"
          value={24}
          subtitle="This month"
          icon={Search}
          trend={{ value: 12, positive: true }}
          delay={100}
        />
        <MetricCard
          title="Saved Careers"
          value={8}
          subtitle="Exploring options"
          icon={Bookmark}
          delay={200}
        />
        <MetricCard
          title="Achievements"
          value={12}
          subtitle="Keep it up!"
          icon={Trophy}
          delay={300}
        />
        <MetricCard
          title="Skills Assessed"
          value={16}
          subtitle="Across 4 categories"
          icon={Target}
          delay={400}
        />
      </div>

      {/* Main content grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Skills overview */}
        <div className="glass-card p-6 lg:col-span-2 animate-slide-up opacity-0 animation-delay-200" style={{ animationFillMode: "forwards" }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-lg font-semibold text-foreground">
              Top Skills
            </h2>
            <Link to="/app/skill-assessment">
              <Button variant="ghost" size="sm" className="gap-1">
                View all
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {topSkills.map((item) => (
              <SkillProgress key={item.skill} {...item} />
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div className="glass-card p-6 animate-slide-up opacity-0 animation-delay-300" style={{ animationFillMode: "forwards" }}>
          <h2 className="font-display text-lg font-semibold text-foreground mb-6">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <activity.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {activity.action}
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Goals section */}
      <div className="glass-card p-6 animate-slide-up opacity-0 animation-delay-400" style={{ animationFillMode: "forwards" }}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-lg font-semibold text-foreground">
            Upcoming Goals
          </h2>
          <Button variant="gradient" size="sm">
            Add Goal
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingGoals.map((goal, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border bg-muted/30 p-4 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {goal.goal}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Due: {goal.dueDate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
