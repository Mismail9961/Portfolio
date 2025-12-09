"use client";
import React from "react";
import { Code, Cpu, Cloud, Globe } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-black text-white relative overflow-hidden"
    >
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_70%)]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4 text-white">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* FRONTEND */}
          <SkillCard
            icon={<Code className="h-6 w-6 text-white" />}
            title="Frontend"
            skills={[
              { name: "React / Next.js", value: 95 },
              { name: "TailwindCSS / Material UI", value: 90 },
              { name: "Redux / Zustand / Framer Motion", value: 92 },
            ]}
          />

          {/* BACKEND */}
          <SkillCard
            icon={<Cpu className="h-6 w-6 text-white" />}
            title="Backend"
            skills={[
              { name: "Node.js / Express.js", value: 88 },
              { name: "GraphQL / Auth Systems", value: 85 },
              { name: "PostgreSQL / MongoDB", value: 80 },
            ]}
          />

          {/* FULL-STACK / TESTING */}
          <SkillCard
            icon={<Cloud className="h-6 w-6 text-white" />}
            title="Full-Stack / Testing"
            skills={[
              { name: "Cypress / Playwright", value: 87 },
              { name: "Selenium", value: 83 },
              { name: "CI / CD", value: 90 },
            ]}
          />

          {/* PYTHON */}
          <SkillCard
            icon={<Globe className="h-6 w-6 text-white" />}
            title="Python"
            skills={[
              { name: "Core Python", value: 78 },
              { name: "Django", value: 82 },
              { name: "Automation / Scripting", value: 75 },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

/* --- Skill Card Component --- */
const SkillCard = ({
  icon,
  title,
  skills,
}: {
  icon: React.ReactNode;
  title: string;
  skills: { name: string; value: number }[];
}) => (
  <Card className="group bg-neutral-900 border border-neutral-800 rounded-2xl hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300">
    <CardHeader className="text-center pb-4">
      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors">
        {icon}
      </div>
      <CardTitle className="text-lg font-serif tracking-wide text-white">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      {skills.map((s, i) => (
        <Skill key={i} name={s.name} value={s.value} />
      ))}
    </CardContent>
  </Card>
);

/* --- Skill Progress Bar Component --- */
const Skill = ({ name, value }: { name: string; value: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm text-gray-300">
      <span>{name}</span>
      <span>{value}%</span>
    </div>
    <Progress
      value={value}
      className="h-2 bg-neutral-800 [&>div]:bg-white transition-all"
    />
  </div>
);

export default SkillsSection;