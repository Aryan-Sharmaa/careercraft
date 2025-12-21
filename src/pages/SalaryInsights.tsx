import { DollarSign, TrendingUp, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";

const salaryData = {
  entry: { min: 65000, max: 85000, avg: 75000 },
  mid: { min: 95000, max: 130000, avg: 112000 },
  senior: { min: 140000, max: 200000, avg: 165000 },
};

export default function SalaryInsights() {
  const [showData, setShowData] = useState(false);

  const handleSearch = () => {
    setShowData(true);
  };

  const formatSalary = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-primary p-3">
            <DollarSign className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Salary Insights
            </h1>
            <p className="text-muted-foreground">
              Explore compensation data for your target roles
            </p>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 animate-slide-up opacity-0 animation-delay-100" style={{ animationFillMode: "forwards" }}>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-foreground mb-2 block">
              Job Role
            </label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="e.g., Software Engineer, Data Scientist"
                className="pl-11"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="e.g., San Francisco" className="pl-11" />
            </div>
          </div>
        </div>
        <Button
          variant="gradient"
          size="lg"
          className="w-full mt-6"
          onClick={handleSearch}
        >
          <TrendingUp className="h-5 w-5" />
          Get Salary Insights
        </Button>
      </div>

      {showData && (
        <div className="space-y-6 animate-fade-in">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { level: "Entry Level", data: salaryData.entry, color: "from-blue-500 to-cyan-500" },
              { level: "Mid Level", data: salaryData.mid, color: "from-purple-500 to-pink-500" },
              { level: "Senior Level", data: salaryData.senior, color: "from-orange-500 to-yellow-500" },
            ].map((item, idx) => (
              <div
                key={item.level}
                className="glass-card-hover p-6 text-center"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div
                  className={cn(
                    "h-2 w-full rounded-full bg-gradient-to-r mb-4",
                    item.color
                  )}
                />
                <h3 className="text-sm font-medium text-muted-foreground mb-2">
                  {item.level}
                </h3>
                <p className="text-3xl font-bold font-display text-foreground mb-2">
                  {formatSalary(item.data.avg)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {formatSalary(item.data.min)} - {formatSalary(item.data.max)}
                </p>
              </div>
            ))}
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Growth Potential
              </h2>
              <div className="flex items-center gap-2 text-green-500">
                <TrendingUp className="h-5 w-5" />
                <span className="font-bold">+120%</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Based on current market trends, this role shows strong salary growth
              potential over the next 5 years. Companies are actively competing for
              talent in this field.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-xl bg-muted/50">
                <p className="text-sm font-medium text-foreground">Top Paying Industries</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Tech, Finance, Healthcare
                </p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50">
                <p className="text-sm font-medium text-foreground">Highest Demand Locations</p>
                <p className="text-sm text-muted-foreground mt-1">
                  SF Bay Area, NYC, Seattle
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
