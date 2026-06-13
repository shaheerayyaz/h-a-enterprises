'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    salonName: '',
    email: '',
    phone: '',
    location: '',
    description: '',
    whatsapp: false,
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          firstName: '',
          salonName: '',
          email: '',
          phone: '',
          location: '',
          description: '',
          whatsapp: false,
        })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert('Error sending form. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Error sending form. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitted && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          ✅ Thank you! We'll get back to you within 24 hours.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-primary-navy font-bold mb-2">First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-text-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-primary-navy font-bold mb-2">Salon Name *</label>
          <input
            type="text"
            name="salonName"
            value={formData.salonName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-text-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal"
            placeholder="Your salon name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-primary-navy font-bold mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-text-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-primary-navy font-bold mb-2">Phone *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-text-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal"
            placeholder="+92-300-XXXXXXX"
          />
        </div>
      </div>

      <div>
        <label className="block text-primary-navy font-bold mb-2">City/Location *</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-text-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal"
          placeholder="Your city"
        />
      </div>

      <div>
        <label className="block text-primary-navy font-bold mb-2">What would you like help with?</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="5"
          className="w-full px-4 py-3 border border-text-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal"
          placeholder="Tell us about your salon and what you need..."
        />
      </div>

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          name="whatsapp"
          checked={formData.whatsapp}
          onChange={handleChange}
          className="w-5 h-5 rounded"
        />
        <span className="text-text-medium">I'd prefer to be contacted via WhatsApp</span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary w-full"
      >
        {loading ? 'Sending...' : 'Submit - Book Free Consultation'}
      </button>
    </form>
  )
}
