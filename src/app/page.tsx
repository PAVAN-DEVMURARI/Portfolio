// src/pages/index.tsx
"use client";
import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import dynamic from 'next/dynamic';
import { HoverProvider } from './contexts/HoverContext';
import LoadingScreen from './components/LoadingScreen';
import PageTransition from './components/Transition';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import ScrollToTop from './components/ScrollToTop';
import CursorFollower from './components/CursorFollower';

const Projects = dynamic(() => import('./components/Projects'), { ssr: false });
const Achievements = dynamic(() => import('./components/Achievements'), { ssr: false });
const Contact = dynamic(() => import('./components/Contact'), { ssr: false });
const Footer = dynamic(() => import('./components/Footer'), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsTransitioning(true);
    }, 4000); // Changed to 4-second loading screen
    
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);

    // Prevent body scroll when mobile menu is open
    const setBodyLock = (isLocked: boolean) => {
      document.body.style.overflow = isLocked ? 'hidden' : '';
    };

    // Subscribe to menu state changes
    const handleMenuStateChange = (isOpen: boolean) => {
      setBodyLock(isOpen);
    };

    // You'll need to set up a way to listen for menu state changes
    // This depends on your state management approach

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      setBodyLock(false);
    };
  }, []);

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Animation variants for content sections
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.8,
        ease: [0.1, 0.25, 0.3, 1]
      }
    })
  };

  return (
    <HoverProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <LoadingScreen isLoading={isLoading} />
        <PageTransition 
          isTransitioning={isTransitioning}
          onComplete={handleTransitionComplete}
        />

        {/* Content only visible after loading and transition */}
        <div className={`transition-opacity duration-500 ${isLoading || isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <Header />
          
          <motion.div
            custom={0}
            initial="hidden"
            animate={!isLoading && !isTransitioning ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <Hero />
          </motion.div>
          
          <motion.div
            custom={1}
            initial="hidden"
            animate={!isLoading && !isTransitioning ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <Skills />
          </motion.div>
          
          <motion.div
            custom={2}
            initial="hidden"
            animate={!isLoading && !isTransitioning ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <Education />
          </motion.div>
          
          <motion.div
            custom={3}
            initial="hidden"
            animate={!isLoading && !isTransitioning ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <Projects />
          </motion.div>
          
          <motion.div
            custom={4}
            initial="hidden"
            animate={!isLoading && !isTransitioning ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <Achievements />
          </motion.div>
          
          <motion.div
            custom={5}
            initial="hidden"
            animate={!isLoading && !isTransitioning ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <Contact />
          </motion.div>
          
          <motion.div
            custom={6}
            initial="hidden"
            animate={!isLoading && !isTransitioning ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <Footer />
          </motion.div>
        </div>

        <ScrollToTop show={showScrollTop} onClick={scrollToTop} />
        <CursorFollower />
        
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 z-50 origin-left"
          style={{ scaleX: scrollYProgress }}
          whileHover={{ height: "3px", boxShadow: "0 0 10px rgba(59, 130, 246, 0.7)" }}
        />
      </div>
    </HoverProvider>
  );
}