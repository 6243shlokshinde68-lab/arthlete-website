"use client";

import styles from "./Reviews.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

const reviews = [
    {
        id: 1,
        name: "Sarah Mitchell",
        role: "Marathon Runner",
        review: "Arthlete transformed my training! The AI form correction is a game-changer. I've improved my running technique and reduced injuries significantly.",
        rating: 5,
        image: "👩‍🦰"
    },
    {
        id: 2,
        name: "Marcus Johnson",
        role: "Bodybuilder",
        review: "Best fitness app I've ever used! The personalized nutrition plans helped me gain 15 lbs of muscle in 3 months. Absolutely incredible results!",
        rating: 5,
        image: "💪"
    },
    {
        id: 3,
        name: "Priya Sharma",
        role: "Yoga Instructor",
        review: "The focus mode feature is phenomenal. It keeps me motivated and tracks my progress perfectly. My clients love it too!",
        rating: 5,
        image: "🧘‍♀️"
    },
    {
        id: 4,
        name: "David Chen",
        role: "CrossFit Athlete",
        review: "Dynamic meal suggestions based on my workouts are spot-on! Recovery has never been better. This app understands athletes.",
        rating: 5,
        image: "🏋️"
    },
    {
        id: 5,
        name: "Emma Rodriguez",
        role: "Personal Trainer",
        review: "I recommend Arthlete to all my clients. The real-time rep correction and progress tracking make coaching so much easier!",
        rating: 5,
        image: "🎯"
    },
    {
        id: 6,
        name: "Alex Thompson",
        role: "Triathlete",
        review: "Training for triathlons has never been easier! The comprehensive tracking and personalized plans keep me on target for every race.",
        rating: 5,
        image: "🏊"
    }
];

export default function Reviews() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <section className={styles.reviews}>
            <div className={styles.container}>

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h3 className={styles.title}>What Our Arthletes Say</h3>
                    <p className={styles.subtitle}>
                        Join thousands of athletes achieving their fitness goals
                    </p>
                </motion.div>

                {/* Reviews Grid - Scrolling Animation */}
                <div className={styles.grid}>
                    <div className={styles.scrollingWrapper}>
                        {/* First set of reviews */}
                        {reviews.map((review, index) => (
                            <motion.div
                                key={`review-1-${review.id}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={styles.card}
                                onMouseEnter={() => setHoveredCard(review.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className={styles.cardContent}>
                                    <div className={styles.stars}>
                                        {[...Array(review.rating)].map((_, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                                                className={styles.star}
                                            >
                                                ⭐
                                            </motion.span>
                                        ))}
                                    </div>
                                    <p className={styles.reviewText}>"{review.review}"</p>
                                    <div className={styles.author}>
                                        <div className={styles.avatar}>{review.image}</div>
                                        <div className={styles.authorInfo}>
                                            <h4 className={styles.authorName}>{review.name}</h4>
                                            <p className={styles.authorRole}>{review.role}</p>
                                        </div>
                                    </div>
                                </div>
                                {hoveredCard === review.id && (
                                    <motion.div
                                        layoutId="card-glow"
                                        className={styles.cardGlow}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    />
                                )}
                            </motion.div>
                        ))}
                        {/* Duplicate set for infinite scroll */}
                        {reviews.map((review, index) => (
                            <motion.div
                                key={`review-2-${review.id}`}
                                className={styles.card}
                                onMouseEnter={() => setHoveredCard(review.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className={styles.cardContent}>
                                    <div className={styles.stars}>
                                        {[...Array(review.rating)].map((_, i) => (
                                            <span key={i} className={styles.star}>⭐</span>
                                        ))}
                                    </div>
                                    <p className={styles.reviewText}>"{review.review}"</p>
                                    <div className={styles.author}>
                                        <div className={styles.avatar}>{review.image}</div>
                                        <div className={styles.authorInfo}>
                                            <h4 className={styles.authorName}>{review.name}</h4>
                                            <p className={styles.authorRole}>{review.role}</p>
                                        </div>
                                    </div>
                                </div>
                                {hoveredCard === review.id && (
                                    <motion.div
                                        layoutId="card-glow"
                                        className={styles.cardGlow}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Trust Badge - Below Reviews */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={styles.trustBadge}
                >
                    <h2 className={styles.trustTitle}>
                        Trusted by users in <span className={styles.highlight}>18+ Countries</span> and <span className={styles.highlight}>Rahul Education</span>
                    </h2>
                </motion.div>
            </div>
        </section>
    );
}
