import { NextResponse } from 'next/server';
import type { Service } from '@/types/landing';

const services: Service[] = [
  { name: '해외 마케팅', icon: '/icon-marketing.png' },
  { name: '퍼블리셔', icon: '/icon-image.png' },
  { name: '캐드원(제도사)', icon: '/icon-box.png' },
  { name: '해외 세일즈', icon: '/icon-target.png' },
  { name: '해외 CS', icon: '/icon-call.png' },
];

export async function GET() {
  return NextResponse.json(services);
}
