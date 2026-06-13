# H&A Enterprises - Professional Salon & Barber Shop Web Solutions

A modern, professional website and booking system for salon and barber shop owners.

## ✨ Features

- 🌐 Professional responsive website
- 📅 Online booking system
- 💳 Payment integration ready
- 📧 Contact form with email notifications
- 📊 Google Analytics integration
- 🔍 SEO optimized
- 📱 Mobile-first design
- 🎨 Clean, minimalistic design with Navy + Teal colors

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom H&A color palette
- **Forms:** React Hook Form
- **Email:** Nodemailer
- **Deployment:** Netlify
- **Analytics:** Google Analytics

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/shaheerayyaz/h-a-enterprises.git
cd h-a-enterprises

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Add your environment variables
# See .env.example for required variables

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the website.

## 📝 Environment Variables

Create `.env.local` with:

```
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G_XXXXXXXXXX
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
EMAIL_TO=shaheerayaz163@gmail.com
```

**Note:** Use app-specific passwords for Gmail, not your regular password.

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Netlify

See `DEPLOYMENT.md` for complete Netlify deployment instructions.

## 📂 Project Structure

```
h-a-enterprises/
├── app/
│   ├── layout.js           # Root layout with GA
│   ├── page.js             # Homepage
│   ├── services/page.js    # Services page
│   ├── portfolio/page.js   # Portfolio/Case studies
│   ├── about/page.js       # About us page
│   ├── contact/page.js     # Contact page
│   ├── api/
│   │   └── contact/route.js # Contact form API
│   └── globals.css         # Global styles
├── components/
│   ├── Header.js           # Navigation header
│   ├── Footer.js           # Footer
│   ├── CTASection.js       # Call-to-action sections
│   ├── ServiceCard.js      # Service display cards
│   ├── CaseStudyCard.js    # Case study cards
│   ├── PricingCard.js      # Pricing tier cards
│   ├── FAQItem.js          # FAQ accordion items
│   └── ContactForm.js      # Contact form component
├── public/
│   └── images/             # Image placeholders (add your images here)
├── tailwind.config.js      # Tailwind configuration with H&A colors
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## 🎨 Color Palette

H&A Enterprises uses a clean, minimalistic color scheme:

- **Navy Blue:** `#2C3E50` - Headers, navigation, primary text
- **Teal/Cyan:** `#06B6D4` - CTAs, buttons, highlights, links
- **White:** `#FFFFFF` - Main background
- **Light Gray:** `#F8FAFB` - Subtle backgrounds
- **Medium Gray:** `#6B7280` - Body text
- **Dark Gray:** `#1F2937` - Headings

## 📧 Contact Form Setup

The contact form sends emails using Gmail's SMTP. To set it up:

1. Enable 2-factor authentication on your Gmail account
2. Create an app-specific password
3. Add the password to `.env.local` as `EMAIL_PASS`

## 📊 Google Analytics

To enable Google Analytics:

1. Go to https://analytics.google.com
2. Create a new property
3. Get your Measurement ID (starts with "G_")
4. Add to `.env.local` as `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`

## 🔗 Pages Overview

| Page | Purpose | Route |
|------|---------|-------|
| Homepage | Hero, problems, solutions, results | `/` |
| Services | Detailed service offerings and pricing | `/services` |
| Portfolio | Case studies and completed projects | `/portfolio` |
| About | Company story, team, process, credentials | `/about` |
| Contact | Lead capture form and contact info | `/contact` |

## 🖼️ Adding Images

To add images to your website:

1. Place image files in the `public/images/` directory
2. In components/pages, replace placeholder divs with actual images
3. Use Next.js Image component: `<Image src="/images/filename.jpg" alt="" width={} height={} />`

## 🤝 Support

For questions or support, contact:

- 📧 Email: shaheerayaz163@gmail.com
- 📱 WhatsApp: +92-309-8900260
- 📍 Location: Islamabad, Pakistan

## 📄 License

All rights reserved © 2026 H&A Enterprises
