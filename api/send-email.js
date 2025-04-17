// api/send-email.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  const { name, email } = req.body;

  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'softwareace.j@gmail.com',
      subject: 'New Newsletter Signup',
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p>`,
    });

    return res.status(200).json({ success: true, result });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: error.message });
  }
}
