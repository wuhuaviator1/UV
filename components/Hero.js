'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="section hero-v1">
      <div className="w-layout-blockcontainer container w-container">
        <div className="hero-v1-wrapper">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="home-v1-title"
          >
            Smart Campus <span className="inner-color-title">Smarter You</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="brand"
          />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="secondary-button-wrap"
          >
            <Link href="/projects" className="secondary-button-wrapper">
              <div className="primary-button-text">Learn More</div>
              <div className="primary-button-arrow" />
            </Link>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Image 
          src="/images/Hero-Banner-Line.svg"
          alt="Hero Banner Line"
          className="hero-banner-line"
          width={1920}
          height={100}
          priority
        />
      </motion.div>
    </section>
  )
}