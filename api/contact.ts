import { sendContactEmail } from './sendContact';

export default async function handler(
  req: { method?: string; body?: { name?: string; email?: string; message?: string } },
  res: { status: (code: number) => { json: (body: object) => void }; setHeader: (name: string, value: string) => void }
) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).json({});
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const result = await sendContactEmail(req.body || {});

  if ('error' in result) {
    const status = result.error.includes('required') ? 400 : 500;
    return res.status(status).json({ error: result.error });
  }
  return res.status(200).json({ success: true, id: result.id });
}
