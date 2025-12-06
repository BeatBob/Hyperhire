import { NextResponse } from 'next/server';
import type { HeroData } from '@/types/landing';

const heroData: HeroData = {
  tags: [
    { label: '풀타임, 파트타임', variant: 'outline' },
    { label: '해외 개발자 활용 서비스', variant: 'solid' },
  ],
  title: '최고의 실력을 가진\n외국인 인재를 찾고 계신가요?',
  subtitle: '법률 및 인사관리 부담없이\n1주일 이내에 원격으로 채용해보세요.',
  note: '개발자가 필요하신가요?',
  cta: '문의하기',
  salaryHighlight: '월 100만원',
  badges: ['한국어 능력', '업무 수행 능력', '겸업 여부', '평판 조회'],
};

export async function GET() {
  return NextResponse.json(heroData);
}
