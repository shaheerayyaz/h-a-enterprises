'use client'

import { useState } from 'react'
import FAQItem from '@/components/FAQItem'


// Client component for FAQ
export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How long does it take to build my website?',
      answer: 'Starter packages take 1-2 weeks. Professional packages take 3-4 weeks. The timeline depends on how quickly you provide photos, descriptions, and feedback.'
    },
    {
      question: 'Can I update my website myself?',
      answer: `Yes! We'll train you on how to update services, prices, and other information. Or, we can manage updates for you (included with Professional package).`
    },
    {
      question: `I don't know anything about technology. Can you handle everything?`,
      answer: `Absolutely. You don't need to know anything about tech. We handle all the technical stuff. You just focus on your salon.`
    },
    {
      question: 'What if I need changes after launch?',
      answer: 'We provide support after launch. Small updates are covered. For bigger changes, we can discuss options.'
    },
    {
      question: 'Will this help me get more customers?',
      answer: 'Yes. Our clients see 20-50% increases in bookings within the first 3 months. Online presence brings in new customers and reduces missed bookings.'
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}