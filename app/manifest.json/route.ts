import { NextResponse } from 'next/server';

export function GET() {
  const manifest = {
    name: 'FlowAfric - Connect • Call • Pay',
    short_name: 'FlowAfric',
    description: 'The ultimate super app for Africans. Manage wallets, trade P2P, make calls, and shop securely.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#10B981',
    icons: [
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ]
  };

  return NextResponse.json(manifest);
}