// src/components/Achievements.tsx
import { motion } from 'framer-motion';
import { Trophy, User, ArrowRight } from 'lucide-react';
import { useHover } from '../contexts/HoverContext';

export default function Achievements() {
  const { setIsHovered } = useHover();

  const staggerChildren = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delayChildren: 0.3, staggerChildren: 0.1 } }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const achievementCardHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="trophy-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 0L20 0L20 20L0 20Z" fill="none" stroke="#3B82F6" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#trophy-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="section-heading text-center mb-16 text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Achievements & Coding Profiles
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            {
              title: 'Odoo X MSU Hackathon 2025',
              description: 'Selected in the final top 50 teams among the total of 200+ teams.',
              icon: <Trophy className="w-6 h-6" />,
              color: 'from-amber-400 to-amber-600',
              link: 'https://www.odoo.com/event/odooxfootprints2025-6888/register'
            },
          ].map((achievement, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={fadeUpVariants}
              initial="rest"
              whileHover="hover"
              onMouseMove={(e) => setIsHovered({ x: e.clientX, y: e.clientY })}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg relative z-10 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${achievement.color} text-white shadow-lg`}>
                    {achievement.icon}
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-800">{achievement.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 flex-grow">{achievement.description}</p>
                <motion.a
                  href={achievement.link}
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center self-start"
                  whileHover={{ x: 5 }}
                >
                  Learn more
                  <motion.span
                    className="ml-1"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">Competitive Programming Profiles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                platform: 'CodeChef',
                username: 'pavan_5905',
                rating: '2★ (1410)',
                problems: '200+',
                contests: '10+',
                color: 'from-amber-500 to-amber-700',
                link: 'https://www.codechef.com/users/pavan_5905'
              },
              {
                platform: 'Codeforces',
                username: 'Pavan__05',
                rating: 'Newbie (890)',
                problems: '180+',
                contests: '10+',
                color: 'from-blue-500 to-blue-700',
                link: 'https://codeforces.com/profile/Pavan__05'
              },
            ].map((profile, index) => (
              <motion.a
                key={index}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-md overflow-hidden relative group"
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)", background: "linear-gradient(to bottom right, white, #f0f9ff)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseMove={(e) => setIsHovered({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${profile.color}`}></div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{profile.platform}</h4>
                <div className="flex items-center mb-3">
                  <User className="w-4 h-4 text-blue-500 mr-2" />
                  <span className="text-blue-600 font-medium">{profile.username}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-blue-50 p-2 rounded-lg text-center">
                    <p className="text-xs text-gray-500">Rating</p>
                    <p className="text-sm font-medium text-blue-700">{profile.rating}</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg text-center">
                    <p className="text-xs text-gray-500">Problems</p>
                    <p className="text-sm font-medium text-blue-700">{profile.problems}</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg text-center">
                    <p className="text-xs text-gray-500">Contests</p>
                    <p className="text-sm font-medium text-blue-700">{profile.contests}</p>
                  </div>
                </div>
                <motion.div
                  className="flex items-center text-blue-600 text-sm font-medium"
                  whileHover={{ x: 5 }}
                >
                  View Profile
                  <ArrowRight className="w-4 h-4 ml-1" />
                </motion.div>
                <motion.div
                  className="absolute bottom-0 right-0 w-16 h-16 bg-blue-50 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ rotate: -15 }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}