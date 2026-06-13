'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-bold mb-4">H&A Enterprises</h3>
            <p className="text-gray-400 text-sm">
              Helping salon and barber shop owners go digital and grow their business.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-accent-teal transition">Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-accent-teal transition">Portfolio</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-accent-teal transition">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-accent-teal transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📧 shaheerayaz163@gmail.com</li>
              <li>📱 +92-309-8900260</li>
              <li>📍 Islamabad, Pakistan</li>
            </ul>
          </div>

          {/* Column 4: Follow */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/rashidsalon_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-teal transition"
                >
                  📸 Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923098900260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-teal transition"
                >
                  💬 WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} H&A Enterprises. All rights reserved.</p>
          <p className="mt-2">
            <Link href="#" className="hover:text-accent-teal transition">Privacy Policy</Link>
            {' '} | {' '}
            <Link href="#" className="hover:text-accent-teal transition">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
