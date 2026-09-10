"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";

/* Precise Monochrome Tech Icons */
function NextjsIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#111215" />
      <path
        d="M8.5 7.5V16.5M8.5 7.5L16.2 17.2M15.5 7.5V13"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ReactIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#111215" strokeWidth="1.6">
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="#111215" />
    </svg>
  );
}

function TailwindIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" color="#111215">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
    </svg>
  );
}

function TypeScriptIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="22" height="22" x="1" y="1" rx="4" fill="#111215" />
      <path
        d="M6 8.5h5M8.5 8.5v7M13 13.5c.5.8 1.3 1.3 2.3 1.3 1.1 0 1.9-.6 1.9-1.4 0-1-.8-1.3-2.1-1.7-1.7-.5-2.6-1.1-2.6-2.3 0-1.2 1-2.1 2.5-2.1 1.2 0 2 .5 2.5 1.2M13 10.2"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FramerIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#111215" strokeWidth="2.5" strokeLinecap="round">
      <line x1="6" y1="20" x2="10" y2="4" />
      <line x1="11" y1="20" x2="15" y2="4" />
      <line x1="16" y1="20" x2="20" y2="4" />
    </svg>
  );
}

function ShadcnIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#111215" strokeWidth="2.5" strokeLinecap="round">
      <line x1="6" y1="20" x2="10" y2="4" />
      <line x1="11" y1="20" x2="15" y2="4" />
      <line x1="16" y1="20" x2="20" y2="4" />
    </svg>
  );
}

function PythonIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" color="#111215">
      <path d="M11.914 2C6.703 2 7.03 4.264 7.03 4.264l.006 2.346h4.942v.704H4.992S2 7.01 2 12.2c0 5.19 2.607 5.014 2.607 5.014h1.554v-2.18s-.084-2.608 2.56-2.608h4.918s2.434.04 2.434-2.39V4.39S16.486 2 11.914 2zm-2.02 1.488a.868.868 0 1 1 0 1.736.868.868 0 0 1 0-1.736zm2.192 18.512c5.21 0 4.884-2.264 4.884-2.264l-.006-2.346H12.02v-.704h6.988S22 16.99 22 11.8c0-5.19-2.607-5.014-2.607-5.014h-1.554v2.18s.084 2.608-2.56 2.608H10.36s-2.434-.04-2.434 2.39v5.634s-.412 2.39 4.16 2.39zm2.02-1.488a.868.868 0 1 1 0-1.736.868.868 0 0 1 0 1.736z" />
    </svg>
  );
}

function DjangoIcon({ size = 26 }: { size?: number }) {
  return (
    <div
      style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontWeight: 800,
        fontSize: "1.5rem",
        lineHeight: 1,
        color: "#111215",
        letterSpacing: "-0.04em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: size,
        width: size,
      }}
    >
      dj
    </div>
  );
}

function FastAPIIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#111215" />
      <path d="M13 4.5L6.5 13.5h5l-1 6 6.5-9h-5l1-6z" fill="#ffffff" />
    </svg>
  );
}

function PostgresIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" color="#111215">
      <path d="M18.8 8.1c-.2-.9-.7-1.8-1.4-2.5-.7-.7-1.7-1.1-2.7-1.3-.8-.1-1.7 0-2.5.3-.6.2-1.1.6-1.5 1-.2-.6-.6-1.2-1.1-1.6-.7-.5-1.6-.7-2.5-.6-1.1.1-2.1.7-2.8 1.5-.7.8-1.1 1.9-1.2 3-.1 1.2.2 2.4.8 3.4.5.8 1.3 1.5 2.2 1.9v3.4c0 .7.3 1.4.8 1.9.5.5 1.2.8 1.9.8.4 0 .8-.1 1.2-.3.3.2.7.3 1.1.3.8 0 1.5-.3 2.1-.9.6-.6.9-1.4.9-2.2v-1.1c.9-.3 1.7-.8 2.3-1.5.7-.9 1.1-2 1.1-3.2 0-.6-.1-1.1-.3-1.6zm-4 7.2v1.3c0 .3-.1.6-.3.8-.2.2-.5.3-.8.3-.3 0-.6-.1-.8-.3-.2-.2-.3-.5-.3-.8v-3.7c.7.2 1.4.3 2.2.3v2.1zm-6-2.5c-.6-.4-1.1-1-1.3-1.7-.3-.7-.3-1.5-.1-2.2.2-.7.6-1.4 1.2-1.8.6-.5 1.3-.7 2.1-.7.7 0 1.4.3 2 .7.4.3.7.8.9 1.3-.4.2-.8.5-1.1.9-.5.6-.8 1.4-.9 2.2-.9-.1-1.9.3-2.8 1.3zm8.3-.7c-.4.5-1 .8-1.6.9-.1-.6-.3-1.2-.7-1.7-.5-.6-1.1-1-1.8-1.2.2-.5.5-.9.9-1.1.5-.3 1.1-.4 1.7-.3.7.1 1.3.4 1.8.9.5.5.8 1.2.9 1.9 0 .2-.1.4-.2.6z" />
    </svg>
  );
}

function MongoIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" color="#111215">
      <path d="M12 1.5s-.2.2-.4.5C10.2 4.1 6.5 9 6.5 13.7c0 4.1 2.8 7.6 5.5 8.8.2.1.4 0 .4-.2v-20.8zm0 0s.2.2.4.5c1.4 2.1 5.1 7 5.1 11.7 0 4.1-2.8 7.6-5.5 8.8-.2.1-.4 0-.4-.2v-20.8z" />
    </svg>
  );
}

function RedisIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" color="#111215">
      <path d="M12 2L2.5 7.2v3.6L12 16l9.5-5.2V7.2L12 2zm0 6.6L5.8 5.2 12 2.8l6.2 2.4L12 8.6zm-8 4.2l8 4.4 8-4.4v2.4L12 19.6l-8-4.4v-2.4zm0 4.2l8 4.4 8-4.4v2.4L12 23.8l-8-4.4v-2.4z" />
    </svg>
  );
}

function AWSIcon({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 48 32" fill="none">
      <text
        x="24"
        y="17"
        fill="#111215"
        fontSize="17"
        fontWeight="800"
        fontFamily="var(--font-sans), sans-serif"
        textAnchor="middle"
        letterSpacing="-0.03em"
      >
        aws
      </text>
      <path
        d="M8 22c8.5 5.5 23.5 5.5 32 0"
        stroke="#111215"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M37 21l3.5 1.5l-1.5 3.5"
        stroke="#111215"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VercelIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#111215">
      <path d="M12 2L23 21H1L12 2z" />
    </svg>
  );
}

function GCPIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
        fill="#111215"
      />
      <path
        d="M9 14.5c0-1.66 1.34-3 3-3s3 1.34 3 3"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloudflareIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" color="#111215">
      <path d="M19.2 12.2c-.3-2.6-2.5-4.7-5.2-4.7-2 0-3.8 1.1-4.7 2.7-.9-.4-1.9-.5-2.9-.1-1.8.7-2.9 2.5-2.8 4.4h15.2c1.7-.1 2.9-1.5 2.9-3.2 0-.8-.3-1.6-.9-2.1-.5-.5-1.1-.8-1.8-.8-.3 0-.6.1-.8.2z" />
    </svg>
  );
}

function DockerIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" color="#111215">
      {/* Containers */}
      <rect x="5" y="8" width="2" height="1.8" rx="0.3" />
      <rect x="7.6" y="8" width="2" height="1.8" rx="0.3" />
      <rect x="10.2" y="8" width="2" height="1.8" rx="0.3" />
      <rect x="5" y="5.6" width="2" height="1.8" rx="0.3" />
      <rect x="7.6" y="5.6" width="2" height="1.8" rx="0.3" />
      <rect x="10.2" y="5.6" width="2" height="1.8" rx="0.3" />
      <rect x="7.6" y="3.2" width="2" height="1.8" rx="0.3" />
      {/* Whale Body */}
      <path d="M22.5 11.2c-.4-.3-1.4-.4-2.1-.2-.2-.8-.7-1.5-1.4-1.9l-.6-.4-.4.6c-.4.6-.6 1.4-.4 2.2-.6.3-1.5.4-2.4.4H2.4c-.2.7-.3 1.4-.3 2.1 0 4.1 3.7 7 9.2 7 6.4 0 10.5-3.5 10.9-8.4.6-.2 1.3-.7 1.8-1.4l-.4-.4z" />
    </svg>
  );
}

function K8sIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#111215" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3.2" fill="#111215" />
      {/* 7 Spoke Helm */}
      <path d="M12 2.5v4.5M12 17v4.5M4.8 5.6l3.2 3.2M16 15.2l3.2 3.2M2.5 12h4.5M17 12h4.5M4.8 18.4l3.2-3.2M16 8.8l3.2-3.2" />
      <circle cx="12" cy="12" r="8" stroke="#111215" strokeWidth="1.3" />
    </svg>
  );
}

function GitHubActionsIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#111215" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="12" cy="18" r="3" />
      <path d="M6 9v2c0 2 1 3 3 4l1 1M18 9v2c0 2-1 3-3 4l-1 1" />
    </svg>
  );
}

function TerraformIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" color="#111215">
      <path d="M1.5 2l6.5 3.8v7.4L1.5 9.4V2zm7.5 4.3l6.5-3.8v7.4L9 13.7V6.3zm7.5-4.3L23 5.8v7.4l-6.5-3.8V2zm-7.5 12.3l6.5 3.8v7.4L9 21.7v-7.4z" />
    </svg>
  );
}

function CICDIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#111215" strokeWidth="2.4" strokeLinecap="round">
      <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.26-8-12.355-8-5.096 0-5.096 8 0 8 5.095 0 7.26-8 12.355-8z" />
    </svg>
  );
}

function GitIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="16" height="16" x="4" y="4" rx="2" transform="rotate(45 12 12)" fill="#111215" />
      <circle cx="12" cy="8" r="1.5" fill="#ffffff" />
      <circle cx="9" cy="15" r="1.5" fill="#ffffff" />
      <circle cx="15" cy="13" r="1.5" fill="#ffffff" />
      <path d="M12 9.5v3M9 13.5l3-2" stroke="#ffffff" strokeWidth="1.3" />
    </svg>
  );
}

function GitHubIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" color="#111215">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function GitLabIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" color="#111215">
      <path d="M23.6 9.6l-1.3-4.1c-.2-.5-.8-.7-1.2-.4l-2.4 1.8H5.3L2.9 5.1c-.4-.3-1-.1-1.2.4L.4 9.6c-.2.5 0 1.1.4 1.4l11.2 8.2 11.2-8.2c.4-.3.6-.9.4-1.4z" />
    </svg>
  );
}

export default function Skills() {
  const topSlogans = ["BETTER", "TOOLS", "BRIGHTER", "SOLUTIONS"];

  return (
    <section className={styles.skillsSection} id="skills" aria-label="Skills & Tools">
      {/* Top Overline Header */}
      <div className={styles.topNav}>
        <div className={styles.topLeftNav}>
          <span className={styles.indexNum}>03</span>
          <div className={styles.indexLine} />
          <span className={styles.sectionLabel}>SKILLS</span>
        </div>

        <div className={styles.topRightSlogan}>
          {topSlogans.map((word) => (
            <span key={word} className={styles.sloganWord}>
              {word}
            </span>
          ))}
          <div className={styles.sloganLine} />
        </div>
      </div>

      {/* Main Title & Philosophy Summary Row */}
      <motion.div
        className={styles.titleRow}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className={styles.title}>
          <span className={styles.titleLine}>Tools</span>
          <span className={styles.titleLine}>that turn</span>
          <span className={styles.titleLine}>ideas into</span>
          <span className={styles.titleLine}>
            impact<span className={styles.periodDot} aria-hidden="true" />
          </span>
        </h2>

        <div className={styles.summaryCol}>
          <p className={styles.summaryText}>
            A curated stack I use to build scalable, beautiful and reliable applications from
            idea to deployment.
          </p>

          <div className={styles.workflowTracker}>
            <span className={styles.workflowText}>LEARN &nbsp; BUILD &nbsp; DEPLOY &nbsp; REPEAT</span>
          </div>
        </div>
      </motion.div>

      {/* Skill Cards Container (2 Rows) */}
      <div className={styles.cardsContainer}>
        {/* ROW 1: Frontend & Backend */}
        <motion.div
          className={styles.rowTop}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* 01: Frontend */}
          <div className={styles.skillCard}>
            <div>
              <div className={styles.cardHeader}>
                <div className={styles.cardNumGroup}>
                  <span className={styles.cardNum}>01</span>
                  <div className={styles.cardNumLine} />
                </div>
                <span className={styles.cardTag}>
                  CREATE INTERFACES
                  <br />
                  PEOPLE LOVE
                </span>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Frontend</h3>
                <p className={styles.cardDesc}>
                  Crafting modern, responsive and interactive user experiences.
                </p>
              </div>
            </div>

            <div className={styles.techRow}>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <NextjsIcon />
                </div>
                <span className={styles.techName}>Next.js</span>
              </div>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <ReactIcon />
                </div>
                <span className={styles.techName}>React</span>
              </div>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <TailwindIcon />
                </div>
                <span className={styles.techName}>Tailwind CSS</span>
              </div>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <TypeScriptIcon />
                </div>
                <span className={styles.techName}>TypeScript</span>
              </div>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <FramerIcon />
                </div>
                <span className={styles.techName}>Framer Motion</span>
              </div>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <ShadcnIcon />
                </div>
                <span className={styles.techName}>shadcn/ui</span>
              </div>
            </div>
          </div>

          {/* 02: Backend */}
          <div className={styles.skillCard}>
            <div>
              <div className={styles.cardHeader}>
                <div className={styles.cardNumGroup}>
                  <span className={styles.cardNum}>02</span>
                  <div className={styles.cardNumLine} />
                </div>
                <span className={styles.cardTag}>
                  BUILD SYSTEMS
                  <br />
                  THAT SCALE
                </span>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Backend</h3>
                <p className={styles.cardDesc}>
                  Building robust APIs and server-side systems that scale.
                </p>
              </div>
            </div>

            <div className={styles.techRow}>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <PythonIcon />
                </div>
                <span className={styles.techName}>Python</span>
              </div>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <DjangoIcon />
                </div>
                <span className={styles.techName}>Django</span>
              </div>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <FastAPIIcon />
                </div>
                <span className={styles.techName}>FastAPI</span>
              </div>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <PostgresIcon />
                </div>
                <span className={styles.techName}>PostgreSQL</span>
              </div>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <MongoIcon />
                </div>
                <span className={styles.techName}>MongoDB</span>
              </div>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <RedisIcon />
                </div>
                <span className={styles.techName}>Redis</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ROW 2: Cloud, DevOps, Version Control */}
        <motion.div
          className={styles.rowBottom}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* 03: Cloud */}
          <div className={styles.skillCard}>
            <div>
              <div className={styles.cardHeader}>
                <div className={styles.cardNumGroup}>
                  <span className={styles.cardNum}>03</span>
                  <div className={styles.cardNumLine} />
                </div>
                <span className={styles.cardTag}>
                  DEPLOY IDEAS
                  <br />
                  GLOBALLY
                </span>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Cloud</h3>
                <p className={styles.cardDesc}>
                  Deploying and managing applications for a global scale.
                </p>
              </div>
            </div>

            <div className={styles.techRow}>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <AWSIcon />
                </div>
                <span className={styles.techName}>AWS</span>
              </div>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <VercelIcon />
                </div>
                <span className={styles.techName}>Vercel</span>
              </div>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <GCPIcon />
                </div>
                <span className={styles.techName}>Google Cloud</span>
              </div>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <CloudflareIcon />
                </div>
                <span className={styles.techName}>Cloudflare</span>
              </div>
            </div>
          </div>

          {/* 04: DevOps */}
          <div className={styles.skillCard}>
            <div>
              <div className={styles.cardHeader}>
                <div className={styles.cardNumGroup}>
                  <span className={styles.cardNum}>04</span>
                  <div className={styles.cardNumLine} />
                </div>
                <span className={styles.cardTag}>
                  AUTOMATE
                  <br />
                  EVERYTHING
                </span>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>DevOps</h3>
                <p className={styles.cardDesc}>
                  Automating, monitoring and shipping faster.
                </p>
              </div>
            </div>

            <div className={styles.techRow}>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <DockerIcon />
                </div>
                <span className={styles.techName}>Docker</span>
              </div>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <K8sIcon />
                </div>
                <span className={styles.techName}>Kubernetes</span>
              </div>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <GitHubActionsIcon />
                </div>
                <span className={styles.techName}>GitHub Actions</span>
              </div>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <TerraformIcon />
                </div>
                <span className={styles.techName}>Terraform</span>
              </div>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <CICDIcon />
                </div>
                <span className={styles.techName}>CI/CD</span>
              </div>
            </div>
          </div>

          {/* 05: Version Control */}
          <div className={styles.skillCard}>
            <div>
              <div className={styles.cardHeader}>
                <div className={styles.cardNumGroup}>
                  <span className={styles.cardNum}>05</span>
                  <div className={styles.cardNumLine} />
                </div>
                <span className={styles.cardTag}>
                  TRACK PROGRESS
                  <br />
                  SHIP TOGETHER
                </span>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Version Control</h3>
                <p className={styles.cardDesc}>
                  Collaborating effectively and shipping with confidence.
                </p>
              </div>
            </div>

            <div className={styles.techRow}>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <GitIcon />
                </div>
                <span className={styles.techName}>Git</span>
              </div>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <GitHubIcon />
                </div>
                <span className={styles.techName}>GitHub</span>
              </div>
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <GitLabIcon />
                </div>
                <span className={styles.techName}>GitLab</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomLeft}>
          <span className={styles.bottomSectionTitle}>SKILLS</span>
          <div className={styles.bottomDivider} />
          <span className={styles.bottomMindset}>MORE THAN TOOLS, A MINDSET.</span>
        </div>

        <div className={styles.bottomRight}>
          <div className={styles.bottomDot} />
          <span className={styles.bottomAction}>KEEP LEARNING</span>
        </div>
      </div>
    </section>
  );
}
