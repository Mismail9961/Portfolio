"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

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

  useEffect(() => {
    axios
      .get("/api/showprojects")
      .then((res) => {
        // Log and adjust according to your API structure
        console.log("API response:", res.data);
        // If API returns { projects: [...] }
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
    return <div className="text-center py-20">Loading projects...</div>;
  }

  if (!projects.length) {
    return <div className="text-center py-20">No projects found.</div>;
  }

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions showcasing expertise across AI, Python, and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((proj) => (
            <Card
              key={proj._id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="font-serif text-xl mb-2">{proj.name}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {proj.uses?.map((tech, idx) => (
                        <Badge key={idx} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    New
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{proj.description}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary"
                  onClick={() => window.open(proj.link, "_blank")}
                >
                  Learn More <ExternalLink className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-transparent"
            onClick={() => window.open("https://github.com/Mismail9961", "_blank")}
          >
            <Github className="mr-2 h-5 w-5" />
            View More Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}