"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import styles from "./Header.module.css";

interface HeaderProps {
  activeNav?: string;
}

export default function Header({ activeNav = "Home" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentActive, setCurrentActive] = useState(activeNav);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Approach", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ];

  // Scroll spy & sticky header state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sectionIds = ["home", "about", "skills", "projects", "experience", "approach", "contact"];
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            const matched = navItems.find((item) => item.href === `#${id}`);
            if (matched) {
              setCurrentActive(matched.label);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
        <Link href="/" className={styles.logo} aria-label="Bhoomit Rachchawar Home">
          <span className={styles.logoText}>BR</span>
          <span className={styles.logoDot} />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav} aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = item.label.toLowerCase() === currentActive.toLowerCase();
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

        <div className={styles.headerRight}>
          <Link href="#contact" className={styles.connectBtn}>
            <span>Let&apos;s Connect</span>
            <ArrowUpRight size={16} strokeWidth={2} />
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={styles.mobileToggleBtn}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} strokeWidth={2.2} /> : <Menu size={22} strokeWidth={2.2} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`${styles.mobileDrawerOverlay} ${
          mobileMenuOpen ? styles.mobileDrawerOpen : ""
        }`}
        onClick={closeMenu}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className={styles.mobileDrawer}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.mobileDrawerHeader}>
            <Link href="/" className={styles.logo} onClick={closeMenu}>
              <span className={styles.logoText}>BR</span>
              <span className={styles.logoDot} />
            </Link>
            <button
              type="button"
              className={styles.mobileCloseBtn}
              onClick={closeMenu}
              aria-label="Close Navigation"
            >
              <X size={22} strokeWidth={2.2} />
            </button>
          </div>

          <nav className={styles.mobileNavLinks}>
            {navItems.map((item, index) => {
              const isActive = item.label.toLowerCase() === currentActive.toLowerCase();
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={`${styles.mobileNavItem} ${
                    isActive ? styles.activeMobileNavItem : ""
                  }`}
                >
                  <span className={styles.mobileNavIndex}>0{index + 1}</span>
                  <span className={styles.mobileNavText}>{item.label}</span>
                  <ArrowUpRight size={16} strokeWidth={2} className={styles.mobileNavArrow} />
                </Link>
              );
            })}
          </nav>

          <div className={styles.mobileDrawerFooter}>
            <Link
              href="#contact"
              onClick={closeMenu}
              className={styles.mobileConnectBtn}
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight size={18} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
