import Link from 'next/link'

export const metadata = {
  title: 'About - H&A Enterprises',
  description: 'Learn about H&A Enterprises, our team, and our mission to help salon owners succeed online.',
}

export default function About() {
  const teamMembers = [
    {
      name: 'Hamida',
      role: 'Founder',
      bio: 'Hamida leads H&A Enterprises with a vision to transform how salon owners do business. With expertise across the business, Hamida ensures every client gets the best service and support.',
    },
    {
      name: 'Ayyaz',
      role: 'Co-Founder',
      bio: 'Ayyaz co-founded H&A Enterprises and brings strategic expertise. Together with Hamida, Ayyaz drives the company\'s mission to help salons succeed online.',
    },
    {
      name: 'Shaheer',
      role: 'Lead Developer',
      bio: 'Shaheer is our Lead Developer with deep expertise in building scalable, reliable software. He ensures every website and booking system we build is fast, secure, and user-friendly.',
    },
    {
      name: 'Waqas',
      role: 'Full-Stack Developer',
      bio: 'Waqas brings full-stack development expertise to every project. From frontend design to backend systems, Waqas ensures everything works perfectly.',
    },
    {
      name: 'Amna',
      role: 'Business Development Head',
      bio: 'Amna leads client relationships and ensures every salon gets personalized attention. She understands the salon business and what clients need to succeed.',
    },
    {
      name: 'Daniel',
      role: 'Web Designer',
      bio: 'Daniel creates beautiful, professional designs that build customer trust. Every website we build is designed to convert visitors into bookings.',
    },
  ]

  return (
    <>
      {/* PAGE HEADER */}
      <section className="section section-navy text-white">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-4">About H&A Enterprises</h1>
          <p className="text-xl text-gray-200">We help salon owners succeed in the digital age.</p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-text-medium mb-4">
            H&A Enterprises was founded by Hamida and Ayyaz with a simple mission: to help barber shops and salons go digital and grow their business.
          </p>
          <p className="text-lg text-text-medium mb-4">
            We saw the problem. Talented salon owners were losing customers because they didn't have an online presence. Customers wanted to book online, but there was nowhere to do it.
          </p>
          <p className="text-lg text-text-medium mb-4">
            So we built the solution. We created websites and booking systems specifically designed for salons and barber shops. The results? Our clients get more bookings, happier customers, and more time to focus on what they do best: running their salon.
          </p>
          <p className="text-lg text-text-medium">
            Today, 10+ salons trust H&A Enterprises to power their online business.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="section section-light">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="card">
                <div className="bg-background-light rounded-lg h-48 flex items-center justify-center mb-4 border-2 border-dashed border-text-border">
                  <p className="text-text-medium text-center">[Photo Placeholder]</p>
                </div>
                <h3 className="text-xl font-bold text-primary-navy mb-1">{member.name}</h3>
                <p className="text-accent-teal font-semibold mb-4">{member.role}</p>
                <p className="text-text-medium">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="section">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Why Salons Choose H&A</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold text-primary-navy mb-4">We Specialize in Salons</h3>
              <p className="text-text-medium">
                We don't build generic websites. We understand barber shops and salons. We know your business, your challenges, and what drives results.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-primary-navy mb-4">Proven Results</h3>
              <p className="text-text-medium">
                Our clients see real results: 30-50% increases in bookings. We don't make promises we can't keep.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-primary-navy mb-4">Dedicated Support</h3>
              <p className="text-text-medium">
                We're not just a vendor. We're your partner. From setup to training to ongoing support, we're here for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="section section-light">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">How We Work</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Discovery Call',
                  description: 'We learn about your salon, your goals, and your customers. 30 minutes to understand your business.'
                },
                {
                  step: '2',
                  title: 'Planning & Design',
                  description: 'We create a plan for your website and booking system. You approve the design before we start building.'
                },
                {
                  step: '3',
                  title: 'Development',
                  description: 'Our developers build your website and booking system. Fast, reliable, and professional.'
                },
                {
                  step: '4',
                  title: 'Testing',
                  description: 'We thoroughly test everything. All features work, links work, forms work. No surprises.'
                },
                {
                  step: '5',
                  title: 'Launch & Training',
                  description: 'Your website goes live! We train you and your staff on how to use the booking system.'
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent-teal text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-navy mb-2">{item.title}</h3>
                    <p className="text-text-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-12">Our Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="card">
              <p className="text-4xl mb-4">✅</p>
              <p className="text-text-medium">Registered by PSEB (Pakistan Software Export Board)</p>
            </div>
            <div className="card">
              <p className="text-4xl mb-4">💻</p>
              <p className="text-text-medium">Full-stack expertise across all major web development technologies</p>
            </div>
            <div className="card">
              <p className="text-4xl mb-4">🎯</p>
              <p className="text-text-medium">10+ successful salon projects delivered</p>
            </div>
            <div className="card">
              <p className="text-4xl mb-4">📍</p>
              <p className="text-text-medium">Based in Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
