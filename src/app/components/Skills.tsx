// src/components/Skills.tsx
import { motion } from 'framer-motion';
import { useHover } from '../contexts/HoverContext';

export default function Skills() {
  const { setIsHovered } = useHover();

  const staggerChildren = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const skillItemHover = {
    rest: { scale: 1, backgroundColor: "rgba(239, 246, 255, 0)" },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(239, 246, 255, 1)",
      boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24 relative overflow-hidden">
      <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="section-heading text-center mb-16 text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[ 
            { title: 'Frontend', skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'] },
            { title: 'Backend', skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'] },
            { title: 'Tools', skills: ['Git', 'VS Code', 'Postman'] },
            { title: 'Other', skills: ['Data Structures', 'Algorithms', 'Problem Solving'] },
          ].map((category, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              className="skill-card group p-6 bg-white rounded-lg shadow-md transition-all duration-500"
              whileHover={{
                y: -15,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                background: "linear-gradient(to bottom right, white, #f0f9ff)"
              }}
            >
              <motion.h3
                className="text-xl font-semibold text-blue-700 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {category.title}
              </motion.h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.li
                    key={skillIdx}
                    className="flex items-center p-2 rounded-md transition-all duration-300"
                    initial="rest"
                    whileHover="hover"
                    variants={skillItemHover}
                    onMouseMove={(e) => setIsHovered({ x: e.clientX, y: e.clientY })}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <motion.div
                      className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span>{skill}</span>
                    <div className="relative ml-auto w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}