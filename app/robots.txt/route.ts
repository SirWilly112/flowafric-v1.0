import { NextResponse } from 'next/server';

export function GET() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://flowafric.com/sitemap.xml`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}