"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Project from "../components/project";
import Talk from "../components/talk";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import SkillsSection from "@/components/SkillsSection";
import TextShuffle from "@/components/TextShuffle"
import TextShuffleLeft from "@/components/TextShuffleLeft"
import ExperienceTimeline from "@/components/ExperienceTimeline"
import ContactSection from "@/components/ContactSection"
import {
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Calendar,
  Coffee,
} from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar/>
      {/* Hero Section */}
      <Hero />
      <SkillsSection/>
      {/* Projects Showcase Section */}
      <Project />
      <TextShuffle/>
      <TextShuffleLeft/>
      <ExperienceTimeline/>
      <ContactSection/>
      

      {/* Footer */}
      <footer className="py-5 px-6 text-white flex items-center justify-center ">
        <p>&copy; 2025 Full Stack Developer. Sheikh Muhammad Ismail</p>
      </footer>
    </div>
  );
}
