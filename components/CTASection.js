'use client'

import Link from 'next/link'

export default function CTASection({ title, subtitle, buttonText = 'Book Free Consultation' }) {
  return (
    <section className="section section-navy text-center">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
        {subtitle && <p className="text-xl mb-8 text-gray-200">{subtitle}</p>}
        <Link href="/contact" className="btn btn-primary">
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
