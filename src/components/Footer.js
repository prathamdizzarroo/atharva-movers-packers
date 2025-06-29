import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTruck } from 'react-icons/fa';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: <FaFacebook className="text-2xl" />, href: '#' },
  { icon: <FaTwitter className="text-2xl" />, href: '#' },
  { icon: <FaInstagram className="text-2xl" />, href: '#' },
  { icon: <FaLinkedin className="text-2xl" />, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                <FaTruck className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Atharva Movers</h3>
                <p className="text-sm text-gray-400">Packers & Relocation</p>
              </div>
            </div>
            <p className="text-gray-400">Your trusted partner for safe and reliable moving services across India.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">123, Main Street, Mumbai, India</p>
            <p className="text-gray-400">Phone: +91 9699840437 / +91 8950851480</p>
            <p className="text-gray-400">Email: info@atharvalogistics.com</p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link, idx) => (
                <a key={idx} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Atharva Movers & Packers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 