import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, Download } from 'lucide-react'

const Footer = () => {

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/salman-itspecialist',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/salman-itpro',
      label: 'GitHub'
    },
    {
      icon: Mail,
      href: 'mailto:salman.itspecialist@gmail.com',
      label: 'Email'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about-me' },
    { name: 'Key Highlights', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-max section-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">SA</span>
              </div>
              <span className="text-2xl font-bold">Salman Ahmed</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              IT Support Specialist with expertise in network security, virtualization, and systems administration.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 text-sm">Email</p>
                <a 
                  href="mailto:salman.itspecialist@gmail.com"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                >
                  salman.itspecialist@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Location</p>
                <p className="text-gray-300">Islamabad, Pakistan</p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Status</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">Open to work</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Download my resume to learn more about my experience and qualifications. 
            I&apos;m excited to discuss how I can help optimize your IT infrastructure.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Salman Ahmed. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in Pakistan</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
