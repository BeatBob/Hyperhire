import { headers } from 'next/headers';
import { HeroSection } from '@/components/organisms/HeroSection';
import { FooterSection } from '@/components/organisms/FooterSection';
import type { FooterData, HeroData, Service, Stat, Talent } from '@/types/landing';

async function getBaseUrl() {
  const headerList = headers();
  const host = headerList.get('host');
  const protocol = headerList.get('x-forwarded-proto') ?? 'http';
  if (!host) {
    throw new Error('Host header is missing');
  }
  return `${protocol}://${host}`;
}

async function getLandingData() {
  const baseUrl = await getBaseUrl();
  const [heroRes, statsRes, servicesRes, talentsRes, footerRes] = await Promise.all([
    fetch(`${baseUrl}/api/hero`, { cache: 'no-store' }),
    fetch(`${baseUrl}/api/stats`, { cache: 'no-store' }),
    fetch(`${baseUrl}/api/services`, { cache: 'no-store' }),
    fetch(`${baseUrl}/api/talents`, { cache: 'no-store' }),
    fetch(`${baseUrl}/api/footer`, { cache: 'no-store' }),
  ]);

  const [hero, stats, services, talents, footer] = (await Promise.all([
    heroRes.json(),
    statsRes.json(),
    servicesRes.json(),
    talentsRes.json(),
    footerRes.json(),
  ])) as [HeroData, Stat[], Service[], Talent[], FooterData];

  return { hero, stats, services, talents, footer };
}

export default async function Home() {
  const { hero, stats, services, talents, footer } = await getLandingData();

  return (
    <main className="min-h-screen bg-white">
      <HeroSection hero={hero} stats={stats} services={services} talents={talents} />
      <FooterSection footer={footer} />
    </main>
  );
}
