'use client'

export default function ServiceCard({ icon, title, description, features }) {
  return (
    <div className="card">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-primary-navy">{title}</h3>
      <p className="text-text-medium mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-accent-teal text-xl mt-1">✅</span>
            <span className="text-text-medium">{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className="text-accent-teal font-semibold hover:text-accent-teal-dark transition">
        Learn More →
      </a>
    </div>
  )
}
