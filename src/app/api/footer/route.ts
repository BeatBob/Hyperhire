import { NextResponse } from 'next/server';
import type { FooterData } from '@/types/landing';

const footerData: FooterData = {
  company: {
    name: '하이퍼하이어',
    description: '우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.',
    phone: '010-0000-0000',
    email: 'aaaaa@naver.com',
  },
  navigation: [
    { title: '해외 개발자 원격 채용', cta: '바로가기', icon: 'code' },
    { title: '외국인 원격 채용 (비개발)', cta: '바로가기', icon: 'person' },
    { title: '한국어 가능 외국인 채용', cta: '바로가기', icon: 'kor' },
    { title: '해외 개발자 활용 서비스', cta: '바로가기', icon: 'gear' },
  ],
  legal: {
    businessName: '하이퍼하이어',
    businessNameEn: 'Hyperhire India Private Limited',
    rep: '김주현',
    repEn: 'Juhyun Kim',
    corpNum: '427-86-01187',
    regNum: 'U74110DL2016PTC290812',
    addressKo: '서울특별시 강남대로 479, 지하 1층 238호',
    addressEn: 'D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India',
  },
};

export async function GET() {
  return NextResponse.json(footerData);
}
