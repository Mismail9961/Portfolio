import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Code2, Rocket } from 'lucide-react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = ['Python', 'React', 'Next.js', 'Node.js', 'React Native', 'Django', 'GraphQL', 'TypeScript', 'Docker'];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-3 sm:px-4 py-12 sm:py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
        
        {/* Gradient Orbs - White theme */}
        <div 
          className="absolute top-1/4 -left-48 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
        <div 
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            animationDelay: '1s'
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={`relative z-10 max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
              <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
              <span className="text-xs sm:text-sm text-white/80 font-medium">Available for Projects</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
                Crafting Digital
                <span className="block text-white/60">
                  Experiences
                </span>
              </h1>
              <p className="text-base sm:text-xl text-white/60 max-w-xl leading-relaxed">
                Full Stack Developer & React Native Developer turning complex problems into elegant solutions. 
                Specialized in building scalable applications with cutting-edge technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-white/20 text-sm sm:text-base">
                View My Work
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base">
                Get in Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 pt-2 sm:pt-4">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#', label: 'Email' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 sm:w-12 h-10 sm:h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <social.icon className="w-4 sm:w-5 h-4 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Interactive Card */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl">
              {/* Status Indicator */}
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="relative">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white rounded-full animate-ping" />
                </div>
                <span className="text-white/70 font-mono text-xs sm:text-sm">Currently building...</span>
              </div>

              {/* Code Preview */}
              <div className="bg-black/50 rounded-lg sm:rounded-xl p-3 sm:p-6 mb-4 sm:mb-6 border border-white/10">
                <div className="flex gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white/40 rounded-full" />
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white/40 rounded-full" />
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white/40 rounded-full" />
                </div>
                <pre className="text-xs sm:text-sm text-white/80 font-mono overflow-x-auto">
{`const developer = {
  name: "Sheikh Muhammad Ismail",
  role: "Full Stack & React Native Developer",
  expertise: ["React Native", "Python", "Node Js"],
  passion: "Innovation ✨",
  status: "Open to opportunities"
}`}
                </pre>
              </div>

              {/* Skills Grid */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 text-white/60 text-xs sm:text-sm font-semibold">
                  <Code2 className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  <span>Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 sm:px-4 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-md sm:rounded-lg text-white text-xs sm:text-sm font-medium hover:bg-white/20 transition-colors cursor-default"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">20+</div>
                  <div className="text-xs text-white/50">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">2+</div>
                  <div className="text-xs text-white/50">Years Exp</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">100%</div>
                  <div className="text-xs text-white/50">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-12 sm:w-16 h-12 sm:h-16 bg-white text-black rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-white/20 animate-float">
              <Rocket className="w-6 sm:w-8 h-6 sm:h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/20 rounded-full p-1">
          <div className="w-1 sm:w-1.5 h-2.5 sm:h-3 bg-white/60 rounded-full mx-auto animate-scroll" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}