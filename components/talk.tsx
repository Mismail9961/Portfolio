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
    <Card className="bg-white border border-black text-black hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="font-serif text-2xl flex items-center gap-3 text-black">
          <Send className="h-6 w-6 text-black" />
          Get In Touch
        </CardTitle>
        <p className="text-gray-600">
          Have a project in mind? Let's discuss how we can work together.
        </p>
      </CardHeader>

      <CardContent>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-black">Name</label>
              <Input
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="border border-black text-black placeholder-gray-400 focus:ring-0 focus:border-black"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-black">Email</label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="border border-black text-black placeholder-gray-400 focus:ring-0 focus:border-black"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-black">Subject</label>
            <Input
              id="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Collaboration, job opportunity, etc."
              className="border border-black text-black placeholder-gray-400 focus:ring-0 focus:border-black"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-black">Message</label>
            <Textarea
              id="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={6}
              className="border border-black text-black placeholder-gray-400 focus:ring-0 focus:border-black"
            />
          </div>

          <Button
            size="lg"
            className="w-full text-lg py-6 bg-black text-white hover:bg-white hover:text-black border border-black transition-all duration-300"
            disabled={loading}
          >
            <Send className="mr-2 h-5 w-5" />
            {loading ? "Sending..." : "Send Message"}
          </Button>

          {status && (
            <p
              className={`text-sm text-center ${
                status.includes("success") ? "text-black" : "text-gray-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
