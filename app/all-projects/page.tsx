import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Talk from "@/components/talk"
import AllProject from '@/components/all-projects'
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Cpu,
  Globe,
  Shield,
  Play,
  Star,
  Users,
  Zap,
  Lightbulb,
  Target,
  Rocket,
  Brain,
  Quote,
  Send,
  MapPin,
  Calendar,
  Coffee,
} from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
           <a href="/">
            <div className="font-serif font-bold text-xl text-foreground">
              Sheikh Muhammad Ismail
            </div>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="#philosophy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Philosophy
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      


      {/* Projects Showcase Section */}
      <AllProject/>


      <section id="contact" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to turn your ideas into reality? I'm always excited to
              discuss new opportunities and innovative projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
  {/* Top Left: Contact Form */}
  <Talk />

  {/* Top Right: Availability Status */}
  <Card className="border-l-4 border-l-primary bg-primary/5">
    <CardContent className="p-3 sm:p-5">
      <div className="flex items-center gap-2 mb-2 sm:mb-3 flex-wrap">
        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
        <Badge variant="secondary" className="bg-primary/10 text-primary text-xs sm:text-sm">
          Available for New Projects
        </Badge>
      </div>
      <h3 className="font-serif font-bold text-lg sm:text-xl mb-1.5">
        Ready to Start Immediately
      </h3>
      <p className="text-muted-foreground text-xs sm:text-sm mb-3">
        I'm currently accepting new client projects and full-time opportunities. Let's discuss how I can contribute to your team's success.
      </p>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1 sm:gap-3">
        <div className="flex items-center gap-1.5 text-xs sm:text-sm">
          <MapPin className="h-4 w-4 text-primary" />
          <span>Remote / Karachi , Pakistan</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs sm:text-sm">
          <Calendar className="h-4 w-4 text-primary" />
          <span>Available within 1 weeks</span>
        </div>
      </div>
    </CardContent>
  </Card>

  {/* Bottom Left: Quick Connect */}
  <Card className="hover:shadow-xl transition-shadow duration-300">
    <CardContent className="p-3 sm:p-5">
      <h3 className="font-serif font-bold text-lg sm:text-xl mb-3">Quick Connect</h3>
      <div className="space-y-2 sm:space-y-3">
        {/* Email */}
        <a
          href="mailto:hello@example.com"
          className="flex items-center gap-3 p-2.5 sm:p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </div>
          <div className="overflow-hidden">
            <div className="font-medium text-sm sm:text-base truncate">Email</div>
            <div className="text-xs sm:text-sm text-muted-foreground truncate">
              sheikhmuhammadismail79@gmail.com
            </div>
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors hidden sm:block" />
        </a>

        {/* LinkedIn */}
        <a
          href="#"
          className="flex items-center gap-3 p-2.5 sm:p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </div>
          <div>
            <div className="font-medium text-sm sm:text-base">LinkedIn</div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Connect professionally
            </div>
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors hidden sm:block" />
        </a>

        {/* Schedule a Call */}
        <a
          href="https://wa.me/923102437201" target="_blank"
          className="flex items-center gap-3 p-2.5 sm:p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </div>
          <div>
            <div className="font-medium text-sm sm:text-base">Schedule a Call</div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Book a 30-minute chat
            </div>
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors hidden sm:block" />
        </a>
      </div>
    </CardContent>
  </Card>

  {/* Bottom Right: Recruiter CTA */}
  <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
    <CardContent className="p-3 sm:p-5">
      <div className="flex items-center gap-2.5 mb-3">
        <Coffee className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
        <h3 className="font-serif font-bold text-lg sm:text-xl">
          For Recruiters & Hiring Managers
        </h3>
      </div>
      <p className="text-muted-foreground text-xs sm:text-sm mb-4">
        Looking for a Full Stack Developer who can hit the ground running? I bring deep expertise in modern tech stacks and a proven track record of delivering results.
      </p>
      <div className="space-y-1.5 sm:space-y-2.5 mb-4">
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <span>2+ years of full-stack development experience</span>
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span>Led teams and mentored junior developers</span>
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <span>Specialized in AI, Python, and Full Stack Development technologies</span>
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span>Available for remote or hybrid positions</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 mt-14">
        <Button size="lg" className="flex-1">
          <Mail className="mr-2 h-4 w-4" /> Download Resume
        </Button>
        <Button size="lg" variant="outline" className="flex-1 bg-transparent">
          <Calendar className="mr-2 h-4 w-4" /> Schedule Interview
        </Button>
      </div>
    </CardContent>
  </Card>
</div>
</div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t flex items-center justify-center border-border">
        <p>&copy; 2025 Full Stack Developer. Sheikh Muhammad Ismail</p>
      </footer>
    </div>
  );
}
