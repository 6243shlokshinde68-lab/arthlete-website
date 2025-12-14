"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigation } from "@/contexts/NavigationContext";

const navItems = [
    { id: 'features' as const, label: 'Features', isPage: false },
    { id: 'how-it-works' as const, label: 'How it works', isPage: false },
    { id: 'pricing' as const, label: 'Pricing', isPage: false },
    { id: 'faqs' as const, label: 'FAQs', isPage: false },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('home');
    const { navigateToSection } = useNavigation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = (id: typeof navItems[number]['id']) => {
        // Trigger slide animation
        navigateToSection(id);
        setActiveTab(id);
    };

    return (
        <>
            <nav className={`${styles.navbar} ${scrolled ? styles.hidden : ''}`}>
                <div className={styles.brand}>
                    <Link
                        href="/"
                        style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setActiveTab('home');
                        }}
                    >
                        <Image
                            src="/arthlete-logo.png"
                            alt="Arthlete"
                            width={40}
                            height={40}
                            style={{ borderRadius: '12px' }}
                        />
                        <span className={styles.brandText}>Arthlete</span>
                    </Link>
                </div>

                <div className={styles.spacer}></div>

                <div className={styles.actions}>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.rnsmkituidemoapp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.downloadButton}
                    >
                        Download App
                    </a>
                </div>
            </nav>

            {/* Pill Navigation */}
            <AnimatePresence>
                {scrolled && (
                    <motion.div
                        className={styles.pillNav}
                        initial={{ y: 100, opacity: 0, x: "-50%" }}
                        animate={{ y: 0, opacity: 1, x: "-50%" }}
                        exit={{ y: 100, opacity: 0, x: "-50%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleScrollTo(item.id)}
                                className={`${styles.pillLink} ${activeTab === item.id ? styles.active : ''}`}
                            >
                                {activeTab === item.id && (
                                    <motion.div
                                        layoutId="pill-active"
                                        className={styles.activeBackground}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 35
                                        }}
                                    />
                                )}
                                <span style={{ position: 'relative', zIndex: 2 }}>
                                    <motion.span
                                        animate={{ color: activeTab === item.id ? "#0E0E10" : "#6b7280" }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {item.label}
                                    </motion.span>
                                </span>
                            </button>
                        ))}
                        <Link href="/blog" className={styles.pillLink}>
                            <span style={{ position: 'relative', zIndex: 2, color: "#6b7280" }}>
                                Blog
                            </span>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
