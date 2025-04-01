// src/components/CursorFollower.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useHover } from '../contexts/HoverContext';

export default function CursorFollower() {
  const { isHovered } = useHover();

  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className="fixed w-8 h-8 bg-blue-400 rounded-full opacity-30 z-50 pointer-events-none"
          style={{ left: isHovered.x - 16, top: isHovered.y - 16 }}
          initial={{ scale: 0 }}
          animate={{ scale: 3 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      )}
    </AnimatePresence>
  );
}