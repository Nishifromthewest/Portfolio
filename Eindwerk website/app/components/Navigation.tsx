'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full p-8 z-50 backdrop-blur">
      <div className="container flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/" className="text-2xl font-bold hover-lift">NC</a>
        </motion.div>
        
        <div className="hidden md:flex gap-8">
          <motion.a
            href="#work"
            className="hover-lift"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Work
          </motion.a>
          <motion.a
            href="#about"
            className="hover-lift"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            About
          </motion.a>
          <motion.a
            href="#contact"
            className="hover-lift"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Contact
          </motion.a>
        </div>

        <motion.button
          className="md:hidden button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Menu
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mobile-menu"
        >
          <div className="flex flex-col gap-8 mt-20">
            <a href="#work" className="text-4xl font-bold hover-lift">Work</a>
            <a href="#about" className="text-4xl font-bold hover-lift">About</a>
            <a href="#contact" className="text-4xl font-bold hover-lift">Contact</a>
          </div>
        </motion.div>
      )}
    </nav>
  )
} 