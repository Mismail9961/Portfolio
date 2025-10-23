"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Database, Code } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const timelineData = [
  {
    title: "Full Stack Developer",
    company: "Core4tech",
    duration: "Jan 2025 - Present",
    icon: <Shield className="h-8 w-8 text-black" />,
    color: "bg-white",
    description:
      "I develop robust landing page websites and scalable web applications as a full stack developer for Core4tech, utilizing the MERN stack and Redux, while creating frontend dApps, managing project repositories and deployments, and continuously advancing my expertise in blockchain and full stack development.",
  },
  {
    title: "Frontend Developer",
    company: "GFX MANSION",
    duration: "Sep 2023 - Nov 2024",
    icon: <Database className="h-8 w-8 text-black" />,
    color: "bg-white",
    description:
      "Developed and deployed multiple web applications using modern frameworks. Implemented Frontend practices and reduced deployment time by 70%.",
  },
  {
    title: "Junior MERN Stack Developer",
    company: "@Codex",
    duration: "Nov 2024 - April 2025",
    icon: <Code className="h-8 w-8 text-black" />,
    color: "bg-white",
    description:
      "I develop landing page websites and full-stack applications using the MERN stack, building responsive and optimized frontends while designing and maintaining scalable backends. I work extensively with MongoDB and Prisma for efficient database management and deployment workflows.",
  },
];

export default function ExperienceTimeline() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-black text-white transition-colors duration-500"
    >
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A timeline of growth, innovation, and impactful contributions to the
            tech industry
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-start gap-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                {/* Icon */}
                <div
                  className={`relative z-10 w-16 h-16 ${item.color} rounded-full flex items-center justify-center shadow-lg`}
                >
                  {item.icon}
                </div>

                {/* Card */}
                <Card className="flex-1 bg-neutral-900 border border-gray-700 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="font-serif text-xl text-white">
                        {item.title}
                      </CardTitle>
                      <Badge
                        variant="secondary"
                        className="bg-gray-800 text-white border border-gray-600"
                      >
                        {item.duration}
                      </Badge>
                    </div>
                    <p className="text-gray-400 font-medium">{item.company}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-4">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
