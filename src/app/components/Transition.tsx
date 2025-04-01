// src/components/PageTransition.tsx
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface PageTransitionProps {
  isTransitioning: boolean;
  onComplete: () => void;
}

export default function PageTransition({ isTransitioning, onComplete }: PageTransitionProps) {
  useEffect(() => {
    if (isTransitioning) {
      // Trigger onComplete after animations finish
      const timer = setTimeout(() => {
        onComplete();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-40 pointer-events-none"
      animate={{ opacity: isTransitioning ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Sliding panels */}
      <div className="relative h-full w-full overflow-hidden">
        {/* Top panel */}
        <motion.div
          className="absolute top-0 left-0 right-0 bg-blue-500 h-1/2 origin-top"
          initial={{ scaleY: 0 }}
          animate={{ 
            scaleY: isTransitioning ? [0, 1, 1, 0] : 0
          }}
          transition={{ 
            duration: 1.8,
            times: [0, 0.3, 0.7, 1],
            ease: ["easeInOut", "easeInOut", "easeInOut", "easeInOut"]
          }}
        />
        
        {/* Bottom panel */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-blue-500 h-1/2 origin-bottom"
          initial={{ scaleY: 0 }}
          animate={{ 
            scaleY: isTransitioning ? [0, 1, 1, 0] : 0
          }}
          transition={{ 
            duration: 1.8,
            times: [0, 0.3, 0.7, 1],
            ease: ["easeInOut", "easeInOut", "easeInOut", "easeInOut"]
          }}
        />
        
        {/* Text that appears between panels */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isTransitioning ? [0, 1, 1, 0] : 0
          }}
          transition={{ 
            duration: 1.8,
            times: [0.1, 0.3, 0.7, 0.9]
          }}
        >
          <div className="text-white text-5xl font-bold tracking-wider">
            WELCOME
          </div>
        </motion.div>
      </div>
      
      {/* Particle explosion effect */}
      {isTransitioning && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-blue-400"
              style={{
                left: `${50}%`,
                top: `${50}%`,
              }}
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{
                scale: [0, 1, 0.5, 0],
                x: [0, (Math.random() - 0.5) * window.innerWidth * 1.5],
                y: [0, (Math.random() - 0.5) * window.innerHeight * 1.5],
              }}
              transition={{
                duration: 1.5,
                delay: 0.8 + Math.random() * 0.3,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}