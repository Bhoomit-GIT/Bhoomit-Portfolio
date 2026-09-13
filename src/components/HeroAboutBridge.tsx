"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./HeroAboutBridge.module.css";

interface HeroAboutContextType {
  isTravelingActive: boolean;
}

const HeroAboutContext = createContext<HeroAboutContextType>({
  isTravelingActive: false,
});

export const useHeroAbout = () => useContext(HeroAboutContext);

export default function HeroAboutBridge({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const travelingRef = useRef<HTMLDivElement>(null);
  const [isTravelingActive, setIsTravelingActive] = useState(false);

  const coordsRef = useRef<{
    heroLeft: number;
    heroTop: number;
    heroWidth: number;
    aboutLeft: number;
    aboutTop: number;
    aboutWidth: number;
    scrollRange: number;
  } | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const measureSlots = () => {
      if (!wrapperRef.current) return;
      const isDesktop = window.innerWidth > 900;
      if (!isDesktop) {
        setIsTravelingActive(false);
        coordsRef.current = null;
        if (wrapperRef.current) {
          wrapperRef.current.style.setProperty("--hero-exit", "0");
          wrapperRef.current.style.setProperty("--about-pillar", "1");
          wrapperRef.current.style.setProperty("--about-narrative", "1");
        }
        return;
      }

      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const heroSlot = document.getElementById("hero-portrait-slot");
      const aboutSlot = document.getElementById("about-portrait-slot");
      const aboutSection = document.getElementById("about");

      if (!heroSlot || !aboutSlot || !aboutSection) return;

      const heroRect = heroSlot.getBoundingClientRect();
      const aboutRect = aboutSlot.getBoundingClientRect();

      const heroLeft = heroRect.left - wrapperRect.left;
      const heroTop = heroRect.top - wrapperRect.top;
      const heroWidth = heroRect.width;

      const aboutLeft = aboutRect.left - wrapperRect.left;
      const aboutTop = aboutRect.top - wrapperRect.top;
      const aboutWidth = aboutRect.width;

      // Scroll distance until the About section reaches top of viewport
      const scrollRange = Math.max(1, aboutSection.offsetTop);

      coordsRef.current = {
        heroLeft,
        heroTop,
        heroWidth,
        aboutLeft,
        aboutTop,
        aboutWidth,
        scrollRange,
      };

      setIsTravelingActive(true);
      updatePosition();
    };

    const updatePosition = () => {
      if (!travelingRef.current || !coordsRef.current) return;

      const scrollY = window.scrollY;
      const {
        heroLeft,
        heroTop,
        heroWidth,
        aboutLeft,
        aboutTop,
        aboutWidth,
        scrollRange,
      } = coordsRef.current;

      // Progress normalized from 0 (Hero) to 1 (About)
      const rawProgress = Math.min(1, Math.max(0, scrollY / scrollRange));

      // Separate horizontal progress: smooth diagonal arc that completes by ~78% scroll
      const rawX = Math.min(1, Math.max(0, scrollY / (scrollRange * 0.78)));
      const tx =
        rawX < 0.5
          ? 2 * rawX * rawX
          : 1 - Math.pow(-2 * rawX + 2, 2) / 2;

      // Vertical progress uses smooth natural ease
      const ty =
        rawProgress < 0.5
          ? 2 * rawProgress * rawProgress
          : 1 - Math.pow(-2 * rawProgress + 2, 2) / 2;

      const currentLeft = heroLeft + (aboutLeft - heroLeft) * tx;
      const currentTop = heroTop + (aboutTop - heroTop) * ty;
      const currentWidth = heroWidth + (aboutWidth - heroWidth) * tx;
      const currentHeight = currentWidth * (1309 / 1201);

      // Bottom mist fade appears smoothly as the image enters the About composition
      const mistT = Math.min(1, Math.max(0, (rawProgress - 0.15) / 0.75));
      const solidStop = 100 - (100 - 62) * mistT;
      const fadeStop = 100 - (100 - 94) * mistT;
      const mask =
        mistT > 0.02
          ? `linear-gradient(to bottom, black ${solidStop.toFixed(1)}%, transparent ${fadeStop.toFixed(1)}%)`
          : "none";

      travelingRef.current.style.transform = `translate3d(${currentLeft.toFixed(1)}px, ${currentTop.toFixed(1)}px, 0)`;
      travelingRef.current.style.width = `${currentWidth.toFixed(1)}px`;
      travelingRef.current.style.height = `${currentHeight.toFixed(1)}px`;
      travelingRef.current.style.webkitMaskImage = mask;
      travelingRef.current.style.maskImage = mask;

      // Choreograph surrounding elements via CSS variables on wrapper
      if (wrapperRef.current) {
        const ease = (v: number) =>
          v < 0.5 ? 2 * v * v : 1 - Math.pow(-2 * v + 2, 2) / 2;

        // 1. Hero peripherals disperse gracefully during the initial departure (0.00 -> 0.28)
        const rawHeroExit = Math.min(1, Math.max(0, rawProgress / 0.28));
        const heroExit = ease(rawHeroExit);

        // 2. About Me left typographic statement glides in (0.30 -> 0.75)
        const rawAboutLeft = Math.min(1, Math.max(0, (rawProgress - 0.30) / 0.45));
        const aboutLeftVal = ease(rawAboutLeft);

        // 3. About Me architectural frame (pillar, connecting line, rotated text) assembles (0.36 -> 0.76)
        const rawPillar = Math.min(1, Math.max(0, (rawProgress - 0.36) / 0.40));
        const aboutPillar = ease(rawPillar);

        // 4. "A BETTER VERSION EVERYDAY" tag slides into place ONLY after portrait descends past upper slot (0.72 -> 0.96)
        // This ensures zero overlap with the portrait's neck during transit!
        const rawTag = Math.min(1, Math.max(0, (rawProgress - 0.72) / 0.24));
        const aboutTag = ease(rawTag);

        // 5. About Me narrative column (greeting, lead, body, 4 icons) rises into place (0.65 -> 0.95)
        // Keeps the text hidden while the portrait crosses horizontally
        const rawNarrative = Math.min(1, Math.max(0, (rawProgress - 0.65) / 0.30));
        const aboutNarrative = ease(rawNarrative);

        // 6. Right metrics & perspective column and bottom bar assemble as docked (0.72 -> 0.98)
        const rawStats = Math.min(1, Math.max(0, (rawProgress - 0.72) / 0.26));
        const aboutStats = ease(rawStats);

        wrapperRef.current.style.setProperty("--hero-exit", heroExit.toFixed(3));
        wrapperRef.current.style.setProperty("--about-left", aboutLeftVal.toFixed(3));
        wrapperRef.current.style.setProperty("--about-pillar", aboutPillar.toFixed(3));
        wrapperRef.current.style.setProperty("--about-tag", aboutTag.toFixed(3));
        wrapperRef.current.style.setProperty("--about-narrative", aboutNarrative.toFixed(3));
        wrapperRef.current.style.setProperty("--about-stats", aboutStats.toFixed(3));
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    // Measure on mount, after short delays for fonts/images, and on window load
    const timer1 = setTimeout(measureSlots, 50);
    const timer2 = setTimeout(measureSlots, 300);
    window.addEventListener("load", measureSlots);
    window.addEventListener("resize", measureSlots);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("load", measureSlots);
      window.removeEventListener("resize", measureSlots);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <HeroAboutContext.Provider value={{ isTravelingActive }}>
      <div ref={wrapperRef} className={styles.bridgeWrapper}>
        <div
          ref={travelingRef}
          className={styles.travelingPortrait}
          style={{
            opacity: isTravelingActive ? 1 : 0,
            visibility: isTravelingActive ? "visible" : "hidden",
            transition: "opacity 0.2s ease",
          }}
        >
          <Image
            src="/hero-transparent.png"
            alt="Bhoomit Rachchawar - Python Developer"
            width={600}
            height={654}
            priority
            className={styles.travelingImg}
          />
        </div>
        {children}
      </div>
    </HeroAboutContext.Provider>
  );
}
