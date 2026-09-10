"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";

interface WorkExperienceItem {
  periodLine1: string;
  periodLine2: string;
  location: string;
  role: string;
  company: string;
  bullets: string[];
  tags: string[];
  link?: string;
}

interface EducationItem {
  period: string;
  location: string;
  degree: string;
  institution: string;
  field: string;
  link?: string;
}

const WORK_EXPERIENCES: WorkExperienceItem[] = [
  {
    periodLine1: "JUN 2024 -",
    periodLine2: "DEC 2024",
    location: "PUNE, INDIA",
    role: "Software Developer Intern",
    company: "Indo Dynamics Industries",
    bullets: [
      "Developed a CRM system which manages the invoice, quotations and delivery challan and other documents of the product.",
      "Used Python and Django framework for the development of the system with the help of Django REST Framework.",
    ],
    tags: ["Python", "Django", "Django REST Framework", "CRM"],
    link: "#",
  },
  {
    periodLine1: "MAR 2023 -",
    periodLine2: "APR 2023",
    location: "REMOTE",
    role: "Cloud Engineer Intern",
    company: "Rostris Infotech",
    bullets: [
      "Assisted in deploying and managing cloud infrastructure on AWS, including EC2 services.",
      "Configured and monitored cloud resources to ensure high availability, security and cost optimization.",
    ],
    tags: ["AWS", "EC2", "Cloud Infrastructure", "Monitoring"],
    link: "#",
  },
];

const EDUCATION_ITEMS: EducationItem[] = [
  {
    period: "2021 - 2025",
    location: "NAGPUR, INDIA",
    degree: "Bachelor's Degree",
    institution: "G H Raisoni College of Engineering and Management",
    field: "B. Tech in Computer Science and Engineering",
    link: "#",
  },
  {
    period: "2018 - 2020",
    location: "CHANDRAPUR, INDIA",
    degree: "Associate's Degree",
    institution: "Bhawanji Bhai Chavhan Junior College",
    field: "Higher Secondary Education",
    link: "#",
  },
];

export default function Experience() {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSkills = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("skills");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.experienceSection} id="experience" aria-label="Experience & Education">
      {/* Top Overline Header */}
      <div className={styles.topNav}>
        <div className={styles.topLeftNav}>
          <span className={styles.indexNum}>05</span>
          <div className={styles.indexLine} />
          <span className={styles.sectionLabel}>EXPERIENCE</span>
        </div>

        <div className={styles.topRightSlogan}>
          <span className={styles.sloganWord}>LEARN</span>
          <span className={styles.sloganWord}>BUILD</span>
          <span className={styles.sloganWord}>GROW</span>
          <span className={styles.sloganWord}>REPEAT</span>
          <div className={styles.sloganLine} />
        </div>
      </div>

      {/* Main Two-Column Grid */}
      <div className={styles.mainGrid}>
        {/* Left Column: Editorial Summary & Personal Quote */}
        <motion.div
          className={styles.leftCol}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.leftContentTop}>
            <span className={styles.journeyLabel}>MY JOURNEY</span>

            <h2 className={styles.headingTitle}>
              Experience
              <br />
              that shaped
              <br />
              me<span className={styles.periodDot} aria-hidden="true">.</span>
            </h2>

            <p className={styles.description}>
              Every opportunity, project, and challenge has helped me grow — technically and
              personally. Here&apos;s a glimpse of my professional journey and education.
            </p>

            <div className={styles.quoteCard}>
              <div className={styles.quoteBar} />
              <p className={styles.quoteText}>
                &ldquo;Consistent learning
                <br />
                leads to compound growth.&rdquo;
              </p>
            </div>
          </div>

          {/* Bottom Left: Concentric Arc Graphic & Monogram Signature */}
          <div className={styles.signatureBlock}>
            <svg
              className={styles.concentricArcs}
              viewBox="0 0 340 340"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="0" cy="340" r="220" stroke="rgba(0, 0, 0, 0.07)" strokeWidth="1.2" />
              <circle cx="0" cy="340" r="310" stroke="rgba(0, 0, 0, 0.05)" strokeWidth="1.2" />
            </svg>

            <div className={styles.monogramIdentity}>
              <div className={styles.monogramCircle}>
                <span>N</span>
              </div>
              <span className={styles.monogramName}>BHOOMIT RACHCHAWAR</span>
            </div>
          </div>
        </motion.div>

        {/* Vertical Divider Between Columns */}
        <div className={styles.columnDivider} aria-hidden="true" />

        {/* Right Column: Work Experience (01) & Education (02) */}
        <motion.div
          className={styles.rightCol}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section 01: Work Experience */}
          <div className={styles.blockGroup}>
            <div className={styles.blockHeader}>
              <div className={styles.blockHeaderLeft}>
                <span className={styles.blockNum}>01</span>
                <div className={styles.blockLine} />
                <span className={styles.blockTitle}>WORK EXPERIENCE</span>
              </div>
              <div className={styles.blockHeaderRight}>
                <span className={styles.blockTagWord}>REAL WORK.</span>
                <span className={styles.blockTagWord}>REAL IMPACT.</span>
              </div>
            </div>

            {/* Timeline for Work Experience */}
            <div className={styles.timelineList}>
              {WORK_EXPERIENCES.map((exp, idx) => (
                <div key={idx} className={styles.timelineRow}>
                  {/* Left: Date & Location */}
                  <div className={styles.timelineDateCol}>
                    <span className={styles.periodLine}>{exp.periodLine1}</span>
                    <span className={styles.periodLine}>{exp.periodLine2}</span>
                    <span className={styles.locationText}>{exp.location}</span>
                  </div>

                  {/* Center: Line & Dot */}
                  <div className={styles.timelineSpine}>
                    <div className={styles.spineDot} />
                    {idx < WORK_EXPERIENCES.length - 1 && <div className={styles.spineLine} />}
                  </div>

                  {/* Right: Job Details */}
                  <div className={styles.timelineContentCol}>
                    <div className={styles.itemTitleRow}>
                      <h3 className={styles.itemTitle}>{exp.role}</h3>
                      <Link
                        href={exp.link || "#"}
                        className={styles.itemArrowBtn}
                        aria-label={`Learn more about ${exp.role} at ${exp.company}`}
                      >
                        <ArrowUpRight size={18} strokeWidth={1.8} />
                      </Link>
                    </div>

                    <h4 className={styles.companyName}>{exp.company}</h4>

                    <ul className={styles.bulletList}>
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx} className={styles.bulletItem}>
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className={styles.pillContainer}>
                      {exp.tags.map((tag) => (
                        <span key={tag} className={styles.pillTag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 02: Education */}
          <div className={styles.blockGroup}>
            <div className={styles.blockHeader}>
              <div className={styles.blockHeaderLeft}>
                <span className={styles.blockNum}>02</span>
                <div className={styles.blockLine} />
                <span className={styles.blockTitle}>EDUCATION</span>
              </div>
              <div className={styles.blockHeaderRight}>
                <span className={styles.blockTagWord}>A STRONG</span>
                <span className={styles.blockTagWord}>FOUNDATION.</span>
              </div>
            </div>

            {/* Timeline for Education */}
            <div className={styles.timelineList}>
              {EDUCATION_ITEMS.map((edu, idx) => (
                <div key={idx} className={styles.timelineRow}>
                  {/* Left: Date & Location */}
                  <div className={styles.timelineDateCol}>
                    <span className={styles.periodLine}>{edu.period}</span>
                    <span className={styles.locationText}>{edu.location}</span>
                  </div>

                  {/* Center: Line & Dot */}
                  <div className={styles.timelineSpine}>
                    <div className={styles.spineDot} />
                    {idx < EDUCATION_ITEMS.length - 1 && <div className={styles.spineLine} />}
                  </div>

                  {/* Right: Education Details */}
                  <div className={styles.timelineContentCol}>
                    <div className={styles.itemTitleRow}>
                      <h3 className={styles.itemTitle}>{edu.degree}</h3>
                      <Link
                        href={edu.link || "#"}
                        className={styles.itemArrowBtn}
                        aria-label={`Details about ${edu.degree} at ${edu.institution}`}
                      >
                        <ArrowUpRight size={18} strokeWidth={1.8} />
                      </Link>
                    </div>

                    <h4 className={styles.companyName}>{edu.institution}</h4>
                    <p className={styles.educationField}>{edu.field}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Right Pagination / Navigator */}
          <div className={styles.bottomNavSection}>
            <div className={styles.navControls}>
              <button
                type="button"
                onClick={scrollToProjects}
                className={styles.navChevronBtn}
                aria-label="Previous Section (Projects)"
              >
                <ChevronLeft size={16} strokeWidth={2} />
              </button>

              <button
                type="button"
                onClick={scrollToSkills}
                className={styles.navChevronBtn}
                aria-label="Next Section (Skills)"
              >
                <ChevronRight size={16} strokeWidth={2} />
              </button>

              <span className={styles.pageCountText}>05 / 06</span>
              <div className={styles.bottomNavLine} />

              <a
                href="#skills"
                onClick={scrollToSkills}
                className={styles.nextSectionLink}
              >
                <span className={styles.nextMetaLabel}>NEXT</span>
                <span className={styles.nextMetaTitle}>SKILLS</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
