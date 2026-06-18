'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-primary-navy text-accent-teal sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="hover:opacity-80 transition">
            <Image
              src="/h-a-enterprises/header.png"
              alt="H&A Enterprises"
              width={140}
              height={40}
              priority
            />
          </Link>
        </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center leading-none py-2 font-body">

            <Link href="/" className="hover:text-accent-teal transition">Home</Link>
            <Link href="/services" className="hover:text-accent-teal transition">Services</Link>
            <Link href="/portfolio" className="hover:text-accent-teal transition">Portfolio</Link>
            <Link href="/about" className="hover:text-accent-teal transition">About</Link>

            <Link href="/contact" className="btn btn-primary header-btn font-body">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 mt-6 pb-4 border-t border-white border-opacity-20 pt-4 font-body">

            <Link href="/" className="hover:text-accent-teal transition">Home</Link>
            <Link href="/services" className="hover:text-accent-teal transition">Services</Link>
            <Link href="/portfolio" className="hover:text-accent-teal transition">Portfolio</Link>
            <Link href="/about" className="hover:text-accent-teal transition">About</Link>

            <Link href="/contact" className="btn btn-primary w-full text-center header-btn font-body">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}