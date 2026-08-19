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

const App = () => {
  return (
    <div className="bg-[#050414] min-h-screen overflow-x-hidden">
      <BlurBlob position={{ top: "25%", left: "15%" }} size={{ width: "35%", height: "35%" }} />
      <BlurBlob position={{ top: "60%", left: "85%" }} size={{ width: "30%", height: "30%" }} />
      <BlurBlob position={{ top: "85%", left: "30%" }} size={{ width: "25%", height: "25%" }} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative">
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
