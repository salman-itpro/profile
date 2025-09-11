import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Server, Users, Zap } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: Shield,
      title: '🔐 Network Security',
      description: 'FortiGate & Sophos firewall administration'
    },
    {
      icon: Server,
      title: '💻 Virtualization',
      description: 'VMware ESXi & Veeam Backup/Replication'
    },
    {
      icon: Users,
      title: '👥 User Support',
      description: 'Supporting 150+ employees across Windows, Linux & macOS'
    },
    {
      icon: Zap,
      title: '⚙️ Infrastructure Optimization',
      description: 'VLANs, LACP, RAID, VPNs'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
            Key <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-xl text-black dark:text-white leading-relaxed">
            I am an IT Support Specialist with over two years of experience in firewall administration, 
            virtualization, and network security. Skilled in managing IT infrastructure, troubleshooting, 
            and end-user support for large organizations. Passionate about strengthening system performance 
            and reliability while staying up to date with evolving technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-black dark:text-white leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-black dark:text-black mb-6 text-center">
              My Mission
            </h3>
            <p className="text-lg text-black dark:text-black leading-relaxed text-center">
              I am skilled in firewall administration, VPN deployment, VLAN segmentation, and enterprise identity management. 
              With experience in virtualization, backup, and disaster recovery, I focus on secure and efficient IT operations. 
              My goal is to continuously learn and apply modern IT practices to deliver reliable and scalable solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
