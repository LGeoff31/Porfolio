import Image from "next/image";
import Head from "next/head";
import Homepage from "@/pages/components/Homepage";
import Navbar from "@/pages/components/Navbar";
import About from "./components/About";
import { useEffect, useState } from "react";
import Project from "./components/Project";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Github from "./components/Github";
import Blog from "./components/Blog";
import { BackgroundElements } from "./components/background-elements";

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
    <>
      <BackgroundElements />
      <div
        id="container"
        className="relative z-10 text-white h-screen snap-y snap-mandatory scrollbar scrollbar-thumb-rounded-[5px] scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40 scroll-smooth overflow-y-auto"
      >
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

      <section id="hero" className="snap-start">
        <Navbar useScrollLinks={true} />
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

      <section id="blog" className="snap-start">
        <Blog />
      </section>
      {/* <section id="skills" className="snap-start">
        <Languages />
      </section> */}

      {/* <section id="github" className="snap-start">
        <Github />
      </section> */}

      <section id="contact" className="snap-start">
        <Contact />
      </section>
      </div>
    </>
  );
}
