import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    hasGmailUser: !!process.env.GMAIL_USER,
    hasGmailPassword: !!process.env.GMAIL_APP_PASSWORD,
    gmailUser: process.env.GMAIL_USER || 'NOT_SET',
    hasSmtpHost: !!process.env.SMTP_HOST,
    hasSmtpUser: !!process.env.SMTP_USER,
    hasSmtpPassword: !!process.env.SMTP_PASSWORD,
    smtpHost: process.env.SMTP_HOST || 'NOT_SET',
    smtpPort: process.env.SMTP_PORT || 'NOT_SET',
    smtpSecure: process.env.SMTP_SECURE || 'NOT_SET',
    mailFrom: process.env.MAIL_FROM || 'NOT_SET',
    mailTo: process.env.MAIL_TO || 'NOT_SET',
    nodeEnv: process.env.NODE_ENV,
    // Don't expose the actual password for security
  })
}
