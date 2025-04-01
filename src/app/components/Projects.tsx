// src/components/Projects.tsx
import { motion } from 'framer-motion';
import {  Github, Code } from 'lucide-react';
import { useHover } from '../contexts/HoverContext';
import { useEffect, useState } from 'react';

export default function Projects() {
  const { setIsHovered } = useHover();
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on a touch device
  useEffect(() => {
    setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    const handleResize = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const staggerChildren = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delayChildren: 0.3, staggerChildren: 0.1 } }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const projectCardHover = {
    rest: { y: 0, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" },
    hover: {
      y: -15,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500"
            style={{
              width: 4,
              height: 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, 100], opacity: [0, 1, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="section-heading text-center mb-8 sm:mb-12 md:mb-16 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            {
              title: 'ThriveTogether',
              description: 'A full stack project helping people with money provided by the community that they have joined in',
              tech: ['React.js', 'Node.js', 'Express', 'Supabase'],
              image: 'ecommerce.jpg', // Update path as needed
              codeLink: 'https://github.com/PAVAN-DEVMURARI/Project-1'
            },
            {
              title: 'Online Job Portal',
              description: 'A full-stack job portal connecting employers and job seekers with features like job postings, applications, and user profiles',
              tech: ['React.js', 'Node.js', 'Express', 'MongoDB'],
              image: 'taskapp.jpg', // Update path as needed
              codeLink: 'https://github.com/Surendrakumarpatel/jobportal-yt'
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              className="group"
              variants={fadeUpVariants}
              onMouseMove={(e) => !isMobile && setIsHovered({ x: e.clientX, y: e.clientY })}
              onMouseLeave={() => !isMobile && setIsHovered(null)}
            >
              <motion.div
                className="bg-white rounded-xl overflow-hidden shadow-lg"
                initial="rest"
                whileHover={isMobile ? {} : "hover"}
                variants={projectCardHover}
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-blue-600 opacity-10 ${isMobile ? 'group-active:opacity-0' : 'group-hover:opacity-0'} transition-opacity duration-300`} />
                  <div
                    className={`h-full w-full bg-cover bg-center ${isMobile ? 'group-active:scale-105' : 'group-hover:scale-110'} transition-transform duration-700`}
                    style={{ backgroundImage: `url(/images/${project.image})` }}
                  />
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-b from-blue-600/70 to-blue-900/80 ${isMobile ? 'opacity-0 group-active:opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300 flex items-center justify-center gap-6`}
                  >
                    <motion.a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-blue-600 shadow-lg transform hover:scale-110 active:scale-110 transition-transform"
                      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                  </motion.div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 group-active:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <motion.span
                        key={techIdx}
                        className="bg-blue-50 text-blue-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm"
                        whileHover={{ scale: 1.05, backgroundColor: "#DBEAFE", boxShadow: "0 2px 5px rgba(59, 130, 246, 0.2)" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6 sm:mb-10">Other Noteworthy Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
            {[
              {
                title: 'Portfolio Website',
                description: 'Personal portfolio website showcasing projects and skills.',
                tech: ['React.js', 'Framer Motion', 'Tailwind CSS'],
                icon: <Code className="w-5 h-5" />,
                link: 'https://github.com/PAVAN-DEVMURARI/Portfolio'
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 sm:p-5 rounded-lg shadow-md overflow-hidden relative group"
                whileHover={isMobile ? {} : { y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseMove={(e) => !isMobile && setIsHovered({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => !isMobile && setIsHovered(null)}
              >
                <motion.div
                  className="absolute top-0 right-0 h-12 sm:h-16 w-12 sm:w-16 bg-blue-100 rounded-bl-full opacity-60 group-hover:bg-blue-200 group-active:bg-blue-200 transition-colors duration-300"
                  whileHover={{ rotate: 15 }}
                >
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 text-blue-600">{project.icon}</div>
                </motion.div>
                <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">{project.title}</h4>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tech.map((tech, techIdx) => (
                    <motion.span
                      key={techIdx}
                      className="bg-blue-50 text-blue-700 px-1.5 sm:px-2 py-0.5 rounded-full text-xs"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 active:text-blue-700 text-xs sm:text-sm font-medium"
                  whileHover={{ x: 5 }}
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  View Repository
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}