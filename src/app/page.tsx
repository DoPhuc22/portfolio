'use client'

import AboutSection from "@/components/AboutSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/NavBar";
import ProjectSection from "@/components/ProjectSection";

export default function NavBar(){

  return(
    <main className="flex min-h-screen flex-col bg-[#1a1818]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
        <EmailSection/>
      </div>
      <hr></hr>
      <Footer/>
    </main>
  );
}
