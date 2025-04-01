// src/components/Footer.tsx
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-10 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          
        </motion.div>

        {/* Horizontal divider line */}
        <motion.div 
          className="border-t border-gray-300 my-6"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2 }}
        />

        {/* Navigation below the line */}
        <motion.nav
          className="flex flex-wrap justify-center space-x-6 my-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
          <a href="#education" className="text-gray-600 hover:text-blue-600 transition-colors">Education</a>
          <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
        </motion.nav>

        <motion.div
          className="text-center text-gray-500 text-sm mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p>© {new Date().getFullYear()} Pavan Devmurari. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}