"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Folder } from "lucide-react";

// Type definition
interface Project {
  _id: string;
  name: string;
  description: string;
  uses: string[];
  link: string;
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("/api/showprojects")
      .then((res) => {
        console.log("API response:", res.data);
        const data = Array.isArray(res.data) ? res.data : res.data.projects;
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          console.error("API did not return an array.", res.data);
          setProjects([]);
        }
      })
      .catch((err) => console.error("Error fetching projects:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-black text-center text-white">
        <p className="text-gray-400 animate-pulse">Loading projects...</p>
      </section>
    );
  }

  if (!projects.length) {
    return (
      <section className="py-20 bg-black text-center text-white">
        <p className="text-gray-500">No projects found.</p>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="py-24 bg-black text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_70%)]" />

      <div className="container mt-9 mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4 text-white">
            All Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Innovative solutions showcasing expertise across AI, Python, and
            full-stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {projects.map((proj) => (
            <Card
              key={proj._id}
              className="group bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-white/20 hover:shadow-[0_0_25px_rgba(255,255,255,0.07)] transition-all duration-500 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="font-serif text-xl mb-3 text-white group-hover:text-gray-100 transition-colors">
                      {proj.name}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {proj.uses?.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="border-white/10 text-gray-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-white/10 text-white text-xs font-medium px-3 py-1"
                  >
                    New
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {proj.description}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white hover:text-black transition-all duration-300"
                  onClick={() => window.open(proj.link, "_blank")}
                >
                  Learn More
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border border-white/30 text-black hover:bg-white hover:text-black transition-all duration-300"
            onClick={() => router.push("/all-projects")}
          >
            <Folder className="mr-2 h-5 w-5" />
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
