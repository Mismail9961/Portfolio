"use client";
import Project from "../components/project";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import SkillsSection from "@/components/SkillsSection";
import TextShuffle from "@/components/TextShuffle"
import TextShuffleLeft from "@/components/TextShuffleLeft"
import ExperienceTimeline from "@/components/ExperienceTimeline"
import ContactSection from "@/components/ContactSection"


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
