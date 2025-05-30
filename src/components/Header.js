import React, { useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#whyus' },
  { name: 'Process', href: '#process' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-end items-center py-2 border-b">
          <a href="tel:+919999999999" className="flex items-center text-gray-600 hover:text-blue-700 mr-6">
            <FaPhone className="mr-2" />
            <span>+91 9999999999</span>
          </a>
          <a href="mailto:info@atharvamovers.com" className="text-gray-600 hover:text-blue-700">
            info@atharvamovers.com
          </a>
        </div>
        
        {/* Main header with logo and navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            {/* Custom SVG Logo */}
            <div className="w-12 h-12">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#2563EB' }} />
                    <stop offset="100%" style={{ stopColor: '#1D4ED8' }} />
                  </linearGradient>
                </defs>
                <path
                  d="M50 10 L80 30 L80 70 L50 90 L20 70 L20 30 Z"
                  fill="url(#logoGradient)"
                  className="transform transition-transform duration-300 hover:scale-105"
                />
                <path
                  d="M35 40 L65 40 L65 60 L35 60 Z"
                  fill="white"
                  className="transform transition-transform duration-300 hover:scale-105"
                />
                <path
                  d="M40 45 L60 45 L60 55 L40 55 Z"
                  fill="#2563EB"
                  className="transform transition-transform duration-300 hover:scale-105"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                Atharva Movers
              </h1>
              <p className="text-sm text-gray-600 font-medium tracking-wide">
                Packers & Relocation
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="px-4 py-2 border-t">
                  <a
                    href="tel:+919999999999"
                    onClick={closeMenu}
                    className="flex items-center text-gray-700 hover:text-blue-700"
                  >
                    <FaPhone className="mr-2" />
                    <span>+91 9999999999</span>
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
} 