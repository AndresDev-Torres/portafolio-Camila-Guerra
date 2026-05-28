import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Painting } from "@/components/Painting";
import { Branding } from "@/components/Branding";
import { Photography } from "@/components/Photography";
import { Advertising } from "@/components/Advertising";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0B1020] text-[#F0EBFF]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Painting />
        <Branding />
        <Photography />
        <Advertising />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
