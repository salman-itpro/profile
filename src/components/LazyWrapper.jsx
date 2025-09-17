import React, { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
  </div>
)

// Lazy load heavy components
const LazyProjects = lazy(() => import('./Projects'))
const LazyExperience = lazy(() => import('./Experience'))
const LazySkills = lazy(() => import('./Skills'))
const LazyCertifications = lazy(() => import('./Certifications'))

// Wrapper component with fade-in animation
const LazyWrapper = ({ children, fallback = <LoadingSpinner /> }) => (
  <Suspense fallback={fallback}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  </Suspense>
)

export { LazyProjects, LazyExperience, LazySkills, LazyCertifications, LazyWrapper }
