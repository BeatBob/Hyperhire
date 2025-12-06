import { NextResponse } from 'next/server';
import type { Talent } from '@/types/landing';

const talents: Talent[] = [
  {
    name: 'Abhishek Gupta',
    role: '마케팅',
    experience: '2y+',
    countryFlag: '/flag.png',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리'],
    avatar: '/avatar.png',
  },
  {
    name: 'Abhishek Gupta',
    role: '마케팅',
    experience: '2y+',
    countryFlag: '/flag.png',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리'],
    avatar: '/avatar.png',
  },
  {
    name: 'Abhishek Gupta',
    role: '마케팅',
    experience: '2y+',
    countryFlag: '/flag.png',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리'],
    avatar: '/avatar.png',
  },
];

export async function GET() {
  return NextResponse.json(talents);
}
