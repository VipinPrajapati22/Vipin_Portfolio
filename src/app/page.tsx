import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import CareerGoals from "@/components/CareerGoals";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Scroll indicator bar */}
      <ScrollProgress />
      
      {/* Navigation header */}
      <Navbar />
      
      {/* Main landing container */}
      <main className="flex-1 w-full relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <CareerGoals />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      {/* Footer information */}
      <Footer />
    </>
  );
}
