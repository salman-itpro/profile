import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AboutMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="about-me" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-black dark:text-white leading-relaxed">
            My professional journey and personal approach to IT support and infrastructure management
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 lg:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                  Professional Background
                </h3>
                <p className="text-black dark:text-white leading-relaxed mb-6">
                  I am an IT Support Specialist with over Three years of experience in firewall administration, 
                  virtualization, and network security. Skilled in managing IT infrastructure, troubleshooting, 
                  and end-user support for large organizations. Passionate about strengthening system performance 
                  and reliability while staying up to date with evolving technologies.
                </p>
                <p className="text-black dark:text-white leading-relaxed">
                  My journey in IT began with a strong foundation in computer science and has evolved through 
                  hands-on experience with enterprise-level systems. I specialize in creating secure, efficient, 
                  and scalable IT solutions that support business growth and operational excellence.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900 dark:to-blue-900 rounded-xl p-8">
                <h4 className="text-xl font-bold text-black dark:text-white mb-4">
                  My Mission
                </h4>
                <p className="text-black dark:text-white leading-relaxed">
                  I am skilled in firewall administration, VPN deployment, VLAN segmentation, and enterprise identity management. 
                  With experience in virtualization, backup, and disaster recovery, I focus on secure and efficient IT operations. 
                  My goal is to continuously learn and apply modern IT practices to deliver reliable and scalable solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
