"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ArrowDown, ExternalLink } from "lucide-react";
import PixelBlast from "./PixelBlast"; // 👈 background animation

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden min-h-screen flex flex-col justify-center items-center px-6 py-24">
      {/* 🎨 PixelBlast Background (only for Hero, not Navbar) */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[80px] left-0 w-full h-[calc(100%-80px)]" // 👈 Leaves space for navbar
        >
          <PixelBlast
            variant="circle"
            pixelSize={6}
            color="#B19EEF"
            patternScale={3}
            patternDensity={1.2}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0.25}
            transparent
          />
        </div>
      </div>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-zinc-900/80 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <Badge
            variant="secondary"
            className="bg-white/10 border border-white/20 text-white mb-6 text-sm font-medium backdrop-blur-md"
          >
            Available for new opportunities
          </Badge>

          <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Building the <span className="text-white/70">Future</span> of{" "}
            <span className="text-white">Technology</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Full Stack Developer specializing in{" "}
            <span className="text-white font-medium">AI</span> and{" "}
            <span className="text-white font-medium">Python</span>. Transforming
            ideas into elegant, high-performing digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-white text-black hover:bg-zinc-300 transition-all duration-300"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>

            <a
              href="/Sheikh Muhammad Ismail Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-white text-black hover:bg-white/10 transition-all duration-300"
              >
                Download Resume
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-8 justify-center lg:justify-start">
            <a
              href="#"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex-1 w-full max-w-lg relative">
          <div className="relative bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
            {/* Status */}
            <div className="flex items-center gap-3 mb-4 text-sm">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="text-zinc-400 font-mono">Currently coding...</div>
            </div>

            {/* Code Block */}
            <pre className="bg-black/40 border border-zinc-800 rounded-xl p-4 font-mono text-xs sm:text-sm text-zinc-300 overflow-x-auto">
{`const developer = {
  name: 'Sheikh Muhammad Ismail',
  skills: ['AI', 'Python', 'Web3', 'Next.js'],
  passion: 'Innovation',
}`}
            </pre>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Express.js",
                "Tailwind CSS",
              ].map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-white/10 border border-white/10 text-white text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 flex justify-center z-[2]">
        <ArrowDown className="h-6 w-6 text-white animate-bounce" />
      </div>
    </section>
  );
}