'use client'

import Link from 'next/link'

export default function PricingCard({ tier, price, duration, features, popular }) {
  return (
    <div className={`card ${popular ? 'ring-2 ring-accent-teal' : ''}`}>
      {popular && (
        <div className="bg-accent-teal text-white px-3 py-1 rounded-full inline-block mb-4 text-sm font-bold">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-primary-navy mb-2">{tier}</h3>
      <p className="text-3xl font-bold text-accent-teal mb-2">PKR {price.toLocaleString()}</p>
      <p className="text-text-medium mb-6">{duration}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-accent-teal text-xl">✅</span>
            <span className="text-text-medium">{feature}</span>
          </li>
        ))}
      </ul>
      <Link href="/contact" className="btn btn-primary w-full text-center">
        Get Started
      </Link>
    </div>
  )
}
