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

interface HeroAboutBridgeProps {
  heroContent?: React.ReactNode;
  aboutContent?: React.ReactNode;
  children?: React.ReactNode;
}

export default function HeroAboutBridge({
  heroContent,
  aboutContent,
  children,
}: HeroAboutBridgeProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const travelingRef = useRef<HTMLDivElement>(null);
  const [isTravelingActive, setIsTravelingActive] = useState(false);

  const coordsRef = useRef<{
    heroLeft: number;
    heroTop: number;
    heroWidth: number;
    aboutLeft: number;
    aboutTop: number;
    aboutWidth: number;
  } | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const ease = (v: number) =>
      v < 0.5 ? 2 * v * v : 1 - Math.pow(-2 * v + 2, 2) / 2;

    const measureSlots = () => {
      if (!wrapperRef.current || !stickyRef.current) return;
      const isDesktop = window.innerWidth > 900;
      if (!isDesktop) {
        setIsTravelingActive(false);
        coordsRef.current = null;
        if (wrapperRef.current) {
          wrapperRef.current.style.setProperty("--hero-exit", "0");
          wrapperRef.current.style.setProperty("--hero-pointer", "auto");
          wrapperRef.current.style.setProperty("--about-left", "1");
          wrapperRef.current.style.setProperty("--about-content", "1");
          wrapperRef.current.style.setProperty("--about-bars", "1");
          wrapperRef.current.style.setProperty("--about-pointer", "auto");
        }
        return;
      }

      const stickyRect = stickyRef.current.getBoundingClientRect();
      const heroSlot = document.getElementById("hero-portrait-slot");
      const aboutSlot = document.getElementById("about-portrait-slot");

      if (!heroSlot || !aboutSlot) return;

      const heroRect = heroSlot.getBoundingClientRect();
      const aboutRect = aboutSlot.getBoundingClientRect();

      const heroLeft = heroRect.left - stickyRect.left;
      const heroTop = heroRect.top - stickyRect.top;
      const heroWidth = heroRect.width;

      const aboutLeft = aboutRect.left - stickyRect.left;
      const aboutTop = aboutRect.top - stickyRect.top;
      const aboutWidth = aboutRect.width;

      coordsRef.current = {
        heroLeft,
        heroTop,
        heroWidth,
        aboutLeft,
        aboutTop,
        aboutWidth,
      };

      setIsTravelingActive(true);
      updatePosition();
    };

    const updatePosition = () => {
      if (!wrapperRef.current || !travelingRef.current || !coordsRef.current) return;

      const isDesktop = window.innerWidth > 900;
      if (!isDesktop) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const totalScroll = wrapperRef.current.offsetHeight - window.innerHeight;
      const scrollPassed = -rect.top;
      const rawProgress = Math.min(1, Math.max(0, scrollPassed / Math.max(1, totalScroll)));

      const {
        heroLeft,
        heroTop,
        heroWidth,
        aboutLeft,
        aboutTop,
        aboutWidth,
      } = coordsRef.current;

      // 1. Portrait movement curve from Right (Hero) to Leftmost (About)
      const rawImgP = Math.min(1, Math.max(0, (rawProgress - 0.04) / 0.82));
      const tx = ease(rawImgP);
      const ty = ease(rawProgress);

      const currentLeft = heroLeft + (aboutLeft - heroLeft) * tx;
      const currentTop = heroTop + (aboutTop - heroTop) * ty;
      const currentWidth = heroWidth + (aboutWidth - heroWidth) * tx;
      const currentHeight = currentWidth * (1309 / 1201);

      // Bottom mist mask appears as the image approaches the About section
      const mistT = Math.min(1, Math.max(0, (rawProgress - 0.20) / 0.65));
      const solidStop = 100 - (100 - 65) * mistT;
      const fadeStop = 100 - (100 - 95) * mistT;
      const mask =
        mistT > 0.02
          ? `linear-gradient(to bottom, black ${solidStop.toFixed(1)}%, transparent ${fadeStop.toFixed(1)}%)`
          : "none";

      travelingRef.current.style.transform = `translate3d(${currentLeft.toFixed(1)}px, ${currentTop.toFixed(1)}px, 0)`;
      travelingRef.current.style.width = `${currentWidth.toFixed(1)}px`;
      travelingRef.current.style.height = `${currentHeight.toFixed(1)}px`;
      travelingRef.current.style.webkitMaskImage = mask;
      travelingRef.current.style.maskImage = mask;

      // 2. Choreograph Hero Exit (translates to the right & fades out)
      const rawHeroExit = Math.min(1, Math.max(0, rawProgress / 0.35));
      const heroExit = ease(rawHeroExit);

      // 3. Choreograph About Entrance (left portrait stage + right content stage)
      const rawAboutLeft = Math.min(1, Math.max(0, (rawProgress - 0.18) / 0.60));
      const aboutLeftVal = ease(rawAboutLeft);

      const rawAboutContent = Math.min(1, Math.max(0, (rawProgress - 0.28) / 0.58));
      const aboutContentVal = ease(rawAboutContent);

      const rawBars = Math.min(1, Math.max(0, (rawProgress - 0.22) / 0.48));
      const aboutBars = ease(rawBars);

      // Apply CSS variables to wrapper
      wrapperRef.current.style.setProperty("--hero-exit", heroExit.toFixed(3));
      wrapperRef.current.style.setProperty("--hero-pointer", heroExit > 0.85 ? "none" : "auto");
      wrapperRef.current.style.setProperty("--about-left", aboutLeftVal.toFixed(3));
      wrapperRef.current.style.setProperty("--about-content", aboutContentVal.toFixed(3));
      wrapperRef.current.style.setProperty("--about-bars", aboutBars.toFixed(3));
      wrapperRef.current.style.setProperty("--about-pointer", rawProgress > 0.45 ? "auto" : "none");
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    const timer1 = setTimeout(measureSlots, 60);
    const timer2 = setTimeout(measureSlots, 350);
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
        <div ref={stickyRef} className={styles.stickyStage}>
          {/* Traveling Morphing Portrait */}
          <div
            ref={travelingRef}
            className={styles.travelingPortrait}
            style={{
              opacity: isTravelingActive ? 1 : 0,
              visibility: isTravelingActive ? "visible" : "hidden",
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

          {/* Hero View Layer */}
          <div className={styles.heroLayer}>
            {heroContent || (Array.isArray(children) ? children[0] : children)}
          </div>

          {/* About View Layer */}
          <div className={styles.aboutLayer}>
            {aboutContent || (Array.isArray(children) ? children[1] : null)}
          </div>
        </div>
      </div>
    </HeroAboutContext.Provider>
  );
}
