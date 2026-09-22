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
      strokeWidth="6.5"
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

const METRICS_DATA = [
  {
    value: "3+",
    label1: "YEARS OF",
    label2: "LEARNING",
  },
  {
    value: "10+",
    label1: "PROJECTS",
    label2: "BUILT",
  },
  {
    isInfinity: true,
    label1: "CURIOSITY",
    label2: "REMAINING",
  },
];

export default function About() {
  const { isTravelingActive } = useHeroAbout();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const topTags = ["PEOPLE", "IDEAS", "CODE", "IMPACT"];

  return (
    <section className={styles.aboutSection} id="about" aria-label="About Bhoomit Rachchawar">
      {/* ====================================================================
          TOP ROW: SECTION LABEL & ESSENCE TAGS
          ==================================================================== */}
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <span className={styles.indexNum}>02</span>
          <span className={styles.indexLine} aria-hidden="true" />
          <span className={styles.sectionTitle}>ABOUT ME</span>
        </div>

        <div className={styles.topRightTags}>
          {topTags.map((tag) => (
            <span key={tag} className={styles.tagItem}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ====================================================================
          MAIN 2-COLUMN COMPOSITION: LEFT PORTRAIT | RIGHT NARRATIVE & METRICS
          ==================================================================== */}
      <div className={styles.mainContainer}>
        {/* ------------------------------------------------------------------
            LEFT COLUMN: ARCHITECTURAL PORTRAIT STAGE
            ------------------------------------------------------------------ */}
        <div className={styles.portraitStage}>
          <div className={styles.pillarWrapper}>
            {/* Textured Architectural Arch Backdrop */}
            <div className={styles.texturedPillar} aria-hidden="true" />

            {/* Left Edge Motto with Connecting Accent Line */}
            <div className={styles.rotatedTextWrap} aria-hidden="true">
              <span className={styles.rotatedLine} />
              <span className={styles.rotatedText}>DISCIPLINE TURNS IDEAS INTO RESULTS</span>
            </div>

            {/* Top-Right Architectural Philosophy Tag */}
            <div className={styles.betterVersionTag}>
              <span className={styles.tagMotto}>A BETTER VERSION</span>
              <span className={styles.tagMotto}>EVERYDAY</span>
              <span className={styles.tagLine} aria-hidden="true" />
            </div>

            {/* Portrait Image with Natural Arch and Gradient Mist Mask */}
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
        </div>

        {/* ------------------------------------------------------------------
            RIGHT COLUMN: LIGHT, SOPHISTICATED NARRATIVE, PILLARS & STATS
            ------------------------------------------------------------------ */}
        <div className={styles.contentStage}>
          {/* Lead Intro Headline */}
          <div className={styles.narrativeHeader}>
            <div className={styles.greetingPill}>
              <span className={styles.greetingDot} />
              <span className={styles.greetingText}>HELLO, I&apos;M BHOOMIT</span>
            </div>

            <h2 className={styles.leadNarrative}>
              I&apos;m a Python developer passionate about crafting scalable backend systems,
              intuitive APIs, and real-time web applications that deliver measurable impact.
            </h2>
          </div>

          {/* Narrative Body Copy */}
          <div className={styles.narrativeBodyWrap}>
            <p className={styles.bodyParagraph}>
              With a strong foundation in <strong>Django</strong>, <strong>RESTful APIs</strong>, and relational databases,
              I build software that balances computational efficiency with clean, maintainable architecture.
              I thrive on simplifying complex problems, optimizing high-throughput workflows, and continuous experimentation.
            </p>
          </div>

          {/* 4 Value Pillars Grid */}
          <div className={styles.pillarsSection}>
            <div className={styles.pillarsGrid}>
              {PILLARS_DATA.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.title1 + item.title2} className={styles.pillarCard}>
                    <div className={styles.pillarIconWrap}>
                      <IconComponent size={20} strokeWidth={1.8} />
                    </div>
                    <div className={styles.pillarLabels}>
                      <span>{item.title1}</span>
                      <span>{item.title2}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Horizontal Metric Badges Row */}
          <div className={styles.metricsRow}>
            {METRICS_DATA.map((item, idx) => (
              <React.Fragment key={item.label1 + item.label2}>
                <div className={styles.metricItem}>
                  <div className={styles.metricValue}>
                    {item.isInfinity ? (
                      <BoldInfinity className={styles.infinityGlyph} />
                    ) : (
                      item.value
                    )}
                  </div>
                  <div className={styles.metricLabel}>
                    <span>{item.label1}</span>
                    <span>{item.label2}</span>
                  </div>
                </div>
                {idx < METRICS_DATA.length - 1 && (
                  <div className={styles.metricDivider} aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
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
