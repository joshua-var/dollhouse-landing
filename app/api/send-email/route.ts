import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialize Resend with API key from environment variables
// Ensure you have RESEND_API_KEY in your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

// Get the recipient email from environment variables
// Ensure you have EMAIL_TO in your .env.local file
const emailTo = process.env.EMAIL_TO;

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error('Resend API key is missing.');
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
  }

  if (!emailTo) {
    console.error('Recipient email (EMAIL_TO) is missing.');
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
  }

  try {
    const body = await request.json();
    const { firstName, lastName, companyName, email, phone, catalogSize, message } = body;

    if (!firstName || !lastName || !companyName || !email) {
        return NextResponse.json({ error: 'Missing required form fields.' }, { status: 400 });
    }

    const emailSubject = `New Dollhouse Supplier Waitlist Entry: ${companyName}`;
    const emailHtmlBody = `
      <h1>New Supplier Waitlist Submission</h1>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Company Name:</strong> ${companyName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Catalog Size:</strong> ${catalogSize || 'N/A'}</p>
      <p><strong>Additional Information:</strong></p>
      <p>${message || 'N/A'}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Dollhouse Waitlist <waitlist@dollhouseai.co>', // Using verified domain
      to: emailTo,
      subject: emailSubject,
      html: emailHtmlBody,
      replyTo: email, // Corrected field name: replyTo
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error processing request:', error);
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
} 