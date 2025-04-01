// src/components/ScrollToTop.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

interface ScrollToTopProps {
  show: boolean;
  onClick: () => void;
}

export default function ScrollToTop({ show, onClick }: ScrollToTopProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={onClick}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full shadow-lg z-40 overflow-hidden"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            boxShadow: [
              "0 10px 15px -3px rgba(59, 130, 246, 0.3)",
              "0 15px 25px -5px rgba(59, 130, 246, 0.5)",
              "0 10px 15px -3px rgba(59, 130, 246, 0.3)"
            ]
          }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 },
            boxShadow: { duration: 2, repeat: Infinity, repeatType: "mirror" }
          }}
          whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.6)" }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="absolute inset-0 bg-blue-500 opacity-0"
            whileHover={{ opacity: 0.3, top: '100%' }}
            transition={{ duration: 0.5 }}
          />
          <ChevronUp className="w-6 h-6 relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}