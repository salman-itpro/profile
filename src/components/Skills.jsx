import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Shield, 
  Network, 
  Server, 
  Cloud, 
  Settings,
  Database,
  Lock,
  Users
} from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Security', 'Infrastructure', 'Support', 'Cloud', 'Management']

  const skillCategories = [
    {
      title: 'Network Security & Firewalls',
      icon: Shield,
      category: 'Security',
      level: 'Expert',
      skills: [
        { name: 'FortiGate Firewall', level: 95, description: 'Advanced configuration, VPN setup, threat management' },
        { name: 'Sophos UTM', level: 90, description: 'Unified threat management, web filtering, email security' },
        { name: 'pfSense', level: 85, description: 'Open-source firewall, VPN, traffic shaping' },
        { name: 'VPN Technologies', level: 90, description: 'Site-to-site, remote access, SSL VPN' },
        { name: 'Network Segmentation', level: 88, description: 'VLANs, subnetting, access control' }
      ]
    },
    {
      title: 'Virtualization & Infrastructure',
      icon: Server,
      category: 'Infrastructure',
      level: 'Advanced',
      skills: [
        { name: 'VMware ESXi', level: 92, description: 'Host management, vCenter, resource optimization' },
        { name: 'Veeam Backup & Replication', level: 88, description: 'Backup strategies, disaster recovery, replication' },
        { name: 'Hyper-V', level: 80, description: 'Virtual machine management, clustering' },
        { name: 'RAID Configuration', level: 85, description: 'Hardware RAID, software RAID, data protection' },
        { name: 'Storage Management', level: 82, description: 'SAN, NAS, storage optimization' }
      ]
    },
    {
      title: 'IT Support & Troubleshooting',
      icon: Users,
      category: 'Support',
      level: 'Expert',
      skills: [
        { name: 'Windows Server Administration', level: 90, description: 'Active Directory, Group Policy, DNS, DHCP' },
        { name: 'Linux System Administration', level: 85, description: 'Ubuntu, CentOS, shell scripting, package management' },
        { name: 'macOS Support', level: 88, description: 'Enterprise deployment, security, troubleshooting' },
        { name: 'Hardware Troubleshooting', level: 92, description: 'Diagnostics, repair, component replacement' },
        { name: 'Software Deployment', level: 87, description: 'MSI packages, silent installs, updates' }
      ]
    },
    {
      title: 'Network Infrastructure',
      icon: Network,
      category: 'Infrastructure',
      level: 'Advanced',
      skills: [
        { name: 'TCP/IP Networking', level: 90, description: 'Protocols, routing, switching fundamentals' },
        { name: 'Wireless Networks', level: 88, description: 'UniFi, Cisco access points, WLAN optimization' },
        { name: 'Network Monitoring', level: 85, description: 'LibreNMS, SNMP, performance monitoring' },
        { name: 'LACP & Bonding', level: 82, description: 'Link aggregation, redundancy, load balancing' },
        { name: 'DNS & DHCP Management', level: 90, description: 'Domain resolution, IP allocation, DNS records' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      category: 'Cloud',
      level: 'Intermediate',
      skills: [
        { name: 'Microsoft Azure', level: 75, description: 'Virtual machines, networking, security groups' },
        { name: 'AWS Fundamentals', level: 70, description: 'EC2, VPC, IAM, basic services' },
        { name: 'Docker Basics', level: 65, description: 'Containerization, Docker Compose, basic orchestration' },
        { name: 'CI/CD Pipelines', level: 60, description: 'GitHub Actions, automated deployments' },
        { name: 'Infrastructure as Code', level: 55, description: 'Terraform basics, resource provisioning' }
      ]
    },
    {
      title: 'IT Management & Tools',
      icon: Settings,
      category: 'Management',
      level: 'Advanced',
      skills: [
        { name: 'Active Directory', level: 90, description: 'User management, group policies, security' },
        { name: 'Lansweeper Asset Management', level: 85, description: 'IT asset tracking, inventory management' },
        { name: 'Freshservice ITSM', level: 88, description: 'Ticket management, service catalog, workflows' },
        { name: 'IT Documentation', level: 92, description: 'Network diagrams, procedures, knowledge base' },
        { name: 'Project Management', level: 80, description: 'IT projects, timelines, resource planning' }
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      category: 'Infrastructure',
      level: 'Intermediate',
      skills: [
        { name: 'SQL Server', level: 75, description: 'Database administration, backup, maintenance' },
        { name: 'MySQL', level: 70, description: 'Database design, queries, optimization' },
        { name: 'Backup Solutions', level: 85, description: 'Veeam, Windows Backup, cloud backups' },
        { name: 'Data Recovery', level: 80, description: 'File recovery, system restore, disaster recovery' }
      ]
    },
    {
      title: 'Security & Compliance',
      icon: Lock,
      category: 'Security',
      level: 'Advanced',
      skills: [
        { name: 'Endpoint Security', level: 88, description: 'Antivirus, EDR, device encryption' },
        { name: 'Email Security', level: 85, description: 'Spam filtering, phishing protection, DLP' },
        { name: 'Access Control', level: 90, description: 'RBAC, MFA, privileged access management' },
        { name: 'Security Auditing', level: 82, description: 'Compliance checks, vulnerability assessments' }
      ]
    }
  ]

  const filteredSkills = activeFilter === 'All' 
    ? skillCategories 
    : skillCategories.filter(skill => skill.category === activeFilter)

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-black dark:text-white leading-relaxed">
            Comprehensive expertise across IT infrastructure, security, and support technologies
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredSkills.map((category, index) => (
              <motion.div
                key={`${activeFilter}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Skill Category Header */}
                <div className="h-32 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-primary-800 dark:text-primary-200">{category.title}</h3>
                  </div>
                  {/* Level Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      category.level === 'Expert' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200'
                        : category.level === 'Advanced'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200'
                    }`}>
                      {category.level}
                    </span>
                  </div>
                </div>

                {/* Skills Content */}
                <div className="p-6">
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-black dark:text-white group-hover/skill:text-primary-600 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.1) + 0.5 }}
                            className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                          />
                        </div>
                        
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {skill.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Professional Expertise</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                With over two years of hands-on experience, I bring comprehensive knowledge 
                in IT infrastructure management, network security, and user support.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">3+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">150+</div>
                <div className="text-sm opacity-90">Users Supported</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">30+</div>
                <div className="text-sm opacity-90">Access Points Managed</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">8</div>
                <div className="text-sm opacity-90">Skill Categories</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
