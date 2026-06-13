import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'H&A Enterprises - Salon & Barber Shop Web Solutions',
  description: 'Professional booking systems, websites, and online presence for barber shops and salons. Proven to increase bookings.',
  keywords: 'salon website, barber booking system, salon management, online booking',
  authors: [{ name: 'H&A Enterprises' }],
  openGraph: {
    type: 'website',
    url: 'https://handaenterprises.com',
    title: 'H&A Enterprises - Salon & Barber Shop Web Solutions',
    description: 'Professional booking systems, websites, and online presence for barber shops and salons.',
    siteName: 'H&A Enterprises',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="bg-background-white text-text-dark">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
