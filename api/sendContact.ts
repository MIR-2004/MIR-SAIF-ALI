import { Resend } from 'resend';

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>';
const TO_EMAIL = process.env.RESEND_TO_EMAIL || 'mir.saif.ali2004@gmail.com';

export type SendResult = { success: true; id?: string } | { error: string };

export async function sendContactEmail(body: {
  name?: string;
  email?: string;
  message?: string;
}): Promise<SendResult> {
  const { name, email, message } = body;
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { error: 'Name, email, and message are required' };
  }
  if (!process.env.RESEND_API_KEY?.trim()) {
    return {
      error:
        'RESEND_API_KEY is missing. Add it to the .env file in the project root (e.g. RESEND_API_KEY=re_xxx), then restart the dev server. Get a key at https://resend.com/api-keys',
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email.trim(),
      subject: `Portfolio contact from ${name.trim()}`,
      text: message.trim(),
      html: `
        <p><strong>From:</strong> ${name.trim()} &lt;${email.trim()}&gt;</p>
        <p><strong>Message:</strong></p>
        <p>${message.trim().replace(/\n/g, '<br>')}</p>
      `,
    });
    if (error) return { error: error.message || 'Failed to send email' };
    return { success: true, id: data?.id };
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Failed to send email' };
  }
}
