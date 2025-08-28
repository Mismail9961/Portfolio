import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Project from "../components/project";
import Talk from "../components/talk";
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
                href="/#about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="/all-projects"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="/#skills"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="/#philosophy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Philosophy
              </a>
              <a
                href="/#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4 text-sm font-medium">
                  Available for new opportunities
                </Badge>
                <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
                  Building the <span className="text-primary">Future</span> of
                  Technology
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                  Full Stack Developer specializing in{" "}
                  <span className="text-accent font-medium">AI</span> and{" "}
                  <span className="text-accent font-medium">Python</span>{" "}
                  technologies. Transforming complex problems into elegant
                  solutions.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a href="#projects">
                  <Button size="lg" className="text-lg px-8 py-6">
                    View My Work
                    <ArrowDown className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="/Sheikh Muhammad Ismail Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 bg-transparent"
                  >
                    Download Resume
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 justify-center lg:justify-start">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors p-2"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors p-2"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors p-2"
                  aria-label="Email Contact"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="flex-1 w-full max-w-full sm:max-w-lg px-5 sm:px-0">
              <div className="relative">
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl animate-pulse"></div>

                <div className="relative bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-2xl">
                  <div className="space-y-4">
                    {/* Status */}
                    <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full animate-pulse"></div>
                      <div className="text-muted-foreground font-mono">
                        Currently coding...
                      </div>
                    </div>

                    {/* Code Block */}
                    <div className="bg-muted rounded-lg p-3 sm:p-4 font-mono text-[10px] sm:text-sm overflow-x-auto">
                      <div className="text-accent">const</div>
                      <div className="text-foreground">developer = {"{"}</div>
                      <div className="ml-3 sm:ml-4 text-muted-foreground">
                        name:{" "}
                        <span className="text-primary">
                          'Sheikh Muhammad Ismail'
                        </span>
                        ,
                      </div>
                      <div className="ml-3 sm:ml-4 text-muted-foreground">
                        skills:{" "}
                        <span className="text-accent">
                          ['AI', 'Python', 'Web3', 'Web Developer']
                        </span>
                        ,
                      </div>
                      <div className="ml-3 sm:ml-4 text-muted-foreground">
                        passion:{" "}
                        <span className="text-primary">'Innovation'</span>
                      </div>
                      <div className="text-foreground">{"}"}</div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">Express.js</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="flex justify-center pb-8">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized in cutting-edge technologies across the full
              development stack
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-serif">Frontend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>React/Next.js</span>
                    <span className="text-muted-foreground">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>TailwindCSS/Material UI</span>
                    <span className="text-muted-foreground">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Redux/Zustand/Framer Motion</span>
                    <span className="text-muted-foreground">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                  <Cpu className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg font-serif">Backend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Node.js/Express.js</span>
                    <span className="text-muted-foreground">94%</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>GraphQL/Authentication & Authorization</span>
                    <span className="text-muted-foreground">95%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>PostgreSQL/MySQL & MongoDB</span>
                    <span className="text-muted-foreground">90%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-serif">
                  Full-Stack / End-to-End Testing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Cypress/Playwright</span>
                    <span className="text-muted-foreground">87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Selenium</span>
                    <span className="text-muted-foreground">83%</span>
                  </div>
                  <Progress value={83} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>CI/CD</span>
                    <span className="text-muted-foreground">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg font-serif">Python</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Core Python</span>
                    <span className="text-muted-foreground">88%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Django</span>
                    <span className="text-muted-foreground">86%</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Scripting & Automation</span>
                    <span className="text-muted-foreground">85%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <Project />

      {/* Philosophy & Insights Section */}
      <section id="philosophy" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Engineering Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles and insights that guide my approach to building
              exceptional software
            </p>
          </div>

          {/* Philosophy Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Core Philosophy */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl">
                    Code as Craft
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <blockquote className="text-muted-foreground italic text-lg leading-relaxed pl-6">
                    "Every line of code is a brushstroke on the canvas of
                    possibility. I believe in writing Web Applications that not
                    only solves problems but inspires others to build upon it."
                  </blockquote>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">
                      Clean, readable code is a love letter to your future self
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">
                      Performance optimization should never compromise
                      maintainability
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">
                      Documentation is the bridge between intention and
                      implementation
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Problem-Solving Approach */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-serif text-xl">
                    Problem-First Thinking
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Before writing a single line of code, I invest time in deeply
                  understanding the problem space. This approach has led to
                  solutions that are not just functional, but transformative.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Listen & Understand</h4>
                      <p className="text-sm text-muted-foreground">
                        Engage with stakeholders to uncover the real problem
                        behind the stated requirements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Design & Prototype</h4>
                      <p className="text-sm text-muted-foreground">
                        Create minimal viable solutions to validate assumptions
                        early
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Iterate & Improve</h4>
                      <p className="text-sm text-muted-foreground">
                        Continuously refine based on feedback and changing
                        requirements
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Professional Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of growth, innovation, and impactful contributions to
              the tech industry
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              <div className="relative flex items-start gap-8">
                <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <Card className="flex-1 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="font-serif text-xl">
                        Full Stack Developer
                      </CardTitle>
                      <Badge variant="secondary">Jan 2025 - Present</Badge>
                    </div>
                    <p className="text-primary font-medium">Core4tech</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      I develop robust landing page websites and scalable web
                      applications as a full stack developer for Core4tech,
                      utilizing the MERN stack and Redux, while creating
                      frontend dApps, managing project repositories and
                      deployments, and continuously advancing my expertise in
                      blockchain and full stack development.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative flex items-start gap-8">
                <div className="relative z-10 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                  <Database className="h-8 w-8 text-accent-foreground" />
                </div>
                <Card className="flex-1 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="font-serif text-xl">
                        Frontend Developer
                      </CardTitle>
                      <Badge variant="secondary">Sep 2023 - Nov 2024</Badge>
                    </div>
                    <p className="text-primary font-medium">GFX MANSION</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Developed and deployed multiple web applications using
                      modern frameworks. Implemented Frontend practices and
                      reducing deployment time by 70%.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative flex items-start gap-8">
                <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Code className="h-8 w-8 text-primary-foreground" />
                </div>
                <Card className="flex-1 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="font-serif text-xl">
                        Junior Mern Stack Developer
                      </CardTitle>
                      <Badge variant="secondary">Nov 2024 - April 2025</Badge>
                    </div>
                    <p className="text-primary font-medium">@Codex</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      I develop landing page websites and full-stack
                      applications using the MERN stack, building responsive and
                      optimized frontends while designing and maintaining
                      scalable backends. I work extensively with MongoDB for
                      data storage and Prisma as an ORM for efficient database
                      management. I also manage project repositories,
                      deployments, and continuously enhance my full-stack
                      development skills through modern tools and best
                      practices.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary text-xs sm:text-sm"
                  >
                    Available for New Projects
                  </Badge>
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl mb-1.5">
                  Ready to Start Immediately
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3">
                  I'm currently accepting new client projects and full-time
                  opportunities. Let's discuss how I can contribute to your
                  team's success.
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
                <h3 className="font-serif font-bold text-lg sm:text-xl mb-3">
                  Quick Connect
                </h3>
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
                      <div className="font-medium text-sm sm:text-base truncate">
                        Email
                      </div>
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
                      <div className="font-medium text-sm sm:text-base">
                        LinkedIn
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        Connect professionally
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors hidden sm:block" />
                  </a>

                  {/* Schedule a Call */}
                  <a
                    href="https://wa.me/923102437201"
                    target="_blank"
                    className="flex items-center gap-3 p-2.5 sm:p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm sm:text-base">
                        Schedule a Call
                      </div>
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
                  Looking for a Full Stack Developer who can hit the ground
                  running? I bring deep expertise in modern tech stacks and a
                  proven track record of delivering results.
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
                    <span>
                      Specialized in AI, Python, and Full Stack Development
                      technologies
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Available for remote or hybrid positions</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-14">
  <Button asChild size="lg" className="flex-1">
    <a
      href="/Sheikh Muhammad Ismail Resume.pdf"
      download
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center"
    >
      <Mail className="mr-2 h-4 w-4" /> Download Resume
    </a>
  </Button>

  <Button
    size="lg"
    variant="outline"
    className="flex-1 bg-transparent"
  >
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
