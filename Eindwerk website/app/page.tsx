'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gray-100 animate-float"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        />
        <div className="container relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl font-bold mb-6"
          >
            Creative Developer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-gray-600 max-w-2xl mx-auto"
          >
            Helping brands to stand out in the digital era. Together we will set the new status quo.
          </motion.p>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-8 bg-gray-50">
        <div className="container">
          <h2 className="section-title">Recent Work</h2>
          <div className="work-grid">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                className="work-item bg-white p-6 rounded-lg shadow-lg hover-lift"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-video bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-2xl font-bold mb-2">Project {item}</h3>
                <p className="text-gray-600">Design & Development</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8">
        <div className="container max-w-4xl mx-auto">
          <h2 className="section-title">About</h2>
          <p className="text-xl mb-8 leading-relaxed">
            The combination of passion for design, code & interaction positions me in a unique place in the web design world.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button"
          >
            Learn More
          </motion.button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-gray-50">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="section-title">Let's work together</h2>
          <p className="text-xl mb-8">Get in touch</p>
          <div className="space-y-4 bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg hover-lift">email@example.com</p>
            <p className="text-lg hover-lift">+1 234 567 890</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8">
        <div className="container flex justify-between items-center">
          <p>© 2024 All rights reserved</p>
          <div className="flex gap-8">
            <a href="#" className="hover-lift">Instagram</a>
            <a href="#" className="hover-lift">Twitter</a>
            <a href="#" className="hover-lift">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  )
} 