import Link from 'next/link'
import Image from 'next/image'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Home - H&A Enterprises',
  description: 'Get your salon online in 30 days. Professional booking systems and websites for barber shops and salons.',
}

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="section section-navy text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Get Your Salon Online in 30 Days</h1>
              <p className="text-xl mb-8 text-gray-200">
                Professional booking systems, websites, and online presence for barber shops and salons. Proven to increase bookings and reduce manual work.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Book a Free Consultation
              </Link>
            </div>
            <div className="bg-background-light rounded-lg h-96 flex items-center justify-center border-2 border-dashed border-white border-opacity-30">
              {/* <p className="text-gray-400 text-center"> */}
                <div className="relative bg-background-light rounded-lg h-96 w-full overflow-hidden border-2 border-dashed border-white border-opacity-30 ">
                    <Image
                      src="/h-a-enterprises/hero.png"
                      alt="Hero image"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
              {/* </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="section">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Are You Losing Customers Without an Online Presence?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3">Missing Online Bookings</h3>
              <p className="text-text-medium">
                Customers can't book online. You're losing walk-ins who look you up but find nothing.
              </p>
            </div>
            <div className="card">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-3">Manual Phone Bookings</h3>
              <p className="text-text-medium">
                Spending hours on phone calls instead of serving clients. Missed calls = missed revenue.
              </p>
            </div>
            <div className="card">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-3">No Professional Image</h3>
              <p className="text-text-medium">
                Without a website, customers think you're not serious about your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="section section-light">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">What We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-3">Professional Website</h3>
              <p className="text-text-medium">
                A modern, professional website that showcases your salon and builds customer trust.
              </p>
            </div>
            <div className="card">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-xl font-bold mb-3">Online Booking System</h3>
              <p className="text-text-medium">
                Clients book 24/7 from their phone. Automatic confirmations. Zero manual work.
              </p>
            </div>
            <div className="card">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-xl font-bold mb-3">Payment Integration</h3>
              <p className="text-text-medium">
                Accept online payments securely. More convenience for customers, more revenue for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section section-navy text-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose H&A Enterprises</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">🎯</div>
              <div>
                <h3 className="text-xl font-bold mb-2">We Specialize in Salons</h3>
                <p>
                  We don't build generic websites. We understand barber shops and salons. We know your business.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">✅</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                <p>
                  Our clients see real results: more bookings, fewer phone calls, better customer experience.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">⚡</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
                <p>
                  Your website ready in 2-4 weeks. You'll be online and booking customers quickly.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">🤝</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Complete Support</h3>
                <p>
                  We're here every step of the way. From setup to training your team, we've got you covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT RESULTS */}
      <section className="section">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Real Results From Real Salons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="card text-center">
              <h3 className="text-2xl font-bold text-accent-teal mb-2">30%</h3>
              <p className="font-bold text-primary-navy mb-2">Increase in Bookings</p>
              <p className="text-text-medium mb-2">Kas the Barber</p>
              <p className="text-sm text-text-light">United Kingdom</p>
            </div>
            <div className="card text-center">
              <h3 className="text-2xl font-bold text-accent-teal mb-2">30%</h3>
              <p className="font-bold text-primary-navy mb-2">Increase in Bookings</p>
              <p className="text-text-medium mb-2">Trimmers</p>
              <p className="text-sm text-text-light">United States</p>
            </div>
            <div className="card text-center">
              <h3 className="text-2xl font-bold text-accent-teal mb-2">-50%</h3>
              <p className="font-bold text-primary-navy mb-2">Reduction in Phone Calls</p>
              <p className="text-text-medium mb-2">SZ Cutzz</p>
              <p className="text-sm text-text-light">United Kingdom</p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/portfolio" className="text-accent-teal font-bold hover:text-accent-teal-dark transition">
              See Full Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section section-light">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">What We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="card">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-xl font-bold mb-3">Online Booking System</h3>
              <p className="text-text-medium mb-4">
                Customers book anytime, anywhere. Automatic reminders. Easy management.
              </p>
              <Link href="/services" className="text-accent-teal font-semibold hover:text-accent-teal-dark transition">
                Learn More →
              </Link>
            </div>
            <div className="card">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-3">Professional Website</h3>
              <p className="text-text-medium mb-4">
                Custom design. Mobile-friendly. Shows off your salon. Builds trust.
              </p>
              <Link href="/services" className="text-accent-teal font-semibold hover:text-accent-teal-dark transition">
                Learn More →
              </Link>
            </div>
            <div className="card">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-xl font-bold mb-3">Payment Processing</h3>
              <p className="text-text-medium mb-4">
                Accept payments online. Multiple methods. Secure and reliable.
              </p>
              <Link href="/services" className="text-accent-teal font-semibold hover:text-accent-teal-dark transition">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection
        title="Ready to Take Your Salon Online?"
        subtitle="Let's talk about how we can grow your business."
      />
    </>
  )
}
