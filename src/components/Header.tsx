"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./Header.module.css";

interface HeaderProps {
  activeNav?: string;
}

export default function Header({ activeNav = "Home" }: HeaderProps) {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} aria-label="Bhoomit Rachchawar Home">
        <span className={styles.logoText}>BR</span>
        <span className={styles.logoDot} />
      </Link>

      <nav className={styles.nav} aria-label="Main Navigation">
        {navItems.map((item) => {
          const isActive = item.label.toLowerCase() === activeNav.toLowerCase();
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`${styles.navItem} ${isActive ? styles.activeNavItem : ""}`}
            >
              {item.label}
              {isActive && <span className={styles.activeDot} />}
            </Link>
          );
        })}
      </nav>

      <Link href="#contact" className={styles.connectBtn}>
        <span>Let&apos;s Connect</span>
        <ArrowUpRight size={16} strokeWidth={2} />
      </Link>
    </header>
  );
}
