import ServiceCard from '@/components/ServiceCard'
import PricingCard from '@/components/PricingCard'
import FAQItem from '@/components/FAQItem'
import CTASection from '@/components/CTASection'
import { useState } from 'react'

export const metadata = {
  title: 'Services - H&A Enterprises',
  description: 'Online booking systems, professional websites, and payment processing for salons and barber shops.',
}

// Client component for FAQ
function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How long does it take to build my website?',
      answer: 'Starter packages take 1-2 weeks. Professional packages take 3-4 weeks. The timeline depends on how quickly you provide photos, descriptions, and feedback.'
    },
    {
      question: 'Can I update my website myself?',
      answer: 'Yes! We'll train you on how to update services, prices, and other information. Or, we can manage updates for you (included with Professional package).'
    },
    {
      question: 'I don't know anything about technology. Can you handle everything?',
      answer: 'Absolutely. You don't need to know anything about tech. We handle all the technical stuff. You just focus on your salon.'
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

export default function Services() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="section section-navy text-white">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-200">Everything your salon needs to go digital and grow.</p>
        </div>
      </section>

      {/* SERVICE 1: BOOKING */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">Online Booking System</h2>
              <p className="text-lg text-text-medium mb-6">
                Your customers can book appointments 24/7 from their phone or computer. No more missed calls. No more manual scheduling.
              </p>
              <h3 className="font-bold text-primary-navy mb-4">Key Features:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent-teal text-xl mt-1">✅</span>
                  <span className="text-text-medium">24/7 online booking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-teal text-xl mt-1">✅</span>
                  <span className="text-text-medium">Automatic appointment reminders (SMS/Email)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-teal text-xl mt-1">✅</span>
                  <span className="text-text-medium">Multiple services with different durations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-teal text-xl mt-1">✅</span>
                  <span className="text-text-medium">Customer notifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-teal text-xl mt-1">✅</span>
                  <span className="text-text-medium">Easy management dashboard</span>
                </li>
              </ul>
            </div>
            <div className="bg-background-light rounded-lg h-80 flex items-center justify-center border-2 border-dashed border-text-border">
              <p className="text-text-medium text-center">[Video/Screenshot Placeholder]</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 2: WEBSITE */}
      <section className="section section-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-background-white rounded-lg h-80 flex items-center justify-center border-2 border-dashed border-text-border order-2 lg:order-1">
              <p className="text-text-medium text-center">[Video/Screenshot Placeholder]</p>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-4">Professional Website</h2>
              <p className="text-lg text-text-medium mb-6">
                A modern, professional website that showcases your salon, builds customer trust, and brings in new customers.
              </p>
              <h3 className="font-bold text-primary-navy mb-4">Key Features:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent-teal text-xl mt-1">✅</span>
                  <span className="text-text-medium">Custom design (unique to your salon)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-teal text-xl mt-1">✅</span>
                  <span className="text-text-medium">Mobile-friendly (works on all phones)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-teal text-xl mt-1">✅</span>
                  <span className="text-text-medium">Service menu with pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-teal text-xl mt-1">✅</span>
                  <span className="text-text-medium">Photo gallery to showcase your work</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-teal text-xl mt-1">✅</span>
                  <span className="text-text-medium">Fast loading speeds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 3: PAYMENTS */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Online Payment Processing</h2>
              <p className="text-lg text-text-medium mb-6">
                Accept payments online safely and securely. Give customers convenience, and get paid faster.
              </p>
              <h3 className="font-bold text-primary-navy mb-4">Key Features:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent-teal text-xl mt-1">✅</span>
                  <span className="text-text-medium">Multiple payment methods accepted</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-teal text-xl mt-1">✅</span>
                  <span className="text-text-medium">Secure transactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-teal text-xl mt-1">✅</span>
                  <span className="text-text-medium">Instant payment confirmation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-teal text-xl mt-1">✅</span>
                  <span className="text-text-medium">Payment history and reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-teal text-xl mt-1">✅</span>
                  <span className="text-text-medium">Easy refund management</span>
                </li>
              </ul>
            </div>
            <div className="bg-background-light rounded-lg h-80 flex items-center justify-center border-2 border-dashed border-text-border">
              <p className="text-text-medium text-center">[Video/Screenshot Placeholder]</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section section-light">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-center text-text-medium mb-12 max-w-2xl mx-auto">No hidden fees. No surprises.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <PricingCard
              tier="Starter"
              price={50000}
              duration="1-2 weeks"
              features={[
                'Professional Website',
                'Online Booking System',
                'Basic Features',
              ]}
            />
            <PricingCard
              tier="Professional"
              price={90000}
              duration="3-4 weeks"
              features={[
                'Professional Website',
                'Online Booking System',
                'Payment Processing',
                'Advanced Analytics',
                'Priority Support',
              ]}
              popular={true}
            />
          </div>
          <p className="text-center text-text-medium mt-12">
            Not sure which package is right for you? <Link href="/contact" className="text-accent-teal font-bold">Book a free consultation</Link> and we'll recommend the best option.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <ServicesFAQ />

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Let's discuss which package is right for your salon."
      />
    </>
  )
}
