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
  return (
    <footer className={styles.bottomBar} aria-label="Page Indicator">
      <a href="#about" className={styles.scrollIndicator} aria-label="Scroll to About Me section">
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
