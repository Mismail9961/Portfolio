import Navbar from "@/components/Navbar";
import AllProject from "@/components/all-projects";
import ContactSection from "@/components/ContactSection";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <Navbar />
      {/* Projects Showcase Section */}
      <AllProject />
      <ContactSection />
      <footer className="py-5 px-6 bg-black text-white flex items-center justify-center ">
        <p>&copy; 2025 Full Stack Developer. Sheikh Muhammad Ismail</p>
      </footer>
    </div>
  );
}
