"use client";
import React from "react";
import { ArrowDown } from "lucide-react";
import styles from "./BottomBar.module.css";

interface BottomBarProps {
  currentSlide?: string;
  totalSlides?: string;
}

export default function BottomBar({
  currentSlide = "01",
  totalSlides = "05",
}: BottomBarProps) {
  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const bridge = document.querySelector('[class*="bridgeWrapper"]') as HTMLElement | null;
    const isDesktop = typeof window !== "undefined" && window.innerWidth > 900;
    if (bridge && isDesktop) {
      const bridgeScrollRange = bridge.offsetHeight - window.innerHeight;
      const targetY = bridge.offsetTop + bridgeScrollRange * 0.95;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    } else {
      const aboutEl = document.getElementById("about");
      if (aboutEl) {
        aboutEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className={styles.bottomBar} aria-label="Page Indicator">
      <a
        href="#about"
        onClick={handleScrollToAbout}
        className={styles.scrollIndicator}
        aria-label="Scroll to About Me section"
      >
        <div className={styles.scrollText}>
          <span className={styles.scrollWord}>SCROLL</span>
          <span className={styles.scrollWord}>TO EXPLORE</span>
        </div>
        <ArrowDown size={17} strokeWidth={1.8} className={styles.scrollArrow} />
      </a>

      <div className={styles.pagination} aria-label={`Section ${currentSlide} of ${totalSlides}`}>
        <span className={styles.currentSlide}>{currentSlide}</span>
        <div className={styles.pageTrack} />
        <span className={styles.totalSlides}>/ {totalSlides}</span>
      </div>
    </footer>
  );
}
