"use client";

import React from "react";
import { motion } from "framer-motion";
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to turn your ideas into reality? I'm always excited to discuss
            new opportunities and innovative projects.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="flex flex-col w-full bg-neutral-900 text-white border border-gray-700 h-full">
              <CardContent className="p-5 flex-grow">
                <Talk />
              </CardContent>
            </Card>
          </motion.div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="flex flex-col w-full h-full border-l-4 border-primary bg-neutral-900 text-white">
              <CardContent className="p-5 flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <Badge className="bg-primary/20 text-primary text-xs sm:text-sm">
                    Available for New Projects
                  </Badge>
                </div>
                <h3 className="font-serif font-bold text-xl mb-2">
                  Ready to Start Immediately
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  I'm currently accepting new client projects and full-time
                  opportunities. Let's discuss how I can contribute to your
                  team's success.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-300">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Remote / Karachi, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Available within 1 week</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Connect */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="flex flex-col w-full h-full bg-neutral-900 text-white border border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-5 flex-grow">
                <h3 className="font-serif font-bold text-xl mb-4">
                  Quick Connect
                </h3>
                <div className="space-y-3">
                  {/* Email */}
                  <a
                    href="mailto:sheikhmuhammadismail79@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-700 hover:border-primary hover:bg-primary/10 transition-all group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="font-medium text-base truncate">Email</div>
                      <div className="text-sm text-gray-400 truncate">
                        sheikhmuhammadismail79@gmail.com
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-500 ml-auto group-hover:text-primary transition-colors hidden sm:block" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/sheikh-muhammad-ismail"
                    target="_blank"
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-700 hover:border-primary hover:bg-primary/10 transition-all group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-base">LinkedIn</div>
                      <div className="text-sm text-gray-400">
                        Connect professionally
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-500 ml-auto group-hover:text-primary transition-colors hidden sm:block" />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/923102437201"
                    target="_blank"
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-700 hover:border-primary hover:bg-primary/10 transition-all group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-base">
                        Schedule a Call
                      </div>
                      <div className="text-sm text-gray-400">
                        Book a 30-minute chat
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-500 ml-auto group-hover:text-primary transition-colors hidden sm:block" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recruiter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="flex flex-col w-full h-full bg-gradient-to-br from-neutral-900 via-black to-neutral-800 border border-gray-700 text-white">
              <CardContent className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <Coffee className="h-6 w-6 text-primary" />
                    <h3 className="font-serif font-bold text-xl">
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
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>2+ years of full-stack development experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>Led teams and mentored junior developers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>
                        Specialized in AI, Python, and Full Stack Development
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>Available for remote or hybrid positions</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
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
                    className="flex-1 bg-transparent text-white border-gray-600 hover:border-primary"
                  >
                    <Calendar className="mr-2 h-4 w-4" /> Schedule Interview
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
