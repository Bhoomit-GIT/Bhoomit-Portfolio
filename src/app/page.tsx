"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import BottomBar from "@/components/BottomBar";
import styles from "@/components/Hero.module.css";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header activeNav="Home" />
      <main className={styles.heroSection} id="home">
        <Hero />
        <BottomBar currentSlide="01" totalSlides="05" />
      </main>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Approach />
      <Contact />
    </div>
  );
}
