import CaseStudyCard from '@/components/CaseStudyCard'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Portfolio - H&A Enterprises',
  description: 'See our completed salon and barber shop projects. Real results, real salons.',
}

export default function Portfolio() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="section section-navy text-white">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-4">Our Work</h1>
          <p className="text-xl text-gray-200">See how we've helped salons grow their business.</p>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section">
        <div className="container">
          <CaseStudyCard
            salon="Kas the Barber"
            location="United Kingdom"
            challenge="Kas the Barber didn't have an online presence. Customers couldn't find them online, and booking was done only through phone calls."
            solution="We built a professional website with an online booking system. Customers could now book 24/7, reducing the burden on manual phone bookings."
            result="Increase in bookings in 3 months"
            resultValue="30% increase in bookings"
            video ="/h-a-enterprises/public/videos/KasTheBarber.mp4" 
          />
          <CaseStudyCard
            salon="Venus Barbers"
            location="United Kingdom"
            challenge="Venus Barbers had no website and was missing out on online bookings. Local customers couldn't find them on Google."
            solution="We created a modern, professional website with integrated online booking. Now customers can discover Venus Barbers online and book instantly."
            result="Increase in bookings"
            resultValue="30% increase in bookings"
            video="/h-a-enterprises/public/videos/venusBarbers.mp4"
          />
          <CaseStudyCard
            salon="SZ Cutzz"
            location="America"
            challenge="SZ Cutzz was overwhelmed with phone calls for bookings. Staff was spending too much time scheduling instead of serving customers."
            solution="We implemented an online booking system that automated the entire scheduling process. Customers book online, get automatic confirmations."
            result="Reduction in phone calls"
            resultValue="50% reduction in phone calls"
            video="/h-a-enterprises/public/videos/bookingSystem.mp4"
          />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready for Results Like These?"
        subtitle="Let's talk about what we can do for your salon."
      />
    </>
  )
}
