"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

function MailIcon({ size = 18 }: { size?: number }) {
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
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      color="#121316"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      color="#121316"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function PhoneIcon({ size = 18 }: { size?: number }) {
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
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

interface ContactChannel {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactChannels: ContactChannel[] = [
    {
      label: "EMAIL",
      value: "rachchawarb@gmail.com",
      href: "mailto:rachchawarb@gmail.com",
      icon: <MailIcon size={18} />,
    },
    {
      label: "LINKEDIN",
      value: "linkedin.com/in/bhoomit-r/",
      href: "https://www.linkedin.com/in/bhoomit-r/",
      icon: <LinkedinIcon size={18} />,
    },
    {
      label: "GITHUB",
      value: "github.com/Bhoomit-GIT",
      href: "https://github.com/Bhoomit-GIT",
      icon: <GithubIcon size={18} />,
    },
    {
      label: "PHONE",
      value: "+91 8446481509",
      href: "tel:+918446481509",
      icon: <PhoneIcon size={18} />,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitted(false);
  };

  return (
    <section className={styles.contactSection} id="contact" aria-label="Contact Section">
      {/* Top Overline Header */}
      <div className={styles.topNav}>
        <div className={styles.topLeftNav}>
          <span className={styles.indexNum}>07</span>
          <div className={styles.indexLine} />
          <span className={styles.sectionLabel}>CONTACT</span>
        </div>

        <div className={styles.topRightSlogan}>
          <span className={styles.sloganWord}>IDEAS</span>
          <span className={styles.sloganWord}>CONVERSATIONS</span>
          <span className={styles.sloganWord}>OPPORTUNITIES</span>
          <div className={styles.sloganLine} />
        </div>
      </div>

      {/* Main 3-Column Architectural Grid */}
      <div className={styles.mainGrid}>
        {/* Column 1: Left Editorial Narrative */}
        <motion.div
          className={styles.colIntro}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.overlineTag}>LET’S CONNECT</span>

          <h2 className={styles.mainTitle}>
            Let’s build
            <br />
            something
            <br />
            meaningful<span className={styles.periodDot} aria-hidden="true" />
          </h2>

          <p className={styles.description}>
            I’m Bhoomit, and I’m always open to discussing new opportunities, interesting projects, or just having a
            conversation about technology.
          </p>

          <div className={styles.dividerHairline} />

          <div className={styles.quoteCard}>
            <div className={styles.quoteBar} />
            <div className={styles.quoteBody}>
              <p className={styles.quoteText}>&ldquo;Good ideas start with a conversation.&rdquo;</p>
              <span className={styles.quoteAuthor}>— Bhoomit</span>
            </div>
          </div>
        </motion.div>

        {/* Column 2: Exact Sleek Direct Contact Rows from Reference */}
        <motion.div
          className={styles.colChannels}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.channelsHeader}>
            <span className={styles.blockNum}>01</span>
            <div className={styles.blockLine} />
            <span className={styles.blockTitle}>DIRECT CHANNELS</span>
          </div>

          <div className={styles.channelsList}>
            {contactChannels.map((channel) => (
              <Link
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={styles.channelRow}
              >
                <div className={styles.iconCircle}>{channel.icon}</div>

                <div className={styles.channelInfo}>
                  <span className={styles.channelLabel}>{channel.label}</span>
                  <span className={styles.channelValue}>{channel.value}</span>
                </div>

                <div className={styles.channelArrow}>
                  <ArrowUpRight size={18} strokeWidth={1.8} />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Column 3: Seamless Architectural Contact Form */}
        <motion.div
          className={styles.colForm}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.formHeader}>
            <div className={styles.formHeaderLeft}>
              <span className={styles.blockNum}>02</span>
              <div className={styles.blockLine} />
              <span className={styles.blockTitle}>SEND A MESSAGE</span>
            </div>
            <div className={styles.formHeaderRight}>
              <span className={styles.formTagWord}>GET IN TOUCH</span>
            </div>
          </div>

          {isSubmitted ? (
            <div className={styles.successBox}>
              <div className={styles.successIcon}>
                <CheckCircle2 size={36} strokeWidth={2} />
              </div>
              <h3 className={styles.successTitle}>Message Sent</h3>
              <p className={styles.successDesc}>
                Thank you for reaching out. I will get back to you as soon as possible.
              </p>
              <button type="button" onClick={handleReset} className={styles.resetBtn}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.formBody}>
              <div className={styles.inputGroup}>
                <label htmlFor="user-name" className={styles.label}>
                  NAME
                </label>
                <input
                  id="user-name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="user-email" className={styles.label}>
                  EMAIL
                </label>
                <input
                  id="user-email"
                  type="email"
                  required
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="user-message" className={styles.label}>
                  MESSAGE
                </label>
                <textarea
                  id="user-message"
                  required
                  rows={3}
                  placeholder="What would you like to discuss?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={styles.textarea}
                />
              </div>

              <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                <span>{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>
                <ArrowUpRight size={16} strokeWidth={2} />
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Matching Theme Footer Bar */}
      <footer className={styles.bottomBar}>
        <div className={styles.signatureBrand}>
          <div className={styles.monogramCircle}>
            <span>B</span>
          </div>
          <span className={styles.signatureName}>BHOOMIT RACHCHAWAR</span>
        </div>

        <div className={styles.bottomDividerLine} />

        <div className={styles.bottomRightTag}>
          <span className={styles.bottomTagText}>THANK YOU FOR STOPPING BY</span>
          <div className={styles.bottomTagLine} />
        </div>
      </footer>
    </section>
  );
}
