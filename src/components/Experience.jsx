import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Building2, CheckCircle, X, Users, Award } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedExperience, setSelectedExperience] = useState(null)

  const experiences = [
    {
      company: 'Futurenostics',
      position: 'IT Support Associate',
      location: 'Islamabad, Pakistan',
      duration: 'May 2025 - Present',
      type: 'Current',
      achievements: [
        'Administered and managed FortiGate firewalls to enhance network security and compliance',
        'Configured and maintained VPN servers for secure remote access, ensuring uninterrupted remote operations',
        'Managed 5 VMware ESXi hosts to support diverse virtualized environments',
        'Provided technical support to 120+ employees, resolving issues for Windows, macOS, and Linux users both on-site and remotely',
        'Implemented and managed Veeam Backup & Replication for robust data protection and disaster recovery',
        'Deployed and maintained Ubiquiti UniFi and Cisco access points to ensure reliable network connectivity',
        'Configured VLANs and LACP for enhanced network segmentation and redundancy',
        'Implemented RAID storage solutions for critical data protection'
      ],
      details: {
        overview: 'Leading IT infrastructure management and support operations for a growing technology company. Responsible for maintaining enterprise-level security, virtualization, and network infrastructure while providing comprehensive technical support to a diverse user base.',
        keyResponsibilities: [
          'Network Security Management',
          'Virtualization Infrastructure',
          'User Support & Training',
          'Backup & Disaster Recovery',
          'Network Infrastructure',
          'System Administration'
        ],
        technologies: ['FortiGate', 'VMware ESXi', 'Veeam Backup', 'UniFi', 'Cisco', 'Windows Server', 'Linux', 'macOS'],
        impact: 'Improved network security by 90%, reduced system downtime by 75%, and enhanced user satisfaction scores by 85%. Successfully managed infrastructure supporting 120+ users with 99.9% uptime.',
        teamSize: '5 team members',
        reportingTo: 'IT Manager'
      }
    },
    {
      company: 'Focus IT Services',
      position: 'IT Support Specialist',
      location: 'Islamabad, Pakistan',
      duration: 'Dec 2024 - May 2025',
      type: 'Previous',
      achievements: [
        'Administered FortiGate & Sophos firewalls for improved network security and remote connectivity',
        'Managed Active Directory & File Servers to enhance user authentication and secure data access',
        'Configured VLANs and LACP to optimize network segmentation and redundancy',
        'Implemented RAID storage solutions to ensure data protection',
        'Provided technical support to 150+ employees through a ticketing system, improving resolution times',
        'Maintained VMware ESXi hosts for virtualization and deployed Veeam Backup & Replication for disaster recovery',
        'Monitored networks using LibreNMS and tracked IT assets with Lansweeper & Freshservice'
      ],
      details: {
        overview: 'Specialized in enterprise IT support and infrastructure management for a leading IT services company. Focused on network security, virtualization, and comprehensive user support across multiple client organizations.',
        keyResponsibilities: [
          'Firewall Administration',
          'Active Directory Management',
          'Network Monitoring',
          'Asset Management',
          'User Support',
          'Virtualization Support'
        ],
        technologies: ['FortiGate', 'Sophos', 'Active Directory', 'VMware ESXi', 'Veeam', 'LibreNMS', 'Lansweeper', 'Freshservice'],
        impact: 'Reduced ticket resolution time by 60%, improved network performance by 45%, and maintained 99.8% system availability across all client environments.',
        teamSize: '8 team members',
        reportingTo: 'Senior IT Manager'
      }
    },
    {
      company: 'Foundation University',
      position: 'IT Technician',
      location: 'Islamabad, Pakistan',
      duration: 'Jan 2022 - Jan 2023',
      type: 'Previous',
      achievements: [
        'Managed internet access and bandwidth control using Sangfor IAM for optimal network efficiency',
        'Configured and maintained 30+ access points and routers, ensuring strong connectivity',
        'Provided on-site and remote IT support, resolving technical issues efficiently',
        'Installed and maintained IT hardware/software for labs, faculty, and staff',
        'Supported A/V equipment in lecture halls and conducted workshops and online meetings (Teams, Zoom)',
        'Managed IT inventory and facilitated procurement requests',
        'Trained and mentored junior staff, boosting team performance'
      ],
      details: {
        overview: 'Provided comprehensive IT support and infrastructure management for a university environment. Managed network infrastructure, supported educational technology, and ensured reliable IT services for faculty, staff, and students.',
        keyResponsibilities: [
          'Network Infrastructure Management',
          'Educational Technology Support',
          'Hardware & Software Maintenance',
          'User Training & Support',
          'Inventory Management',
          'A/V System Support'
        ],
        technologies: ['Sangfor IAM', 'Cisco', 'Windows', 'Linux', 'Microsoft Teams', 'Zoom', 'A/V Systems'],
        impact: 'Improved network reliability by 80%, reduced support tickets by 50%, and enhanced user satisfaction in educational technology services.',
        teamSize: '3 team members',
        reportingTo: 'IT Director'
      }
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-black dark:text-white leading-relaxed">
            My professional journey in IT support and infrastructure management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedExperience(exp)}
            >
              {/* Experience Header */}
              <div className="h-32 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-lg font-bold text-primary-800 dark:text-primary-200">{exp.company}</span>
                    {exp.type === 'Current' && (
                      <span className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200 text-xs font-medium px-2 py-1 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Experience Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
                  {exp.position}
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-black dark:text-white">{exp.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-primary-600">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium text-black dark:text-white">{exp.duration}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.slice(0, 4).map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (achIndex * 0.05) }}
                        className="flex items-start space-x-2"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-black dark:text-white leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="mt-4 text-center">
                    <button className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Details Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedExperience(null)}
          >
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                      selectedExperience.type === 'Current' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200' 
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                    }`}>
                      {selectedExperience.type}
                    </span>
                    <div>
                      <h2 className="text-2xl font-bold text-black dark:text-white">
                        {selectedExperience.position}
                      </h2>
                      <p className="text-lg text-primary-600 dark:text-primary-400">
                        {selectedExperience.company}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedExperience(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                {/* Job Overview */}
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Job Overview</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedExperience.details.overview}
                  </p>
                </div>

                {/* Job Details Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                        <p className="font-medium text-black dark:text-white">{selectedExperience.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary-600" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                        <p className="font-medium text-black dark:text-white">{selectedExperience.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary-600" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Team Size</p>
                        <p className="font-medium text-black dark:text-white">{selectedExperience.details.teamSize}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-primary-600" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Reporting To</p>
                        <p className="font-medium text-black dark:text-white">{selectedExperience.details.reportingTo}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.details.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div>
                  <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Key Responsibilities</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedExperience.details.keyResponsibilities.map((responsibility, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{responsibility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* All Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-black dark:text-white mb-3">All Achievements</h4>
                  <ul className="space-y-3">
                    {selectedExperience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact & Results */}
                <div>
                  <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Impact & Results</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedExperience.details.impact}
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-6 rounded-b-2xl">
                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedExperience(null)}
                    className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Experience
