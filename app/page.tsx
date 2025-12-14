"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import SplashScreen from "@/components/SplashScreen";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { NavigationProvider, useNavigation } from "@/contexts/NavigationContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function PageContent() {
  const { currentSection, getSlideDirection } = useNavigation();
  const [slideSection, setSlideSection] = useState<string | null>(null);
  const direction = getSlideDirection();

  useEffect(() => {
    if (currentSection && currentSection !== 'hero') {
      // Show slide overlay
      setSlideSection(currentSection);

      // After slide completes, scroll to actual section
      setTimeout(() => {
        const element = document.getElementById(currentSection);
        if (element) {
          element.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
        // Hide overlay
        setSlideSection(null);
      }, 500);
    }
  }, [currentSection]);

  const slideVariants = {
    enter: (dir: 'left' | 'right' | null) => ({
      x: dir === 'left' ? '-100%' : dir === 'right' ? '100%' : 0,
    }),
    center: {
      x: 0,
    },
  };

  return (
    <>
      {/* Navbar - always visible, outside main content */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2000 }}>
        <Navbar />
      </div>

      <main className="min-h-screen bg-white selection:bg-black selection:text-white relative overflow-x-hidden">
        {/* Main content - always present */}
        <div id="hero">
          <Hero />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div id="reviews">
          <Reviews />
        </div>
        <div id="splash">
          <SplashScreen />
        </div>
        <div id="faqs">
          <Faq />
        </div>
        <Footer />

        {/* Slide overlay - slides under the navbar */}
        <AnimatePresence custom={direction}>
          {slideSection && (
            <motion.div
              key={slideSection}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              transition={{
                type: 'tween',
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: 1000,
                backgroundColor: 'white',
                overflowY: 'auto',
                overflowX: 'hidden',
              }}
            >
              {/* Render section content */}
              {slideSection === 'features' && <Features />}
              {slideSection === 'how-it-works' && <HowItWorks />}
              {slideSection === 'pricing' && <Pricing />}
              {slideSection === 'faqs' && <Faq />}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}

export default function Home() {
  return (
    <NavigationProvider>
      <PageContent />
    </NavigationProvider>
  );
}
