import React, { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Clock, Wifi, Award } from 'lucide-react'

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [counts, setCounts] = useState({
    experience: 0,
    users: 0,
    accessPoints: 0,
    certifications: 0
  })

  const stats = useMemo(() => [
    {
      icon: Clock,
      value: 3,
      suffix: '+',
      label: 'Years Experience',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      value: 150,
      suffix: '+',
      label: 'Users Supported',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Wifi,
      value: 30,
      suffix: '+',
      label: 'Access Points Managed',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Award,
      value: 4,
      suffix: '',
      label: 'Certifications',
      color: 'from-orange-500 to-orange-600'
    }
  ], [])

  useEffect(() => {
    if (inView) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps

      stats.forEach((stat, index) => {
        const targetValue = stat.value
        let currentStep = 0

        const timer = setInterval(() => {
          currentStep++
          const progress = currentStep / steps
          const currentValue = Math.floor(targetValue * progress)

          setCounts(prev => ({
            ...prev,
            [index === 0 ? 'experience' : index === 1 ? 'users' : index === 2 ? 'accessPoints' : 'certifications']: currentValue
          }))

          if (currentStep >= steps) {
            clearInterval(timer)
            setCounts(prev => ({
              ...prev,
              [index === 0 ? 'experience' : index === 1 ? 'users' : index === 2 ? 'accessPoints' : 'certifications']: targetValue
            }))
          }
        }, stepDuration)
      })
    }
  }, [inView, stats])

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Cyber Grid Network Animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Main grid lines with smooth transition */}
        <div className="absolute inset-0 opacity-20 blur-sm transition-smooth">
          <div className="grid-lines-horizontal"></div>
          <div className="grid-lines-vertical"></div>
        </div>
        
        {/* Enhanced fade out gradient with dissolve effect */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-primary-600/90 via-primary-600/70 via-primary-600/40 to-transparent pointer-events-none transition-dissolve">
          {/* Subtle grid fade overlay */}
          <div className="absolute inset-0 opacity-10">
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Professional <span className="text-yellow-300">Stats</span>
          </h2>
          <p className="text-xl text-white opacity-90 leading-relaxed">
            Quantifying my impact and experience in IT support and infrastructure management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {index === 0 && counts.experience}
                  {index === 1 && counts.users}
                  {index === 2 && counts.accessPoints}
                  {index === 3 && counts.certifications}
                  <span className="text-yellow-300">{stat.suffix}</span>
                </div>
                
                <p className="text-white opacity-90 font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Making a Difference</h3>
            <p className="text-white opacity-90 leading-relaxed">
              These numbers represent real impact - from supporting hundreds of users to managing critical 
              infrastructure components. Every statistic reflects my commitment to delivering reliable, 
              secure, and efficient IT solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
