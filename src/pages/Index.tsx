import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, Target, Map, MessageSquare, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Sparkles,
    title: "AI Career Guidance",
    description: "Get personalized career recommendations powered by advanced AI",
  },
  {
    icon: Target,
    title: "Skill Assessment",
    description: "Evaluate your skills and identify areas for growth",
  },
  {
    icon: Map,
    title: "Career Roadmaps",
    description: "Follow step-by-step paths to your dream career",
  },
  {
    icon: MessageSquare,
    title: "Interview Prep",
    description: "Practice with AI-generated questions and expert tips",
  },
  {
    icon: DollarSign,
    title: "Salary Insights",
    description: "Explore compensation data for your target roles",
  },
];

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-hero-bg overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

        {/* Floating shapes */}
        <div className="absolute top-20 left-20 h-32 w-32 rounded-full bg-white/10 animate-float" />
        <div className="absolute bottom-32 right-20 h-24 w-24 rounded-full bg-white/10 animate-float animation-delay-200" />
        <div className="absolute top-1/3 right-1/4 h-16 w-16 rounded-2xl bg-white/10 animate-float animation-delay-400" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-8">
              <Sparkles className="h-4 w-4" />
              AI-Powered Career Platform
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Design Your Future
              <br />
              <span className="text-white/80">Career Path</span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Leverage AI-powered insights to explore career options, develop skills, 
              and achieve your professional goals with personalized guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="xl"
                onClick={() => navigate("/login")}
              >
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                variant="glass"
                size="xl"
                onClick={() => navigate("/login")}
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-white/50" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Everything You Need to
              <span className="gradient-text"> Succeed</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and insights to guide your career journey
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className="glass-card-hover p-8 animate-slide-up opacity-0"
                style={{ animationDelay: `${idx * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="rounded-xl bg-gradient-primary p-3 w-fit mb-6">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-hero-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-10">
              Join thousands of professionals who have accelerated their careers 
              with CareerCraft's AI-powered guidance.
            </p>
            <Button
              variant="hero"
              size="xl"
              onClick={() => navigate("/login")}
            >
              Start Your Journey
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
