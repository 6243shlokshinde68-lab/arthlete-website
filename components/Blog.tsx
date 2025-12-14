"use client";

import styles from "./Blog.module.css";
import { motion } from "framer-motion";

const blogPosts = [
    {
        id: 1,
        title: "The Science Behind Athletic Performance",
        excerpt: "Discover how data-driven insights can transform your training routine and maximize your potential.",
        date: "Dec 10, 2024",
        category: "Performance",
        image: "/blog-1.jpg",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "Nutrition Tips for Peak Performance",
        excerpt: "Learn how proper nutrition fuels your workouts and accelerates recovery for better results.",
        date: "Dec 8, 2024",
        category: "Nutrition",
        image: "/blog-2.jpg",
        readTime: "4 min read"
    },
    {
        id: 3,
        title: "Mental Strength: The Hidden Advantage",
        excerpt: "Explore the psychological aspects of athletic success and how to build mental resilience.",
        date: "Dec 5, 2024",
        category: "Mindset",
        image: "/blog-3.jpg",
        readTime: "6 min read"
    }
];

export default function Blog() {
    return (
        <section className={styles.blog}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h2 className={styles.title}>Latest Insights</h2>
                    <p className={styles.subtitle}>
                        Expert tips, research, and stories to help you reach your athletic goals
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={styles.card}
                        >
                            <div className={styles.imageWrapper}>
                                <div className={styles.imagePlaceholder}>
                                    <span className={styles.categoryBadge}>{post.category}</span>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <span className={styles.date}>{post.date}</span>
                                    <span className={styles.readTime}>{post.readTime}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{post.title}</h3>
                                <p className={styles.excerpt}>{post.excerpt}</p>
                                <button className={styles.readMore}>
                                    Read More
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
