"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lightbulb, BarChart2, User, Mountain, ArrowDown } from "lucide-react";
import { useHeroAbout } from "./HeroAboutBridge";
import styles from "./About.module.css";

// Bold Infinity glyph matching the weight of 3+ and 10+
function BoldInfinity({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 56 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Infinity"
    >
      <path d="M15 21.5c-4.4 0-8-3.3-8-7.5s3.6-7.5 8-7.5c5.5 0 9.5 8.5 13 8.5s7.5-8.5 13-8.5c4.4 0 8 3.3 8 7.5s-3.6 7.5-8 7.5c-5.5 0-9.5-8.5-13-8.5s-7.5 8.5-13 8.5z" />
    </svg>
  );
}

const PILLARS_DATA = [
  {
    icon: Lightbulb,
    title1: "SOLVE",
    title2: "PROBLEMS",
  },
  {
    icon: BarChart2,
    title1: "BUILD",
    title2: "SOLUTIONS",
  },
  {
    icon: User,
    title1: "LEARN",
    title2: "DAILY",
  },
  {
    icon: Mountain,
    title1: "AIM",
    title2: "HIGHER",
  },
];

export default function About() {
  const { isTravelingActive } = useHeroAbout();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const topTags = ["PEOPLE", "IDEAS", "CODE", "IMPACT"];

  return (
    <section className={styles.aboutSection} id="about" aria-label="About Bhoomit Rachchawar">
      {/* ====================================================================
          TOP OVERLINE ROW
          ==================================================================== */}
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <span className={styles.indexNum}>02</span>
          <span className={styles.indexLine} aria-hidden="true" />
          <span className={styles.sectionTitle}>ABOUT ME</span>
          <span className={styles.headerConnectingLine} aria-hidden="true" />
        </div>

        {/* Top Alignment Line that connects down to the pillar */}
        <div className={styles.topPillarGuide} aria-hidden="true" />

        <div className={styles.topRightTags}>
          {topTags.map((tag) => (
            <span key={tag} className={styles.tagItem}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ====================================================================
          MAIN COMPOSITION GRID
          ==================================================================== */}
      <div className={styles.mainContainer}>
        {/* ------------------------------------------------------------------
            COLUMN 1: Left Statement & Philosophy
            ------------------------------------------------------------------ */}
        <div className={styles.leftCol}>
          <div className={styles.leftHeadlineWrap}>
            <h2 className={styles.mainHeadline}>
              <span className={styles.headlineBold}>Curious</span>
              <span className={styles.headlineBold}>Minds</span>
              <span className={styles.headlineBold}>Build</span>
              <span className={styles.headlineItalicLight}>Brighter</span>
              <span className={styles.headlineItalicDark}>Realities.</span>
            </h2>
          </div>

          <div className={styles.leftBottomMeta}>
            <div className={styles.metaLines}>
              <span>A DEVELOPER</span>
              <span>WHO TURNS</span>
              <span>IDEAS INTO</span>
              <span>MEANINGFUL</span>
              <span>SOLUTIONS.</span>
            </div>
            <div className={styles.verticalHairline} aria-hidden="true" />
          </div>
        </div>

        {/* ------------------------------------------------------------------
            CENTER AREA: Pillar + Portrait + Tags + Narrative
            ------------------------------------------------------------------ */}
        <div className={styles.centerArea}>
          {/* Architectural Pillar & Portrait Stage */}
          <div className={styles.pillarWrapper}>
            {/* Textured Vertical Pillar */}
            <div className={styles.texturedPillar} aria-hidden="true" />

            {/* Rotated Edge Text */}
            <div className={styles.rotatedTextWrap} aria-hidden="true">
              <span className={styles.rotatedText}>DISCIPLINE TURNS IDEA INTO RESULTS</span>
            </div>

            {/* Top Tag: A BETTER VERSION EVERYDAY */}
            <div className={styles.betterVersionTag}>
              <span>A</span>
              <span>BETTER</span>
              <span>VERSION</span>
              <span>EVERYDAY</span>
              <div className={styles.tagLine} aria-hidden="true" />
            </div>

            {/* Portrait Image with Natural Arch and Fade Mask */}
            <div className={styles.portraitWrap} id="about-portrait-slot">
              <Image
                src="/hero-transparent.png"
                alt="Bhoomit Rachchawar - Python Developer"
                width={500}
                height={550}
                className={styles.portraitImg}
                style={{ opacity: isTravelingActive ? 0 : 1 }}
                priority
              />
            </div>
          </div>

          {/* Narrative Column */}
          <div className={styles.narrativeCol}>
            <div className={styles.greetingRow}>
              <span className={styles.greetingText}>HELLO, I&apos;M BHOOMIT</span>
              <span className={styles.greetingLine} aria-hidden="true" />
            </div>

            <h3 className={styles.leadNarrative}>
              I’m a Python developer passionate about building scalable solutions and turning complex
              problems into simple, impactful systems.
            </h3>

            <p className={styles.bodyNarrative}>
              I enjoy working with Django, APIs, and modern web technologies to create real-world
              applications that make a difference. I’m constantly learning, exploring new tools, and
              challenging myself to build better, cleaner, and more efficient code.
            </p>

            {/* 4 Value Pillars Row */}
            <div className={styles.pillarsContainer}>
              <div className={styles.pillarsGrid}>
                {PILLARS_DATA.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.title1 + item.title2} className={styles.pillarItem}>
                      <div className={styles.pillarIconWrap}>
                        <IconComponent size={21} strokeWidth={1.8} />
                      </div>
                      <div className={styles.pillarLabels}>
                        <span>{item.title1}</span>
                        <span>{item.title2}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={styles.pillarsBottomLine} aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------
            COLUMN 3: Far Right Metrics & Perspective
            ------------------------------------------------------------------ */}
        <div className={styles.rightCol}>
          <div className={styles.metricsList}>
            <div className={styles.metricItem}>
              <div className={styles.metricValue}>3+</div>
              <div className={styles.metricLabel}>
                <span>YEARS OF</span>
                <span>LEARNING</span>
              </div>
            </div>

            <div className={styles.metricItem}>
              <div className={styles.metricValue}>10+</div>
              <div className={styles.metricLabel}>
                <span>PROJECTS</span>
                <span>BUILT</span>
              </div>
            </div>

            <div className={styles.metricItem}>
              <div className={styles.metricValue}>
                <BoldInfinity className={styles.infinityGlyph} />
              </div>
              <div className={styles.metricLabel}>
                <span>CURIOSITY</span>
                <span>REMAINING</span>
              </div>
            </div>
          </div>

          <div className={styles.perspectiveWrap}>
            <div className={styles.perspectiveText}>
              <span>SAME</span>
              <span>IDEAS</span>
              <span>DIFFERENT</span>
              <span>PERSPECTIVE</span>
            </div>
            <div className={styles.perspectiveLine} aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* ====================================================================
          FULL-WIDTH BOTTOM BAR FOOTER
          ==================================================================== */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomBarLeft}>
          <span className={styles.authorBrand}>BHOOMIT RACHCHAWAR</span>
        </div>

        <div className={styles.bottomBarCenter}>
          <span className={styles.bracketYear}>[ 2022 ]</span>
          <span className={styles.centerDividerLine} aria-hidden="true" />
          <span className={styles.centerMantra}>BUILD LEARN IMPROVE REPEAT</span>
          <span className={styles.centerDividerLine} aria-hidden="true" />
          <span className={styles.bracketInfinity}>[ ∞ ]</span>
        </div>

        <div className={styles.bottomBarRight}>
          <Link href="#skills" className={styles.scrollDownBtn} aria-label="Scroll to Skills">
            <ArrowDown size={16} strokeWidth={2.2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
