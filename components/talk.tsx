"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactCard() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch {
      setStatus("Error sending message.");
    }
    setLoading(false);
  };

  return (
    <Card className="hover:shadow-xl transition-shadow duration-300 w-full max-w-2xl mx-auto">
      <CardHeader className="space-y-2 p-4 sm:p-6">
        <CardTitle className="font-serif text-xl sm:text-2xl flex items-center gap-2 sm:gap-3">
          <Send className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          Get In Touch
        </CardTitle>
        <p className="text-muted-foreground text-sm sm:text-base">
          Have a project in mind? Let's discuss how we can work together.
        </p>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="name" className="text-xs sm:text-sm font-medium">Name</label>
              <Input
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="text-sm sm:text-base"
              />
            </div>
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="email" className="text-xs sm:text-sm font-medium">Email</label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="text-sm sm:text-base"
              />
            </div>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <label htmlFor="subject" className="text-xs sm:text-sm font-medium">Subject</label>
            <Input
              id="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Collaboration, job opportunity, etc."
              className="text-sm sm:text-base"
            />
          </div>
          <div className="space-y-1 sm:space-y-2">
            <label htmlFor="message" className="text-xs sm:text-sm font-medium">Message</label>
            <Textarea
              id="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={5}
              className="text-sm sm:text-base"
            />
          </div>
          <Button
            size="lg"
            className="w-full py-5 text-base sm:text-lg"
            disabled={loading}
          >
            <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            {loading ? "Sending..." : "Send Message"}
          </Button>
          {status && (
            <p className="text-xs sm:text-sm text-center text-muted-foreground">{status}</p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
