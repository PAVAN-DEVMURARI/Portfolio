// src/components/Header.tsx
import { motion } from 'framer-motion';
import { Home, BookOpen, Briefcase, Award } from 'lucide-react';
import { useHover } from '../contexts/HoverContext';

export default function Header() {
  const { setIsHovered } = useHover();

  return (
    <motion.header
      className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <motion.h1
            className="text-2xl font-playfair text-gray-900 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05, x: 5 }}
            transition={{ duration: 0.3 }}
            onMouseMove={(e) => setIsHovered({ x: e.clientX, y: e.clientY })}
            onMouseLeave={() => setIsHovered(null)}
          >
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
              className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent bg-300%"
            >
              Pavan Devmurari
            </motion.span>
          </motion.h1>
          <nav className="hidden md:flex space-x-8 font-roboto">
            {[
              { name: 'home', icon: <Home className="w-4 h-4" /> },
              { name: 'education', icon: <BookOpen className="w-4 h-4" /> },
              { name: 'projects', icon: <Briefcase className="w-4 h-4" /> },
              { name: 'achievements', icon: <Award className="w-4 h-4" /> }
            ].map((item, i) => (
              <motion.a
                key={item.name}
                href={`#${item.name}`}
                className="nav-link flex items-center gap-2 relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ scale: 1.05, color: "#2563EB" }}
                onMouseMove={(e) => setIsHovered({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setIsHovered(null)}
              >
                <motion.div
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                >
                  {item.icon}
                </motion.div>
                <span className="capitalize">{item.name}</span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}