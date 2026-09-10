"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./About.module.css";

// Precise line-art icons matching the reference design
function LayersIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 12 12 17 22 12" />
      <polyline points="2 17 12 22 22 17" />
    </svg>
  );
}

function LightbulbIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M19.07 4.93l-1.41 1.41" />
      <path d="M15 9.5a3 3 0 0 0-6 0c0 2 1.2 3.2 1.8 4.2.3.5.5 1 .5 1.8h1.4c0-.8.2-1.3.5-1.8.6-1 1.8-2.2 1.8-4.2z" />
    </svg>
  );
}

function UsersIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default function About() {
  const disciplineWords = ["DISCIPLINE", "CURIOSITY", "CONSISTENCY", "GROWTH"];

  const features = [
    {
      icon: <LayersIcon size={22} />,
      line1: "SOLVE",
      line2: "PROBLEMS",
    },
    {
      icon: <LightbulbIcon size={22} />,
      line1: "LEARN",
      line2: "ALWAYS",
    },
    {
      icon: <UsersIcon size={22} />,
      line1: "CREATE",
      line2: "VALUE",
    },
  ];

  return (
    <section className={styles.aboutSection} id="about" aria-label="About Me">
      {/* Top Overline Navigation */}
      <div className={styles.topNav}>
        <span className={styles.indexNum}>02</span>
        <div className={styles.indexLine} />
        <span className={styles.sectionLabel}>ABOUT ME</span>
      </div>

      {/* Main Content Grid */}
      <div className={styles.mainGrid}>
        {/* Left Column: Narrative Headline & Copy */}
        <motion.div
          className={styles.leftCol}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className={styles.title}>
            <span className={styles.titleLine}>More</span>
            <span className={styles.titleLine}>than just</span>
            <span className={styles.titleLine}>
              code<span className={styles.periodDot} aria-hidden="true" />
            </span>
          </h2>

          <p className={styles.description}>
            I&apos;m a Python developer who loves turning ideas into real, working solutions. I
            enjoy building scalable systems, automating complex tasks, and exploring new
            technologies that make a difference.
          </p>

          <div className={styles.subquoteWrapper}>
            <span className={styles.subquote}>CLEAN THINKING. REAL SOLUTIONS.</span>
            <div className={styles.subquoteLine} />
          </div>

          <Link href="#contact" className={styles.ctaBtn}>
            <span>Get to know me</span>
            <ArrowUpRight size={17} strokeWidth={2} />
          </Link>
        </motion.div>

        {/* Center Visual: Moving Dark Shadow Sphere */}
        <motion.div
          className={styles.centerVisual}
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Vertical axis line */}
          <div className={styles.verticalAxis} />

          {/* Top solid black terminal square */}
          <div className={styles.axisSquareTop} />

          {/* Bottom hollow terminal square */}
          <div className={styles.axisSquareBottom} />

          {/* Concentric outer arc curving around right side */}
          <div className={styles.orbitArc} />

          {/* Left discipline list annotations */}
          <div className={styles.disciplineList}>
            {disciplineWords.map((word) => (
              <span key={word} className={styles.disciplineItem}>
                {word}
              </span>
            ))}
            <div className={styles.disciplineLine} />
          </div>

          {/* The Sphere with dynamic moving dark side shadow */}
          <div className={styles.sphere}>
            {/* Animated smoky dark shadow layers */}
            <div className={styles.shadowLayerPrimary} />
            <div className={styles.shadowLayerSecondary} />
            <div className={styles.shadowLayerAura} />
            <div className={styles.sphereBorder} />

            {/* Right quote inside the sphere */}
            <div className={styles.impactQuote}>
              <span className={styles.impactNormal}>I BUILD</span>
              <span className={styles.impactNormal}>SOLUTIONS</span>
              <span className={styles.impactNormal}>THAT CREATE</span>
              <span className={styles.impactBold}>REAL IMPACT.</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Key Principles & Section Marker */}
        <motion.div
          className={styles.rightCol}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.featuresList}>
            {features.map((item, idx) => (
              <motion.div
                key={item.line1}
                className={styles.featureItem}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx + 0.2 }}
              >
                <div className={styles.featureIcon}>{item.icon}</div>
                <div className={styles.featureText}>
                  <span className={styles.featureWord}>{item.line1}</span>
                  <span className={styles.featureWord}>{item.line2}</span>
                </div>
                <div className={styles.featureDivider} />
              </motion.div>
            ))}
          </div>

          <div className={styles.bottomRightMarker}>
            <span className={styles.bottomNum}>02</span>
            <span className={styles.bottomLabel}>
              A SMALL BIT
              <br />
              ABOUT ME
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
