import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Download, ExternalLink, Copy, Check } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'salman.itspecialist@gmail.com',
      link: 'mailto:salman.itspecialist@gmail.com',
      copyable: true
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+92 300 123 4567',
      link: 'tel:+923001234567',
      copyable: true
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Islamabad, Pakistan',
      link: '#',
      copyable: false
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-black dark:text-white leading-relaxed">
            Ready to discuss your IT infrastructure needs? Let&apos;s connect!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Let&apos;s Connect</h3>
            <p className="text-xl text-black dark:text-white leading-relaxed max-w-3xl mx-auto">
              I&apos;m always interested in new opportunities and exciting projects. 
              Whether you need IT support, infrastructure optimization, or have questions 
              about my services, feel free to reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-black dark:text-white mb-2">{info.title}</h4>
                <div className="flex items-center justify-center space-x-2">
                  <a 
                    href={info.link}
                    className="text-black dark:text-white hover:text-primary-600 transition-colors"
                  >
                    {info.value}
                  </a>
                  {info.copyable && (
                    <button
                      onClick={() => copyToClipboard(info.value)}
                      className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                      title="Copy to clipboard"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-500" />
                      )}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.a
              href="mailto:salman.itspecialist@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white px-8 py-4 rounded-full font-medium hover:bg-primary-700 transition-colors duration-200 text-center flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Let&apos;s Connect</span>
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-medium hover:bg-primary-50 transition-colors duration-200 text-center flex items-center justify-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/salman-itspecialist"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 px-8 py-4 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-center flex items-center justify-center space-x-2"
            >
              <ExternalLink className="w-5 h-5" />
              <span>LinkedIn</span>
            </motion.a>
          </motion.div>

          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 lg:p-12 text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h4 className="text-2xl font-bold text-green-800 dark:text-green-400">Open to Work</h4>
            </div>
            <p className="text-lg text-green-700 dark:text-green-300 leading-relaxed max-w-2xl mx-auto">
              Currently open to new opportunities and ready to start immediately. 
              I&apos;m excited to bring my IT expertise to your organization!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
