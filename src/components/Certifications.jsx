import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, ExternalLink, CheckCircle } from 'lucide-react'

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const certifications = [
    {
      title: 'CCNA: Introduction to Networks',
      issuer: 'Cisco',
      level: 'Foundation',
      description: 'Fundamental networking concepts, protocols, and technologies',
      skills: ['Network Fundamentals', 'IP Addressing', 'Subnetting', 'OSI Model'],
      badge: 'https://images.credly.com/images/00634f82-b07f-4bbd-a85bb-c65351e202bd/CCNAITN-600x600.png',
      verifyUrl: 'https://www.credly.com/badges/ccna-introduction-to-networks',
      date: '2023'
    },
    {
      title: 'CCNA: Switching, Routing, and Wireless Essentials',
      issuer: 'Cisco',
      level: 'Intermediate',
      description: 'Advanced switching, routing protocols, and wireless technologies',
      skills: ['VLANs', 'STP', 'EIGRP', 'OSPF', 'Wireless Networks'],
      badge: 'https://images.credly.com/images/00634f82-b07f-4bbd-a85bb-c65351e202bd/CCNASRWE-600x600.png',
      verifyUrl: 'https://www.credly.com/badges/ccna-switching-routing-wireless',
      date: '2023'
    },
    {
      title: 'CCNA: Enterprise Networking, Security, and Automation',
      issuer: 'Cisco',
      level: 'Advanced',
      description: 'Enterprise networking, security, and network automation',
      skills: ['Enterprise Networks', 'Network Security', 'Automation', 'SDN'],
      badge: 'https://images.credly.com/images/00634f82-b07f-4bbd-a85bb-c65351e202bd/CCNAENSA-600x600.png',
      verifyUrl: 'https://www.credly.com/badges/ccna-enterprise-networking-security',
      date: '2024'
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      level: 'Foundation',
      description: 'Cybersecurity fundamentals and best practices',
      skills: ['Security Fundamentals', 'Threat Analysis', 'Risk Management', 'Security Policies'],
      badge: 'https://images.credly.com/images/00634f82-b07f-4bbd-a85bb-c65351e202bd/IntroCybersecurity-600x600.png',
      verifyUrl: 'https://www.credly.com/badges/introduction-to-cybersecurity',
      date: '2023'
    }
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case 'Foundation':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200'
      case 'Intermediate':
        return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200'
      case 'Advanced':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
    }
  }

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
            <span className="gradient-text">Certifications</span> & Badges
          </h2>
          <p className="text-xl text-black dark:text-white leading-relaxed">
            Professional certifications demonstrating expertise in networking and cybersecurity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
            >
              {/* Badge and Header */}
              <div className="flex items-start space-x-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-10 h-10 text-primary-600 dark:text-primary-300" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(cert.level)}`}>
                      {cert.level}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Button */}
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors group"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Verify Badge</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Certifications Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-lg opacity-90 leading-relaxed mb-8">
              I am committed to staying current with the latest technologies and best practices in IT. 
              These certifications represent my dedication to professional development and expertise in 
              networking and cybersecurity.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="text-sm opacity-90">Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">3</div>
                <div className="text-sm opacity-90">CCNA Modules</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1</div>
                <div className="text-sm opacity-90">Cybersecurity</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Verified</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
