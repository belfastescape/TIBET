import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Debug: Log environment variables (without exposing password)
    console.log('Environment check:', {
      hasGmailUser: !!process.env.GMAIL_USER,
      hasGmailPassword: !!process.env.GMAIL_APP_PASSWORD,
      gmailUser: process.env.GMAIL_USER,
    })

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Build transporter from env: prefer generic SMTP if provided, else fallback to Gmail
    const hasGenericSmtp = !!process.env.SMTP_HOST && !!process.env.SMTP_USER && !!process.env.SMTP_PASSWORD
    const hasGmail = !!process.env.GMAIL_USER && !!process.env.GMAIL_APP_PASSWORD

    if (!hasGenericSmtp && !hasGmail) {
      console.error('Missing email configuration')
      console.error('GMAIL_USER:', process.env.GMAIL_USER)
      console.error('GMAIL_APP_PASSWORD exists:', !!process.env.GMAIL_APP_PASSWORD)
      console.error('SMTP_HOST:', process.env.SMTP_HOST)
      console.error('SMTP_USER:', process.env.SMTP_USER)
      console.error('SMTP_PASSWORD exists:', !!process.env.SMTP_PASSWORD)
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const transporter = hasGenericSmtp
      ? nodemailer.createTransport({
          host: process.env.SMTP_HOST!,
          port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
          secure: process.env.SMTP_SECURE === 'true' || (process.env.SMTP_PORT === '465'),
          auth: {
            user: process.env.SMTP_USER!,
            pass: process.env.SMTP_PASSWORD!,
          },
        })
      : nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.GMAIL_USER!,
            pass: process.env.GMAIL_APP_PASSWORD!,
          },
        })

    // Test the connection
    console.log('Testing email connection...')
    await transporter.verify()
    console.log('Email connection verified successfully')

    // Email content
    const defaultFrom = process.env.MAIL_FROM || process.env.SMTP_USER || process.env.GMAIL_USER
    const defaultTo = process.env.MAIL_TO || 'info@escaperoomstibet.com'

    const mailOptions = {
      from: defaultFrom,
      to: defaultTo, // Where you want to receive emails
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0891b2;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #333;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e7f3ff; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              This message was sent from the Escape Rooms Tibet contact form.
            </p>
          </div>
        </div>
      `,
      // Also send a plain text version
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from the Escape Rooms Tibet contact form.
      `,
    }

    // Send email
    console.log('Sending email...')
    const result = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', result.messageId)

    return NextResponse.json(
      { message: 'Email sent successfully', messageId: result.messageId },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    
    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
      })
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
