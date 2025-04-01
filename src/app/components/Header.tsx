// src/components/Header.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, BookOpen, Briefcase, Award, Menu, X } from 'lucide-react';
import { useHover } from '../contexts/HoverContext';

export default function Header() {
  const { setIsHovered } = useHover();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'home', icon: <Home className="w-4 h-4" /> },
    { name: 'education', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'projects', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'achievements', icon: <Award className="w-4 h-4" /> }
  ];

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
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 font-roboto">
            {navItems.map((item, i) => (
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
          
          {/* Mobile Menu Button */}
          <motion.button
            className="block md:hidden text-blue-600 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onMouseMove={(e) => setIsHovered({ x: e.clientX, y: e.clientY })}
            onMouseLeave={() => setIsHovered(null)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white/95 backdrop-blur-md z-40 flex flex-col pt-24 pb-8 px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-6 items-center">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={`#${item.name}`}
                  className="nav-link flex items-center gap-3 relative group text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  whileHover={{ scale: 1.05, color: "#2563EB" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                    className="bg-blue-100 p-2 rounded-full"
                  >
                    {item.icon}
                  </motion.div>
                  <span className="capitalize">{item.name}</span>
                  <motion.div
                    className="w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 absolute -bottom-2 left-0 scale-x-0 origin-left"
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </nav>
            
            {/* Decorative elements for mobile menu */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
              <motion.div
                className="text-8xl font-bold text-blue-600"
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                  scale: [1, 1.05, 1, 0.95, 1]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                PD
              </motion.div>
            </div>
            
            <motion.div
              className="mt-auto text-center text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p>© 2024 Pavan Devmurari</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}