import React from "react";
import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen text-white selection:bg-white selection:text-black">
      {/* Top Floating Glass Navigation Bar */}
      <Navbar />

      {/* Hero Scrollytelling Canvas Sequence (500vh container with sticky 100vh canvas + parallax overlay) */}
      <ScrollyCanvas totalFrames={30} frameFolder="/sequence" />

      {/* AI-Enabled Workflows & Process Transformations (Claude Skills, Sales Audits, Proposals, NTNT) */}
      <Projects />

      {/* 19-Year Leadership Career Journey (TTK Services / GetFriday progression) */}
      <Experience />

      {/* Core Competencies & Operating Tooling Matrix */}
      <Skills />

      {/* Executive Summary, Education, & Languages */}
      <About />

      {/* Executive Resume Hub & Direct Connect (Inquiry form removed, replaced with direct recruiter contact) */}
      <Contact />

      {/* Editorial Footer */}
      <Footer />
    </main>
  );
}
