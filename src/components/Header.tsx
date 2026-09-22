"use client";
import React, { useState, useEffect, useCallback } from "react";
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
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 30);

      const bridge = document.querySelector('[class*="bridgeWrapper"]') as HTMLElement | null;
      const isDesktop = window.innerWidth > 900;

      if (bridge && isDesktop) {
        const bridgeTop = bridge.offsetTop;
        const bridgeHeight = bridge.offsetHeight;
        const bridgeScrollRange = bridgeHeight - window.innerHeight;

        // Check sections below the bridge in reverse order
        const lowerSectionIds = ["contact", "approach", "experience", "projects", "skills"];
        let matchedLower = false;

        for (const id of lowerSectionIds) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 220) {
              const matched = navItems.find((item) => item.href === `#${id}`);
              if (matched) {
                setCurrentActive(matched.label);
                matchedLower = true;
              }
              break;
            }
          }
        }

        if (!matchedLower) {
          // Inside the HeroAboutBridge pinned runway
          const progress = Math.min(1, Math.max(0, (scrollY - bridgeTop) / Math.max(1, bridgeScrollRange)));
          if (progress >= 0.42) {
            setCurrentActive("About");
          } else {
            setCurrentActive("Home");
          }
        }
      } else {
        // Fallback for mobile or standard flow
        const sectionIds = ["contact", "approach", "experience", "projects", "skills", "about", "home"];
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 220) {
              const matched = navItems.find((item) => item.href === `#${id}`);
              if (matched) {
                setCurrentActive(matched.label);
              }
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth navigation click handler
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
      e.preventDefault();
      setMobileMenuOpen(false);

      if (href === "#home" || href === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setCurrentActive("Home");
        window.history.pushState(null, "", "#home");
        return;
      }

      if (href === "#about") {
        const bridge = document.querySelector('[class*="bridgeWrapper"]') as HTMLElement | null;
        const isDesktop = window.innerWidth > 900;
        if (bridge && isDesktop) {
          const bridgeScrollRange = bridge.offsetHeight - window.innerHeight;
          const targetY = bridge.offsetTop + bridgeScrollRange * 0.95;
          window.scrollTo({ top: targetY, behavior: "smooth" });
        } else {
          const aboutEl = document.getElementById("about");
          if (aboutEl) {
            aboutEl.scrollIntoView({ behavior: "smooth" });
          }
        }
        setCurrentActive("About");
        window.history.pushState(null, "", "#about");
        return;
      }

      const targetId = href.replace("#", "");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
        setCurrentActive(label);
        window.history.pushState(null, "", href);
      }
    },
    []
  );

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
        <Link
          href="#home"
          className={styles.logo}
          aria-label="Bhoomit Rachchawar Home"
          onClick={(e) => handleNavClick(e, "#home", "Home")}
        >
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
                onClick={(e) => handleNavClick(e, item.href, item.label)}
                className={`${styles.navItem} ${isActive ? styles.activeNavItem : ""}`}
              >
                {item.label}
                {isActive && <span className={styles.activeDot} />}
              </Link>
            );
          })}
        </nav>

        <div className={styles.headerRight}>
          <Link
            href="#contact"
            className={styles.connectBtn}
            onClick={(e) => handleNavClick(e, "#contact", "Contact")}
          >
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
            <Link
              href="#home"
              className={styles.logo}
              onClick={(e) => handleNavClick(e, "#home", "Home")}
            >
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
                  onClick={(e) => handleNavClick(e, item.href, item.label)}
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
              onClick={(e) => handleNavClick(e, "#contact", "Contact")}
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
