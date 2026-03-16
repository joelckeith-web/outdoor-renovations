import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactFormBody {
  name: string;
  phone: string;
  email: string;
  zipCode: string;
  message?: string;
  service: string;
  leadSource: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body: ContactFormBody = await request.json();

    const { name, phone, email, zipCode, message, service, leadSource } = body;

    if (!name || !phone || !email || !zipCode) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const utmSection =
      body.utmSource || body.utmMedium || body.utmCampaign
        ? `
── Campaign Info ──────────────────────────
Source:   ${body.utmSource || '(not set)'}
Medium:   ${body.utmMedium || '(not set)'}
Campaign: ${body.utmCampaign || '(not set)'}
Term:     ${body.utmTerm || '(not set)'}
Content:  ${body.utmContent || '(not set)'}
`
        : '';

    const emailBody = `New lead from the Outdoor Renovations landing page!

── Contact Details ────────────────────────
Name:    ${name}
Phone:   ${phone}
Email:   ${email}
ZIP:     ${zipCode}

── Service Request ────────────────────────
Service: ${service}
Source:  ${leadSource}
${message ? `Message: ${message}` : ''}
${utmSection}
──────────────────────────────────────────
Sent from: ${leadSource}
`;

    const contactEmails = (process.env.CONTACT_EMAIL || 'Kyle@outdoorreno.com')
      .split(',')
      .map((e) => e.trim());

    const { error } = await resend.emails.send({
      from: 'Outdoor Renovations <onboarding@resend.dev>',
      to: contactEmails,
      replyTo: email,
      subject: `New Lead: ${service} — ${name} (${zipCode})`,
      text: emailBody,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
