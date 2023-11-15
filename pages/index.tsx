import Image from "next/image";
import Head from "next/head";
import BackgroundCircles from "@/pages/components/BackgroundCircles";
import Homepage from "@/pages/components/Homepage";
import Navbar from "@/pages/components/Navbar";
import About from "./components/About";
import { useEffect, useState } from "react";
import Project from "./components/Project";
import Languages from "./components/Languages";
import Contact from "./components/Contact";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const containerDiv = document.getElementById("container") || null;
    if (!containerDiv) {
      return;
    }

    const updatePosition = () => {
      setScrollPosition(containerDiv?.scrollTop);
    };

    containerDiv.addEventListener("scroll", updatePosition);
    return () => containerDiv.removeEventListener("scroll", updatePosition);
  }, []);
  return (
    <div
      id="container"
      //overflow-y-scroll
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory   z-0 scrollbar scrollbar-thumb-rounded-[5px] scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40 scroll-smooth"
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <title>Geoffrey&apos;s Portfolio</title> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="hero" className="snap-start">
        <Navbar />
      </section>

      <section id="homepage" className="snap-center">
        <Homepage />
      </section>

      <section id="about" className="snap-start">
        <About />
      </section>

      <section id="projects" className="snap-start">
        <Project />
      </section>

      <section id="skills" className="snap-start">
        <Languages />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}
