"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Scrolling Text Banner */}
            <div className={styles.scrollingBanner}>
                <div className={styles.scrollingText}>
                    <span>ELEVATING FITNESS • ELEVATING FITNESS • ELEVATING FITNESS • ELEVATING FITNESS • ELEVATING FITNESS • ELEVATING FITNESS • </span>
                    <span>ELEVATING FITNESS • ELEVATING FITNESS • ELEVATING FITNESS • ELEVATING FITNESS • ELEVATING FITNESS • ELEVATING FITNESS • </span>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className={styles.footerContent}>
                <div className={styles.container}>
                    {/* Left Section */}
                    <div className={styles.leftSection}>
                        <h2 className={styles.tagline}>
                            Empowering Every<br />
                            Step of Fitness!
                        </h2>
                        <p className={styles.subtitle}>Start today, stay fit forever.</p>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.rnsmkituidemoapp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.downloadButton}
                        >
                            Download App
                        </a>
                    </div>

                    {/* Right Section - Links */}
                    <div className={styles.linksSection}>
                        <div className={styles.linkColumn}>
                            <h3 className={styles.columnTitle}>Sitemap</h3>
                            <Link href="#features" className={styles.link}>About Us</Link>
                            <Link href="#features" className={styles.link}>Features</Link>
                            <Link href="#pricing" className={styles.link}>Contact</Link>
                        </div>

                        <div className={styles.linkColumn}>
                            <h3 className={styles.columnTitle}>Social</h3>
                            <a href="https://www.instagram.com/arthlete.fit/" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>
                            <a href="https://discord.gg/arthlete" target="_blank" rel="noopener noreferrer" className={styles.link}>Discord</a>
                            <a href="https://x.com/arthlete" target="_blank" rel="noopener noreferrer" className={styles.link}>X</a>
                            <a href="https://youtube.com/@arthlete" target="_blank" rel="noopener noreferrer" className={styles.link}>YouTube</a>
                            <a href="https://www.linkedin.com/company/arthlete" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
                        </div>

                        <div className={styles.linkColumn}>
                            <h3 className={styles.columnTitle}>Support</h3>
                            <Link href="#faqs" className={styles.link}>Help Center</Link>
                            <Link href="#faqs" className={styles.link}>FAQs</Link>
                            <Link href="#pricing" className={styles.link}>Pricing</Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <div className={styles.container}>
                        <p className={styles.copyright}>ARTHLETE MOTIONS PRIVATE LIMITED • All rights reserved</p>
                        <div className={styles.legalLinks}>
                            <Link href="#" className={styles.legalLink}>Terms</Link>
                            <Link href="#" className={styles.legalLink}>Privacy</Link>
                            <Link href="#" className={styles.legalLink}>Cookies</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
