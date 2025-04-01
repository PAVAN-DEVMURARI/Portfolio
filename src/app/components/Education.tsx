// src/components/Education.tsx
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { useHover } from '../contexts/HoverContext';

export default function Education() {
  const { setIsHovered } = useHover();

  const staggerChildren = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delayChildren: 0.3, staggerChildren: 0.1 } }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="education" className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Fixed circle styles */}
      {[
        { width: 100, height: 100, left: '5%', top: '10%' },
        { width: 150, height: 150, left: '20%', top: '30%' },
        { width: 80, height: 80, left: '70%', top: '50%' },
      ].map((circle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-100 opacity-40"
          style={{
            width: circle.width,
            height: circle.height,
            left: circle.left,
            top: circle.top,
            borderRadius: '40%',
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="section-heading text-center mb-16 text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Education & Certifications
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto space-y-16"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="relative">
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-px bg-blue-200"
              style={{ left: '7px', height: '100%' }}
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />

            {[
              {
                period: '2023-2027',
                degree: 'B.Tech in Computer Science',
                institution: 'Charusat University, Gujarat',
                description: 'Currently pursuing my Bachelor\'s degree with a focus on advanced algorithms, web development, and software engineering practices.',
                courses: ['Data Structures & Algorithms', 'Database Management Systems', 'Web Technologies', 'Operating Systems']
              },
              {
                period: '2021-2023',
                degree: 'Higher Secondary Education',
                institution: 'Vidhyadhish Vidhyasankul, Gujarat',
                description: 'Completed my higher secondary education with 87%tile in PCM (Physics, Chemistry, Mathematics).',
                courses: ['Physics', 'Chemistry', 'Mathematics']
              }
            ].map((edu, index) => (
              <motion.div
                key={index}
                className="pl-10 relative mb-16 last:mb-0"
                variants={fadeUpVariants}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3 }}
                onMouseMove={(e) => setIsHovered({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setIsHovered(null)}
              >
                <motion.div
                  className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-blue-500"
                  whileHover={{ scale: 1.5, boxShadow: "0 0 0 8px rgba(59, 130, 246, 0.2)" }}
                  transition={{ duration: 0.4 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                />

                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-3">
                    {edu.period}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                  <p className="text-blue-600 font-medium mb-3">{edu.institution}</p>
                  <p className="text-gray-600 mb-4">{edu.description}</p>
                  <h4 className="font-medium text-gray-700 mb-2">Key Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, courseIdx) => (
                      <motion.span
                        key={courseIdx}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                        whileHover={{ scale: 1.05, backgroundColor: "#DBEAFE", boxShadow: "0 2px 5px rgba(59, 130, 246, 0.2)" }}
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">Certifications & Training</h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {[
                {
                  title: 'Fundamentals of Red Hat Enterprise Linux 9',
                  issuer: 'Coursera',
                  date: 'February 2025',
                  skills: ['Operating Systems', 'Linux', 'System Administration'],
                  credential: 'https://coursera.org/share/0018ea363e8d4bdbf22735c314aae3dd'
                },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md overflow-hidden relative group"
                  whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)", background: "linear-gradient(to bottom right, white, #f0f9ff)" }}
                  variants={fadeUpVariants}
                  onMouseMove={(e) => setIsHovered({ x: e.clientX, y: e.clientY })}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <motion.div
                    className="absolute top-0 right-0 w-16 h-16 bg-blue-500 rounded-bl-full opacity-0 group-hover:opacity-100"
                    whileHover={{ rotate: [0, 15, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Award className="absolute top-4 right-4 w-5 h-5 text-white" />
                  </motion.div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{cert.title}</h4>
                  <div className="flex items-center mb-3">
                    <Award className="w-4 h-4 text-blue-500 mr-2" />
                    <span className="text-blue-600 font-medium">{cert.issuer}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-500 text-sm">{cert.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIdx) => (
                      <motion.span
                        key={skillIdx}
                        className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                  <motion.a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Credential
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}