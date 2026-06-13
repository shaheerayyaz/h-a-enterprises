'use client'

import { useState } from 'react'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="section section-navy text-white">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-4">Get Started Today</h1>
          <p className="text-xl text-gray-200">Ready to take your salon online? Let's talk.</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* FORM */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <ContactForm />
            </div>

            {/* CONTACT INFO */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Or Contact Us Directly</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-primary-navy mb-2">📧 Email</h3>
                  <a href="mailto:shaheerayaz163@gmail.com" className="text-accent-teal hover:text-accent-teal-dark transition">
                    shaheerayaz163@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-primary-navy mb-2">📱 WhatsApp</h3>
                  <a
                    href="https://wa.me/923098900260"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-teal hover:text-accent-teal-dark transition"
                  >
                    +92-309-8900260
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-primary-navy mb-2">📍 Location</h3>
                  <p className="text-text-medium">Islamabad, Pakistan</p>
                </div>

                <div>
                  <h3 className="font-bold text-primary-navy mb-2">📸 Follow Us</h3>
                  <a
                    href="https://www.instagram.com/rashidsalon_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-teal hover:text-accent-teal-dark transition"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section section-light">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Common Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <FAQItem
              question="What's the first step?"
              answer="The first step is a free consultation call. We'll discuss your salon, your goals, and recommend the best package for you. No commitment required."
            />
            <FAQItem
              question="How much does it cost?"
              answer="Starter packages start at PKR 50,000 (1-2 weeks). Professional packages start at PKR 90,000 (3-4 weeks). Custom packages available for larger projects."
            />
            <FAQItem
              question="How long does it take?"
              answer="Starter: 1-2 weeks. Professional: 3-4 weeks. Timeline depends on how quickly you provide information and feedback."
            />
            <FAQItem
              question="Do I need to know anything about technology?"
              answer="No. You don't need to know anything about tech. We handle everything. You focus on your salon."
            />
            <FAQItem
              question="Will this really help my business?"
              answer="Yes. Our clients see 20-50% increases in bookings within 3 months of launch. More bookings = more revenue."
            />
            <FAQItem
              question="What about payment security?"
              answer="We use industry-standard security. Your customers' data is encrypted and protected."
            />
          </div>
        </div>
      </section>
    </>
  )
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border border-text-border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left font-bold text-primary-navy hover:bg-background-white transition flex justify-between items-center"
      >
        <span>{question}</span>
        <span className="text-accent-teal text-2xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-background-white border-t border-text-border">
          <p className="text-text-medium">{answer}</p>
        </div>
      )}
    </div>
  )
}
