"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Trophy, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Approach.module.css";

interface ApproachStep {
  num: string;
  title: string;
  badge: string;
  desc: string;
  focus: string;
  isSummit?: boolean;
  coords: {
    x: number;
    y: number;
    pctX: number;
    pctY: number;
  };
}

const APPROACH_STEPS: ApproachStep[] = [
  {
    num: "01",
    title: "Understand",
    badge: "DISCOVERY",
    desc: "I dissect the root problem, uncover user friction, and clarify constraints before writing a single line of code.",
    focus: "Problem Discovery",
    coords: { x: 758, y: 350, pctX: 74.0, pctY: 60.8 },
  },
  {
    num: "02",
    title: "Architect",
    badge: "SYSTEM DESIGN",
    desc: "I design clean, scalable architectures with robust data models, modular components, and future-proof tech choices.",
    focus: "System Strategy",
    coords: { x: 560, y: 238, pctX: 54.7, pctY: 41.3 },
  },
  {
    num: "03",
    title: "Build",
    badge: "CLEAN CODE",
    desc: "I craft maintainable, high-performance code with test coverage, clean structure, and continuous validation.",
    focus: "Craft & Execution",
    coords: { x: 375, y: 126, pctX: 36.6, pctY: 21.9 },
  },
  {
    num: "04",
    title: "Succeed",
    badge: "PEAK IMPACT",
    desc: "Zero-downtime release, verified reliability, scalable user value, and continuous production evolution.",
    focus: "Production Excellence",
    isSummit: true,
    coords: { x: 260, y: 71, pctX: 25.4, pctY: 12.3 },
  },
];

// Target progress lengths for SVG trajectory
const PATH_PROGRESS = [0.05, 0.38, 0.72, 1.0];

export default function Approach() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isHoverPaused, setIsHoverPaused] = useState<boolean>(false);

  // Check mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Smooth continuous autoplay cycle
  useEffect(() => {
    if (isHoverPaused) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % APPROACH_STEPS.length);
    }, 3400);

    return () => clearInterval(timer);
  }, [isHoverPaused]);

  const currentStep = APPROACH_STEPS[activeStep];

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

      {/* Main Hero Showcase: Statement & Mountain Canvas */}
      <div className={styles.heroArea}>
        {/* Left Column: Mission Statement & Telemetry */}
        <motion.div
          className={styles.leftCol}
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: isMobile ? 0.2 : 0.65, ease: [0.22, 1, 0.36, 1] }}
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

          {/* Minimalist Active Stage Telemetry */}
          <div className={styles.phaseTicker}>
            <div className={styles.tickerDot} />
            <span className={styles.tickerLabel}>CURRENT FOCUS:</span>
            <strong className={styles.tickerStage}>
              {currentStep.num} • {currentStep.title}
            </strong>
          </div>
        </motion.div>

        {/* Center & Right Area: Mountain Artwork Canvas */}
        <motion.div
          className={styles.artworkContainer}
          initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: isMobile ? 0.2 : 0.75, delay: isMobile ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
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
              stroke="rgba(0, 0, 0, 0.3)"
              strokeWidth="1.1"
            />
          </svg>

          {/* The Grand Mountain Canvas */}
          <div className={styles.mountainCanvas}>
            {/* Seamless Mountain Image with Natural Feathered Blending */}
            <div className={styles.mountainImageWrapper}>
              <Image
                src="/approach-mountain-seamless.jpg"
                alt="Misty Mountain Peak symbolizing clarity, scale and peak success"
                fill
                priority
                className={styles.mountainImage}
              />
            </div>

            {/* SVG Engineering Ascent Trajectory Layer (1024 x 576 Exact Coordinate Space) */}
            <svg
              className={styles.trajectorySvg}
              viewBox="0 0 1024 576"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              {/* Topographic Glow Filter */}
              <defs>
                <filter id="monochromeGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Exact Inactive Dashed Ridge Trail */}
              <path
                d="M 758 350
                   C 730 295 680 250 630 255
                   C 595 258 575 248 560 238
                   C 515 200 460 170 415 145
                   C 395 135 385 132 375 126
                   C 340 112 305 88 280 76
                   C 272 72 265 71 260 71"
                stroke="rgba(18, 19, 22, 0.2)"
                strokeWidth="2"
                strokeDasharray="5 7"
                fill="none"
              />

              {/* Dynamic Active Progress Trail Drawn Exactly Along Mountain Ridge */}
              <motion.path
                d="M 758 350
                   C 730 295 680 250 630 255
                   C 595 258 575 248 560 238
                   C 515 200 460 170 415 145
                   C 395 135 385 132 375 126
                   C 340 112 305 88 280 76
                   C 272 72 265 71 260 71"
                stroke="#121316"
                strokeWidth="3.2"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: PATH_PROGRESS[0] }}
                animate={{ pathLength: PATH_PROGRESS[activeStep] }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                filter="url(#monochromeGlow)"
              />

              {/* Smooth Gliding Pulse Indicator */}
              <motion.g
                animate={{
                  x: currentStep.coords.x,
                  y: currentStep.coords.y,
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <circle r="14" fill="rgba(18, 19, 22, 0.12)" />
                <circle r="5" fill="#121316" stroke="#ffffff" strokeWidth="1.8" />
              </motion.g>
            </svg>

            {/* Permanent Pinpoints Layer (Always Visible For Instant Viewer Comprehension) */}
            <div className={styles.waypointLayer}>
              {APPROACH_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                const isStepSummit = step.isSummit;

                return (
                  <button
                    key={step.num}
                    type="button"
                    className={`${styles.waypointPin} ${
                      isStepSummit ? styles.summitPin : ""
                    } ${isActive ? (isStepSummit ? styles.summitPinActive : styles.waypointPinActive) : ""}`}
                    style={{
                      left: `${step.coords.pctX}%`,
                      top: `${step.coords.pctY}%`,
                    }}
                    onClick={() => {
                      setActiveStep(idx);
                      setIsHoverPaused(true);
                    }}
                    onMouseEnter={() => {
                      setActiveStep(idx);
                      setIsHoverPaused(true);
                    }}
                    onMouseLeave={() => setIsHoverPaused(false)}
                    aria-label={`Step ${step.num}: ${step.title}`}
                  >
                    {isStepSummit ? (
                      <>
                        {/* Radar Pulse Ripples on Summit Peak */}
                        <div className={styles.summitRadarRing1} />
                        <div className={styles.summitRadarRing2} />

                        {/* Permanent Summit Badge Floating Directly Above Top Peak */}
                        <div className={styles.permanentSummitBadge}>
                          <Trophy size={13} strokeWidth={2.4} />
                          <span>04 • SUCCEED</span>
                          <div className={styles.summitBadgeDot} />
                        </div>

                        {/* Summit Peak Node Circle */}
                        <div className={styles.summitNodeCircle}>
                          <Trophy size={16} strokeWidth={2.2} />
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Waypoint Active Pulse Ring */}
                        {isActive && <div className={styles.waypointPulseRing} />}

                        {/* Waypoint Node Circle */}
                        <div className={styles.nodeCircle}>
                          <div className={styles.nodeDot} />
                        </div>

                        {/* Permanent Pinpoint Callout Label (Always Visible) */}
                        <div className={styles.permanentCallout}>
                          <span className={styles.calloutNumTitle}>
                            {step.num} • {step.title}
                          </span>
                          <span className={styles.calloutSub}>{step.focus}</span>
                        </div>
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Process Steps Timeline (4 Column Step Grid) */}
      <div className={styles.processArea}>
        {/* Horizontal Connecting Timeline Line */}
        <div className={styles.timelineTrack} />

        <div className={styles.stepGrid}>
          {APPROACH_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            const isStepSummit = step.isSummit;

            return (
              <motion.div
                key={step.num}
                className={`${styles.stepCard} ${isActive ? styles.stepCardActive : ""}`}
                onClick={() => {
                  setActiveStep(idx);
                  setIsHoverPaused(true);
                }}
                onMouseEnter={() => {
                  setActiveStep(idx);
                  setIsHoverPaused(true);
                }}
                onMouseLeave={() => setIsHoverPaused(false)}
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: isMobile ? 0.2 : 0.55,
                  delay: isMobile ? 0 : 0.1 * idx + 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveStep(idx);
                  }
                }}
                aria-label={`Step ${step.num}: ${step.title}`}
              >
                {/* Step Node Marker on Timeline */}
                <div className={styles.nodeWrapper}>
                  <div
                    className={`${styles.stepNode} ${
                      isActive ? styles.stepNodeActive : ""
                    }`}
                  />
                </div>

                {/* Card Header: Step Num & Milestone Tag */}
                <div className={styles.cardHeader}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <span
                    className={`${styles.stepBadge} ${
                      isStepSummit ? styles.stepBadgeSummit : ""
                    }`}
                  >
                    {step.badge}
                  </span>
                </div>

                {/* Step Details */}
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>

                {/* Card Footer: Focus area & cue */}
                <div className={styles.cardFooter}>
                  <span className={styles.stepFocus}>{step.focus}</span>
                  <div className={styles.stepArrow}>
                    {isStepSummit ? (
                      <CheckCircle2 size={18} strokeWidth={2} color="#121316" />
                    ) : (
                      <ArrowRight size={18} strokeWidth={1.8} />
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Section Footer Bar */}
      <footer className={styles.bottomBar}>
        <span className={styles.bottomLeftTag}>06 • METHODOLOGY</span>
        <div className={styles.bottomDividerLine} />
        <div className={styles.bottomRightTag}>
          <span className={styles.bottomTagText}>UNDERSTAND ARCHITECT BUILD SUCCEED</span>
          <div className={styles.bottomTagLine} />
        </div>
      </footer>
    </section>
  );
}
