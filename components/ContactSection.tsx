"use client";

import React from "react";
import {
  Mail,
  Calendar,
  MapPin,
  Linkedin,
  ExternalLink,
  Coffee,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Talk from "@/components/talk";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-black text-white transition-colors duration-500"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4 text-white">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to turn your ideas into reality? I'm always excited to discuss
            new opportunities and innovative projects.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Contact Form */}
          <div className="flex">
            <Card className="flex flex-col w-full bg-black text-white border border-gray-700 h-full">
              <CardContent className="p-5 flex-grow">
                <Talk />
              </CardContent>
            </Card>
          </div>

          {/* Availability */}
          <div className="flex">
            <Card className="flex flex-col w-full h-full border-l-4 border-white bg-black text-white">
              <CardContent className="p-5 flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                  <Badge className="bg-white/10 text-white text-xs sm:text-sm">
                    Available for New Projects
                  </Badge>
                </div>
                <h3 className="font-serif font-bold text-xl mb-2 text-white">
                  Ready to Start Immediately
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  I'm currently accepting new client projects and full-time
                  opportunities. Let's discuss how I can contribute to your
                  team's success.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-300">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-white" />
                    <span>Remote / Karachi, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-white" />
                    <span>Available within 1 week</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Connect */}
          <div className="flex">
            <Card className="flex flex-col w-full h-full bg-black text-white border border-gray-700 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-shadow duration-300">
              <CardContent className="p-5 flex-grow">
                <h3 className="font-serif font-bold text-xl mb-4 text-white">
                  Quick Connect
                </h3>
                <div className="space-y-3">
                  {/* Email */}
                  <a
                    href="mailto:sheikhmuhammadismail79@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-700 hover:border-white hover:bg-white/10 transition-all group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="font-medium text-base truncate text-white">
                        Email
                      </div>
                      <div className="text-sm text-gray-400 truncate">
                        sheikhmuhammadismail79@gmail.com
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-500 ml-auto group-hover:text-white transition-colors hidden sm:block" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/sheikh-muhammad-ismail"
                    target="_blank"
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-700 hover:border-white hover:bg-white/10 transition-all group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Linkedin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-base text-white">
                        LinkedIn
                      </div>
                      <div className="text-sm text-gray-400">
                        Connect professionally
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-500 ml-auto group-hover:text-white transition-colors hidden sm:block" />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/923102437201"
                    target="_blank"
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-700 hover:border-white hover:bg-white/10 transition-all group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-base text-white">
                        Schedule a Call
                      </div>
                      <div className="text-sm text-gray-400">
                        Book a 30-minute chat
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-500 ml-auto group-hover:text-white transition-colors hidden sm:block" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recruiter CTA */}
          <div className="flex">
            <Card className="flex flex-col w-full h-full bg-gradient-to-br from-black via-neutral-900 to-black border border-gray-700 text-white">
              <CardContent className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <Coffee className="h-6 w-6 text-white" />
                    <h3 className="font-serif font-bold text-xl text-white">
                      For Recruiters & Hiring Managers
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Looking for a Full Stack Developer who can hit the ground
                    running? I bring deep expertise in modern tech stacks and a
                    proven track record of delivering results.
                  </p>

                  <div className="space-y-2 mb-6 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span>2+ years of full-stack development experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span>Led teams and mentored junior developers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span>
                        Specialized in AI, Python, and Full Stack Development
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span>Available for remote or hybrid positions</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <Button
                    asChild
                    size="lg"
                    className="flex-1 bg-white text-black hover:bg-black hover:text-white border border-white transition-all"
                  >
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
                    className="flex-1 bg-transparent text-white border border-white hover:bg-white hover:text-black transition-all"
                  >
                    <Calendar className="mr-2 h-4 w-4" /> Schedule Interview
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}