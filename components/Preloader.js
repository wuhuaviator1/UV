'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <motion.div 
      className="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      onAnimationComplete={() => setLoading(false)}
    >
      <div className="preloader-lottie">
        {/* Add your loading animation here */}
      </div>
      <div className="preloader-wrapper">
        <div className="preloader-bg-left"></div>
        <div className="preloader-bg-right"></div>
      </div>
    </motion.div>
  )
}