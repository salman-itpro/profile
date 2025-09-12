import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Virtual University of Pakistan',
      location: 'Islamabad, Pakistan',
      duration: 'Sep 2023 - Present',
      status: 'In Progress',
      description: 'Pursuing advanced studies in Information Technology with focus on modern computing systems and network technologies.'
    },
    {
      degree: 'Diploma Associate Engineering in Information & Communication Technology',
      institution: 'Construction Technology And Training Institute',
      location: 'Islamabad, Pakistan',
      duration: 'Sep 2019 - Sep 2022',
      status: 'Completed',
      description: 'Comprehensive technical education covering networking, programming, and communication technologies.'
    },
    {
      degree: 'Matriculation in Computer Science',
      institution: 'Progressive Model School',
      location: 'Islamabad, Pakistan',
      duration: '2017 - 2019',
      status: 'Completed',
      description: 'Foundation education in computer science and basic programming concepts.'
    }
  ]

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Enhanced transition from grid to blur */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Fade in grid at top with dissolve effect */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-gray-50 via-gray-50/90 via-gray-50/60 to-transparent dark:from-gray-900 dark:via-gray-900/90 dark:via-gray-900/60 dark:to-transparent pointer-events-none transition-dissolve">
          <div className="absolute inset-0 opacity-15 dark:opacity-10 blur-sm">
            <div className="grid-lines-horizontal"></div>
            <div className="grid-lines-vertical"></div>
          </div>
        </div>
        
        {/* Main blur effect with smooth scaling */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-transparent to-purple-50/30 dark:from-indigo-900/20 dark:via-transparent dark:to-purple-900/20 blur-3xl transition-smooth"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200/20 dark:bg-indigo-800/20 rounded-full blur-3xl transition-smooth scale-in"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-3xl transition-smooth scale-in"></div>
        
        {/* Fade out grid at bottom with dissolve effect */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/90 via-white/60 to-transparent dark:from-gray-800 dark:via-gray-800/90 dark:via-gray-800/60 dark:to-transparent pointer-events-none transition-dissolve">
          <div className="absolute inset-0 opacity-15 dark:opacity-10 blur-sm">
            <div className="grid-lines-horizontal"></div>
            <div className="grid-lines-vertical"></div>
          </div>
        </div>
      </div>
      
      <div className="container-max section-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
            <span className="gradient-text">Education</span> <span className="text-black dark:text-white">& Qualifications</span>
          </h2>
          <p className="text-xl text-black dark:text-white leading-relaxed">
            My academic journey and continuous learning in Information Technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Education Header */}
              <div className="h-32 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    edu.status === 'In Progress' 
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200' 
                      : 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200'
                  }`}>
                    {edu.status}
                  </span>
                </div>
              </div>

              {/* Education Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
                  {edu.degree}
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <Award className="w-4 h-4" />
                    <span className="font-semibold text-black dark:text-white">{edu.institution}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-black dark:text-white">{edu.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400">
                    <Calendar className="w-4 h-4" />
                    <span className="font-semibold text-black dark:text-white bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded-md">{edu.duration}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Learning */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              I believe in staying updated with the latest technologies and best practices in IT. 
              I regularly participate in online courses, certifications, and industry workshops to 
              enhance my skills and provide the best possible support to organizations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
