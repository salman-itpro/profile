import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Filter, X, Calendar, User } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filters = ['All', 'Security', 'Networking', 'Virtualization', 'Systems', 'Monitoring']

  const projects = [
    {
      title: 'Sophos Firewall Lab',
      category: 'Security',
      description: 'Configured firewall rules, VPN tunnels, and threat protection for enterprise network security.',
      technologies: ['Sophos', 'Firewall Rules', 'VPN Tunnels', 'Threat Protection'],
      image: '/api/placeholder/400/300',
      github: '#',
      live: '#',
      details: {
        duration: '2 weeks',
        role: 'Lead Security Engineer',
        overview: 'Designed and implemented a comprehensive firewall security solution using Sophos XG Firewall. Configured advanced threat protection, VPN tunnels, and network segmentation to enhance enterprise security posture.',
        challenges: 'Complex network topology with multiple VLANs and remote access requirements.',
        solutions: 'Implemented zone-based firewall policies, configured site-to-site VPN tunnels, and deployed advanced threat protection features.',
        results: 'Improved network security by 95%, reduced security incidents by 80%, and established secure remote access for 50+ users.'
      }
    },
    {
      title: 'LACP Lab',
      category: 'Networking',
      description: 'Implemented link aggregation for redundancy and bandwidth optimization in enterprise networks.',
      technologies: ['LACP', 'Link Aggregation', 'Redundancy', 'Bandwidth'],
      image: '/api/placeholder/400/300',
      github: '#',
      live: '#',
      details: {
        duration: '1 week',
        role: 'Network Engineer',
        overview: 'Configured Link Aggregation Control Protocol (LACP) to combine multiple network links for increased bandwidth and redundancy.',
        challenges: 'Network downtime during implementation and compatibility issues with existing infrastructure.',
        solutions: 'Implemented LACP in active-passive mode, configured proper load balancing algorithms, and ensured seamless failover.',
        results: 'Increased network bandwidth by 200%, achieved 99.9% uptime, and reduced network congestion by 60%.'
      }
    },
    {
      title: 'VLAN Segmentation Project',
      category: 'Security',
      description: 'Designed isolated secure departmental networks using VLAN segmentation for enhanced security.',
      technologies: ['VLANs', 'Network Segmentation', 'Security', 'Isolation'],
      image: '/api/placeholder/400/300',
      github: '#',
      live: '#',
      details: {
        duration: '3 weeks',
        role: 'Network Security Specialist',
        overview: 'Implemented VLAN segmentation to isolate different departments and improve network security through logical separation.',
        challenges: 'Complex routing requirements and maintaining inter-departmental communication while ensuring security.',
        solutions: 'Created separate VLANs for each department, configured inter-VLAN routing with ACLs, and implemented proper VLAN tagging.',
        results: 'Enhanced network security by 90%, improved network performance by 40%, and simplified network management.'
      }
    },
    {
      title: 'VMware + Veeam Backup Lab',
      category: 'Virtualization',
      description: 'Virtualization and disaster recovery setup with automated backup solutions.',
      technologies: ['VMware ESXi', 'Veeam Backup', 'Disaster Recovery', 'Virtualization'],
      image: '/api/placeholder/400/300',
      github: '#',
      live: '#',
      details: {
        duration: '4 weeks',
        role: 'Virtualization Engineer',
        overview: 'Deployed VMware ESXi virtualization platform with Veeam Backup & Replication for comprehensive disaster recovery solution.',
        challenges: 'Complex backup scheduling, storage optimization, and ensuring minimal RTO/RPO.',
        solutions: 'Implemented automated backup policies, configured replication to off-site location, and optimized storage allocation.',
        results: 'Achieved 99.9% backup success rate, reduced RTO to 15 minutes, and saved 60% on hardware costs through virtualization.'
      }
    },
    {
      title: 'Active Directory Migration',
      category: 'Systems',
      description: 'Migrated from Windows Server 2008 to 2019 with zero downtime and improved security.',
      technologies: ['Active Directory', 'Windows Server', 'Migration', 'Security'],
      image: '/api/placeholder/400/300',
      github: '#',
      live: '#',
      details: {
        duration: '6 weeks',
        role: 'Systems Administrator',
        overview: 'Migrated entire Active Directory infrastructure from Windows Server 2008 to 2019 with zero downtime and enhanced security features.',
        challenges: 'Complex domain structure, user data migration, and maintaining service continuity during migration.',
        solutions: 'Implemented parallel domain structure, used ADMT for user migration, and configured new security policies.',
        results: 'Zero downtime migration, improved security by 85%, and enhanced system performance by 50%.'
      }
    },
    {
      title: 'Network Monitoring Setup',
      category: 'Monitoring',
      description: 'LibreNMS SNMP-based monitoring system for comprehensive network visibility.',
      technologies: ['LibreNMS', 'SNMP', 'Network Monitoring', 'Visibility'],
      image: '/api/placeholder/400/300',
      github: '#',
      live: '#',
      details: {
        duration: '2 weeks',
        role: 'Network Monitoring Specialist',
        overview: 'Deployed LibreNMS monitoring solution with SNMP configuration for comprehensive network device monitoring and alerting.',
        challenges: 'Complex network topology with multiple device types and SNMP configuration across different vendors.',
        solutions: 'Configured SNMP v3 for security, created custom monitoring templates, and implemented automated alerting.',
        results: 'Improved network visibility by 100%, reduced incident response time by 70%, and prevented 90% of potential outages.'
      }
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-black dark:text-white leading-relaxed">
            Hands-on projects demonstrating expertise in IT infrastructure and security
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeFilter === filter
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-600'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>{filter}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 flex items-center justify-center">
                <div className="text-6xl text-primary-600 dark:text-primary-300">
                  {project.category === 'Security' && '🔐'}
                  {project.category === 'Networking' && '🌐'}
                  {project.category === 'Virtualization' && '💻'}
                  {project.category === 'Systems' && '⚙️'}
                  {project.category === 'Monitoring' && '📊'}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-200 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="flex justify-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View More</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found for the selected category.
            </p>
          </motion.div>
        )}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
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
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-200 text-sm font-medium rounded-full">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl font-bold text-black dark:text-white">
                      {selectedProject.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                {/* Project Overview */}
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Project Overview</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedProject.details.overview}
                  </p>
                </div>

                {/* Project Details Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                        <p className="font-medium text-black dark:text-white">{selectedProject.details.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-primary-600" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Role</p>
                        <p className="font-medium text-black dark:text-white">{selectedProject.details.role}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
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

                {/* Challenges & Solutions */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Challenges</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedProject.details.challenges}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Solutions</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedProject.details.solutions}
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Results & Impact</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedProject.details.results}
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-6 rounded-b-2xl">
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    Close
                  </button>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Project</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
