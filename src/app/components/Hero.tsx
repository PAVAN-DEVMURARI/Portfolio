// src/components/Hero.tsx
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Image from 'next/image';
import { useHover } from '../contexts/HoverContext';

export default function Hero() {
  const { setIsHovered } = useHover();

  const handleResumeDownload = () => {
    const resumeLink = document.createElement('a');
    resumeLink.href = "/Pavan Devmurari Resume.pdf";
    resumeLink.download = "/Pavan Devmurari Resume.pdf";
    document.body.appendChild(resumeLink);
    resumeLink.click();
    document.body.removeChild(resumeLink);
  };

  return (
    <section id="home" className="bg-gradient-to-b from-white to-blue-50 pt-24 pb-12 md:py-24 relative overflow-hidden">
      {/* Responsive particles - hidden on mobile */}
      {[
        { width: 20, height: 20, left: '10%', top: '20%' },
        { width: 15, height: 15, left: '30%', top: '40%' },
        { width: 25, height: 25, left: '50%', top: '60%' },
        { width: 10, height: 10, left: '70%', top: '80%' },
        { width: 18, height: 18, left: '90%', top: '10%' },
      ].map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-200 opacity-20 hidden md:block"
          style={{
            width: particle.width,
            height: particle.height,
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-4 md:mb-6 relative"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="inline-block p-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-300 mb-6 md:mb-10 relative"
              animate={{
                boxShadow: [
                  "0 0 0 rgba(59, 130, 246, 0)",
                  "0 0 40px rgba(59, 130, 246, 0.5)",
                  "0 0 0 rgba(59, 130, 246, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
            >
              <Image
                src="/Pavan.jpg"
                alt="Pavan Devmurari"
                width={320}
                height={320}
                className="rounded-full border-4 border-white object-cover w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[320px] md:h-[320px]"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-playfair mb-2 md:mb-4 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.03 }}
            onMouseMove={(e) => setIsHovered({ x: e.clientX, y: e.clientY })}
            onMouseLeave={() => setIsHovered(null)}
          >
            Hello, I am Pavan Devmurari
          </motion.h2>

          <motion.div
            className="text-xl sm:text-2xl md:text-3xl font-playfair text-blue-600 mb-4 md:mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <TypeAnimation
              sequence={['Full Stack Developer', 3000, 'Problem Solver', 3000, 'Competitive Programmer', 3000]}
              repeat={Infinity}
              speed={25}
              wrapper="span"
              cursor={true}
              className="text-gradient bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent"
            />
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 md:mb-10 px-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.02 }}
            onMouseMove={(e) => setIsHovered({ x: e.clientX, y: e.clientY })}
            onMouseLeave={() => setIsHovered(null)}
          >
            Hello! I am a passionate second-year Computer Science student at Charusat University with a strong enthusiasm for learning new technologies and building innovative projects.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 px-4"
          >
            <motion.button
              onClick={handleResumeDownload}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium shadow-lg hover:shadow-blue-200 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onMouseMove={(e) => setIsHovered({ x: e.clientX, y: e.clientY })}
              onMouseLeave={() => setIsHovered(null)}
            >
              <Download className="w-5 h-5 mr-2 relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </motion.button>

            <motion.div className="flex space-x-4 items-center justify-center">
              {[
                { icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />, url: "https://github.com/PAVAN-DEVMURARI", tooltip: "GitHub" },
                { icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />, url: "https://www.linkedin.com/in/pavan-devmurari-34a91a290/", tooltip: "LinkedIn" },
                { icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />, url: "mailto:devmuraripavan556@gmail.com", tooltip: "Email" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-white rounded-full text-blue-600 shadow-md relative group"
                  whileHover={{ scale: 1.2, y: -5, boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ opacity: { duration: 0.5, delay: 1.2 + i * 0.1 }, y: { duration: 0.5, delay: 1.2 + i * 0.1 } }}
                  onMouseMove={(e) => setIsHovered({ x: e.clientX, y: e.clientY })}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  {social.icon}
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {social.tooltip}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}