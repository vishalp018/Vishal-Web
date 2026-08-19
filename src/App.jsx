import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Achievements from "./components/Achievements/Achievements";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";
import FloatingParticles from "./components/FloatingParticles";

const App = () => {
  return (
    <div className="bg-dark min-h-screen overflow-x-hidden relative">
      <FloatingParticles />
      <BlurBlob position={{ top: "20%", left: "10%" }} size={{ width: "40%", height: "40%" }} color="dark" />
      <BlurBlob position={{ top: "55%", left: "90%" }} size={{ width: "35%", height: "35%" }} color="mid" />
      <BlurBlob position={{ top: "80%", left: "25%" }} size={{ width: "30%", height: "30%" }} color="light" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Work />
        <Education />
        <Contact />
        <Footer />
        <SpeedInsights />
      </div>
    </div>
  );
};

export default App;
