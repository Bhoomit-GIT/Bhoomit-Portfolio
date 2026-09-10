"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Approach.module.css";

interface ApproachStep {
  num: string;
  title: string;
  desc: string;
  isDarkDot?: boolean;
}

const APPROACH_STEPS: ApproachStep[] = [
  {
    num: "01",
    title: "Understand",
    desc: "I take time to understand the problem, user needs and the bigger picture before writing the first line of code.",
    isDarkDot: true,
  },
  {
    num: "02",
    title: "Plan",
    desc: "I design clean, scalable and maintainable solutions with the right tools and architecture.",
    isDarkDot: false,
  },
  {
    num: "03",
    title: "Build",
    desc: "I turn ideas into reliable, well-structured and efficient code, following best practices and clean architecture.",
    isDarkDot: true,
  },
  {
    num: "04",
    title: "Improve",
    desc: "I continuously learn, take feedback, optimize and refactor — because great software is always a work in progress.",
    isDarkDot: false,
  },
];

export default function Approach() {
  return (
    <section className={styles.approachSection} id="approach" aria-label="My Approach">
      {/* Top Overline Header */}
      <div className={styles.topNav}>
        <div className={styles.topLeftNav}>
          <span className={styles.indexNum}>06</span>
          <div className={styles.indexLine} />
          <span className={styles.sectionLabel}>MY APPROACH</span>
        </div>

        <div className={styles.topRightSlogan}>
          <span className={styles.sloganWord}>IDEAS</span>
          <span className={styles.sloganWord}>SYSTEMS</span>
          <span className={styles.sloganWord}>PEOPLE</span>
          <span className={styles.sloganWord}>IMPACT</span>
          <div className={styles.sloganLine} />
        </div>
      </div>

      {/* Main Hero Showcase: Statement & Mountain Artwork */}
      <div className={styles.heroArea}>
        {/* Left Column: Mission Statement */}
        <motion.div
          className={styles.leftCol}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.overheadTag}>
            <span>A MORE THOUGHTFUL WAY</span>
            <span>TO BUILD</span>
          </div>

          <h2 className={styles.mainTitle}>
            I don’t just
            <br />
            write code.
            <br />
            I solve real
            <br />
            problems<span className={styles.periodDot} aria-hidden="true" />
          </h2>

          <p className={styles.description}>
            I combine technical knowledge with a problem-solving mindset to build scalable, practical
            and meaningful solutions.
          </p>
        </motion.div>

        {/* Center & Right Area: Mountain Artwork & Ambient Micro-Typography */}
        <motion.div
          className={styles.artworkContainer}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Subtle Wireframe Circular Accent behind Mountain Peak */}
          <svg
            className={styles.geometricCircle}
            viewBox="0 0 400 400"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="200"
              cy="200"
              r="170"
              stroke="rgba(0, 0, 0, 0.45)"
              strokeWidth="1.1"
            />
          </svg>

          {/* Mountain Landscape Image */}
          <div className={styles.mountainImageWrapper}>
            <Image
              src="/approach-mountain.jpg"
              alt="Misty Mountain Peak symbolizing clarity and scale"
              width={860}
              height={500}
              priority
              className={styles.mountainImage}
            />
          </div>

          {/* Floating Atmospheric Slogans */}
          <div className={styles.floatingCenterSlogan}>
            <span>BETTER</span>
            <span>SOLUTIONS</span>
            <span>A BRIGHTER</span>
            <span>TOMORROW</span>
          </div>

          <div className={styles.floatingRightSloganTop}>
            <span>SMALL</span>
            <span>STEPS</span>
            <span>BIGGER</span>
            <span>TOMORROWS</span>
          </div>

          <div className={styles.floatingRightSloganBottom}>
            <div className={styles.sloganDivider} />
            <span>DISCIPLINE</span>
            <span>CREATES</span>
            <span>FREEDOM.</span>
          </div>
        </motion.div>
      </div>

      {/* Process Steps Timeline (4 Column Step Flow) */}
      <div className={styles.processArea}>
        {/* Horizontal Connecting Timeline Line */}
        <div className={styles.timelineTrack} />

        <div className={styles.stepGrid}>
          {APPROACH_STEPS.map((step, idx) => (
            <motion.div
              key={step.num}
              className={styles.stepCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: 0.1 * idx + 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Step Node Marker */}
              <div className={styles.nodeWrapper}>
                <div
                  className={`${styles.stepNode} ${
                    step.isDarkDot ? styles.darkNode : styles.mutedNode
                  }`}
                />
              </div>

              {/* Step Details */}
              <span className={styles.stepNum}>{step.num}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>

              <div className={styles.stepArrow}>
                <ArrowRight size={18} strokeWidth={1.8} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section Footer Bar */}
      <footer className={styles.bottomBar}>
        <div className={styles.signatureBrand}>
          <div className={styles.monogramCircle}>
            <span>B</span>
          </div>
          <span className={styles.signatureName}>BHOOMIT RACHCHAWAR</span>
        </div>

        <div className={styles.bottomDividerLine} />

        <div className={styles.bottomRightTag}>
          <span className={styles.bottomTagText}>BUILD LEARN IMPROVE REPEAT</span>
          <div className={styles.bottomTagLine} />
        </div>
      </footer>
    </section>
  );
}
