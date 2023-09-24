import WelcomeTemplate from '@/emails/WelcomeTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  resend.emails.send({
    from: '',
    to: 'chularansifernando@gmail.com',
    subject: 'React email - Sample',
    react: <WelcomeTemplate name={'Chula'} />,
  });

  return NextResponse.json({});
}
