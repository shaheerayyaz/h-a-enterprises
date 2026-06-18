import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function POST(request) {
  try {
    const body = await request.json()
    const { firstName, salonName, email, phone, location, description, whatsapp } = body

    // Validate required fields
    if (!firstName || !salonName || !email || !phone || !location) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email to H&A Enterprises
    const mailToCompany = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Lead: ${salonName} - ${firstName}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Salon:</strong> ${salonName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Preferred Contact:</strong> ${whatsapp ? 'WhatsApp' : 'Email/Phone'}</p>
        <p><strong>Message:</strong></p>
        <p>${description}</p>
      `,
    }

    // Confirmation email to customer
    const mailToCustomer = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your request - H&A Enterprises',
      html: `
        <h2>Thank You, ${firstName}!</h2>
        <p>We received your consultation request for <strong>${salonName}</strong>.</p>
        <p>Our team will get back to you within 24 hours via ${whatsapp ? 'WhatsApp' : 'email'}.</p>
        <p><strong>Your Details:</strong></p>
        <ul>
          <li>Phone: ${phone}</li>
          <li>Location: ${location}</li>
        </ul>
        <p>In the meantime, feel free to reach out:</p>
        <ul>
          <li>📧 Email: shaheerayaz163@gmail.com</li>
          <li>📱 WhatsApp: +92-309-8900260</li>
        </ul>
        <p>Best regards,<br>H&A Enterprises Team</p>
      `,
    }

    // Send both emails
    await transporter.sendMail(mailToCompany)
    await transporter.sendMail(mailToCustomer)

    return Response.json(
      { message: 'Request received successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email error:', error)
    return Response.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}

console.log("EMAIL_USER:", process.env.EMAIL_USER)
console.log("EMAIL_PASS:", process.env.EMAIL_PASS)