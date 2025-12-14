"use client";

import Image from "next/image";
import styles from "./SplashScreen.module.css";
import { motion } from "framer-motion";

export default function SplashScreen() {
    return (
        <section className={styles.splashSection}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h2 className={styles.title}>Join our Community</h2>
                    <p className={styles.subtitle}>
                        Download our app and start your fitness journey today
                    </p>
                </motion.div>

                <div className={styles.mockupWrapper}>
                    {/* Left Phone - 120 degrees */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotateY: 0 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: -30 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className={`${styles.phoneMockup} ${styles.phoneLeft}`}
                    >
                        <div className={styles.phoneFrame}>
                            <div className={styles.notch}></div>
                            <div className={styles.splashContent}>
                                <div className={styles.logoContainer}>
                                    <Image
                                        src="/arthlete-logo.png"
                                        alt="Arthlete"
                                        width={120}
                                        height={120}
                                        className={styles.logo}
                                    />
                                </div>
                                <button className={styles.getStartedButton}>
                                    Join Community
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Center Phone - 90 degrees */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className={`${styles.phoneMockup} ${styles.phoneCenter}`}
                    >
                        <div className={styles.phoneFrame}>
                            <div className={styles.notch}></div>
                            <div className={styles.splashContent}>
                                <div className={styles.logoContainer}>
                                    <Image
                                        src="/arthlete-logo.png"
                                        alt="Arthlete"
                                        width={120}
                                        height={120}
                                        className={styles.logo}
                                    />
                                </div>
                                <button className={styles.getStartedButton}>
                                    Join Community
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Phone - 45 degrees */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotateY: 0 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 30 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className={`${styles.phoneMockup} ${styles.phoneRight}`}
                    >
                        <div className={styles.phoneFrame}>
                            <div className={styles.notch}></div>
                            <div className={styles.splashContent}>
                                <div className={styles.logoContainer}>
                                    <Image
                                        src="/arthlete-logo.png"
                                        alt="Arthlete"
                                        width={120}
                                        height={120}
                                        className={styles.logo}
                                    />
                                </div>
                                <button className={styles.getStartedButton}>
                                    Join Community
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
