// src/components/LoadingScreen.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // Code snippets that will be typed out
  const codeSnippets = [
    "const developer = 'Pavan Devmurari';",
    "const skills = ['React', 'Next.js', 'TypeScript'];",
    "function createGreatCode() { return true; }",
    "// Loading portfolio experience...",
    "await Portfolio.initialize();"
  ];

  // Cycle through code snippets
  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setCurrentTextIndex(prev => (prev + 1) % codeSnippets.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isLoading, codeSnippets.length]);

  // Simulate loading progress for 4 seconds
  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 40); // 40ms * 100 = 4000ms (4 seconds)

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: "white",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full max-w-2xl px-4 sm:px-6">
            {/* Terminal-inspired window */}
            <motion.div
              className="rounded-lg overflow-hidden shadow-xl border border-gray-200"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Terminal header */}
              <div className="bg-gray-100 p-2 sm:p-3 flex items-center border-b border-gray-200">
                <div className="flex space-x-1.5 sm:space-x-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-600 text-xs sm:text-sm mx-auto font-mono">
                  portfolio-initializer.tsx
                </div>
              </div>

              {/* Terminal body */}
              <div className="bg-white p-3 sm:p-5 h-56 sm:h-64 font-mono text-xs sm:text-sm">
                <div className="text-green-600 mb-1 sm:mb-2">➜ ~ Initializing portfolio components</div>

                {/* Typing effect */}
                <div className="h-14 sm:h-20">
                  {codeSnippets.map((snippet, index) => (
                    <motion.div
                      key={index}
                      className="text-blue-600"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: currentTextIndex === index ? 1 : 0,
                        height: currentTextIndex === index ? "auto" : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <TypewriterText
                        text={snippet}
                        isVisible={currentTextIndex === index}
                        typingSpeed={isMobile ? 30 : 50}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Loading visualization */}
                <motion.div
                  className="mt-4 sm:mt-8 relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="text-gray-600 mb-1 sm:mb-2 flex justify-between text-xs sm:text-sm">
                    <span>Portfolio loading: {progress}%</span>
                    <span className="text-blue-600">{progress === 100 ? "Complete" : "In progress..."}</span>
                  </div>
                  <div className="h-1.5 sm:h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500"
                      style={{ width: `${progress}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </motion.div>

                {/* Loading messages */}
                <div className="mt-3 sm:mt-6 text-xs text-gray-500">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {progress < 30 && "Loading components..."}
                    {progress >= 30 && progress < 60 && "Compiling project experience..."}
                    {progress >= 60 && progress < 90 && "Optimizing portfolio assets..."}
                    {progress >= 90 && "Finalizing and preparing for display..."}
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Developer signature */}
            <motion.div
              className="text-center mt-4 sm:mt-8 text-gray-800 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <div className="relative">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shadow-md text-sm sm:text-base">
                    PD
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800 text-sm sm:text-lg">Pavan Devmurari</span>
                    <div className="text-xs text-blue-600">Full Stack Developer</div>
                  </div>
                </div>

                {/* Floating elements for visual interest - hide on smallest screens */}
                <motion.div
                  className="absolute -right-4 -top-4 sm:-right-6 sm:-top-6 w-3 h-3 sm:w-4 sm:h-4 rounded bg-blue-500 shadow-md hidden xs:block"
                  animate={{
                    rotate: 360,
                    x: [0, 5, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                    x: { duration: 2, repeat: Infinity, repeatType: "reverse" },
                    y: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                  }}
                />
                <motion.div
                  className="absolute -left-4 -bottom-3 sm:-left-6 sm:-bottom-4 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-indigo-600 shadow-md hidden xs:block"
                  animate={{
                    rotate: -360,
                    x: [0, -7, 0],
                    y: [0, 7, 0]
                  }}
                  transition={{
                    rotate: { duration: 5, repeat: Infinity, ease: "linear" },
                    x: { duration: 3, repeat: Infinity, repeatType: "reverse" },
                    y: { duration: 2.5, repeat: Infinity, repeatType: "reverse" }
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Helper component for typewriter effect
const TypewriterText = ({
  text,
  isVisible,
  typingSpeed = 50
}: {
  text: string,
  isVisible: boolean,
  typingSpeed?: number
}) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!isVisible) {
      setDisplayedText('');
      return;
    }

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text, isVisible, typingSpeed]);

  return (
    <div className="break-words">
      {displayedText}
      {displayedText.length === text.length ? null : (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          |
        </motion.span>
      )}
    </div>
  );
};