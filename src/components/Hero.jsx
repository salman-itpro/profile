import React, { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { MapPin, ExternalLink, Github, Linkedin, Mail, FileText, Download } from 'lucide-react'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  
  const roles = useMemo(() => [
    "IT Support Specialist",
    "Network Security Specialist", 
    "Firewall & VPN Specialist",
    "Virtualization & Backup Specialist",
    "Systems & Infrastructure Administrator"
  ], [])

  useEffect(() => {
    const currentText = roles[currentRole]
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, 1150) // Pause for 1.15 seconds
      return () => clearTimeout(pauseTimer)
    }

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentText.length) {
        // Typing
        setDisplayedText(currentText.slice(0, displayedText.length + 1))
      } else if (isDeleting && displayedText.length > 0) {
        // Deleting
        setDisplayedText(displayedText.slice(0, -1))
      } else if (isDeleting && displayedText.length === 0) {
        // Move to next role
        setIsDeleting(false)
        setCurrentRole((prev) => (prev + 1) % roles.length)
      } else if (!isDeleting && displayedText.length === currentText.length) {
        // Start pause
        setIsPaused(true)
      }
    }, isDeleting ? 30 : 60) // Faster deleting and typing

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, isPaused, currentRole, roles])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      
      {/* Cyber Grid Network Animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Main grid lines with smooth transition */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20 blur-sm transition-smooth">
          <div className="grid-lines-horizontal"></div>
          <div className="grid-lines-vertical"></div>
        </div>
        
        {/* Enhanced fade out gradient with dissolve effect */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-50 via-slate-50/90 via-slate-50/60 to-transparent dark:from-gray-900 dark:via-gray-900/90 dark:via-gray-900/60 dark:to-transparent pointer-events-none transition-dissolve">
          {/* Subtle grid fade overlay */}
          <div className="absolute inset-0 opacity-10 dark:opacity-5">
            <div className="grid-lines-horizontal"></div>
            <div className="grid-lines-vertical"></div>
          </div>
        </div>
      </div>
      
      <div className="container-max section-padding relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Open to work</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">Salman Ahmed</span>
            </motion.h1>

            {/* Subtitle with typing animation */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl lg:text-3xl text-black dark:text-white font-medium min-h-[3rem] flex items-center"
            >
              <span className="text-primary-600 dark:text-white">
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  className="text-primary-600 dark:text-white"
                >
                  |
                </motion.span>
              </span>
            </motion.h2>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center space-x-2 text-black dark:text-white"
            >
              <MapPin className="w-5 h-5" />
              <span>Islamabad, Pakistan</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-black dark:text-white leading-relaxed"
            >
              Optimizing IT infrastructure and security to deliver reliable, future-ready solutions.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center space-x-4"
            >
              <a
                href="https://www.linkedin.com/in/salman-itspecialist"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="w-6 h-6 text-primary-600" />
              </a>
              <a
                href="https://github.com/salman-itpro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="w-6 h-6 text-dark-700" />
              </a>
              <button
                onClick={() => {
                  // Check if mobile device
                  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                  
                  if (isMobile) {
                    // For mobile, use mailto with simpler approach
                    window.location.href = 'mailto:salman.itspecialist@gmail.com?subject=Let\'s Connect - IT Support Inquiry&body=Hi Salman,%0D%0A%0D%0AI hope this email finds you well. I came across your portfolio and would like to discuss potential opportunities or collaboration.%0D%0A%0D%0APlease let me know your availability for a conversation.%0D%0A%0D%0ABest regards,';
                  } else {
                    // For desktop, show popup message
                    alert('Redirecting to Gmail... Your email will be pre-filled with my contact information!');
                    
                    // Try to open Gmail in new tab
                    const gmailWindow = window.open('https://mail.google.com/mail/?view=cm&fs=1&to=salman.itspecialist@gmail.com&su=Let\'s Connect - IT Support Inquiry&body=Hi Salman,%0D%0A%0D%0AI hope this email finds you well. I came across your portfolio and would like to discuss potential opportunities or collaboration.%0D%0A%0D%0APlease let me know your availability for a conversation.%0D%0A%0D%0ABest regards,', '_blank');
                    
                    // Check if popup was blocked
                    if (!gmailWindow || gmailWindow.closed || typeof gmailWindow.closed === 'undefined') {
                      // Popup was blocked, show fallback message
                      alert('Popup blocked! Please allow popups for this site, or manually copy my email: salman.itspecialist@gmail.com');
                    }
                  }
                }}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                title="Send me an email with pre-filled message"
              >
                <Mail className="w-6 h-6 text-primary-600" />
              </button>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="https://flowcv.com/resume/6ml1iqjinf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-600 to-primary-800 text-white px-8 py-4 rounded-full font-semibold hover:from-primary-700 hover:to-primary-900 transition-all duration-300 text-center flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
              >
                <FileText className="w-5 h-5" />
                <span>View Live Resume</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="/Salman-Ahmed-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 text-center flex items-center justify-center space-x-3"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
               {/* Profile Picture */}
               <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                 <img 
                   src="/profile-picture.png" 
                   alt="Salman Ahmed - IT Support Specialist"
                   className="w-full h-full object-cover"
                   onError={(e) => {
                     e.target.style.display = 'none';
                     e.target.nextSibling.style.display = 'flex';
                   }}
                 />
                 <div className="w-full h-full bg-gradient-to-r from-primary-600 to-primary-800 rounded-full flex items-center justify-center hidden">
                   <span className="text-white font-bold text-6xl">SA</span>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default Hero

