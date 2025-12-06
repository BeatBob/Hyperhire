'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { StatCard } from '@/components/molecules/StatCard';
import { ServiceCard } from '@/components/molecules/ServiceCard';
import { TalentCarousel } from '@/components/organisms/TalentCarousel';
import { MenuDropdown } from '@/components/molecules/MenuDropdown';
import type { HeroData, Service, Stat, Talent } from '@/types/landing';

type HeroSectionProps = {
  hero: HeroData;
  stats: Stat[];
  services: Service[];
  talents: Talent[];
};

function ServiceCarousel({ services }: { services: Service[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length]);

  const cardWidth = 220;
  const gap = 16;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mt-4 overflow-hidden pb-8 hidden md:block">
      <div className="relative">
        <motion.div
          className="flex gap-4"
          animate={{
            x: -currentIndex * (cardWidth + gap),
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}>
          {[...services, ...services, ...services].map((service, index) => (
            <div
              key={`${service.name}-${index}`}
              className="flex-shrink-0"
              style={{
                marginLeft: index === 0 ? 'max(1.25rem, calc((100vw - 72rem) / 2 + 1.25rem))' : '0',
                width: `${cardWidth}px`,
              }}>
              <ServiceCard service={service} />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export function HeroSection({ hero, stats, services, talents }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0bd1cd] via-[#0b9de4] to-[#0c7ad3] text-white">
      <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] right-10 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_35%)]" />

      <div className="mx-auto flex container flex-col gap-10 px-5 pb-16 pt-8 lg:px-8 lg:pt-12">
        <header className="flex items-center justify-between text-sm font-bold">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Image src="/hyperhire-logo-white.png" alt="hyperhire" width={140} height={36} priority />
          </Link>
          <nav className="hidden items-center justify-center gap-8 font-bold md:flex">
            <MenuDropdown
              label="채용"
              items={['해외 개발자 원격 채용', '외국인 원격 채용 (비개발 직군)', '한국어 가능 외국인 채용']}
            />
            <span className="text-sm font-bold">해외 개발자 활용 서비스</span>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden rounded-xl bg-white px-5 py-2 font-bold text-sky-600 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-xl md:block">
              {hero.cta}
            </button>
            <button className="flex flex-col gap-1 md:hidden" aria-label="메뉴">
              <span className="h-0.5 w-6 bg-white"></span>
              <span className="h-0.5 w-6 bg-white"></span>
              <span className="h-0.5 w-6 bg-white"></span>
            </button>
          </div>
        </header>

        <div className="flex flex-col items-start gap-10 lg:grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative w-full space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative inline-flex rounded-lg bg-white px-4 py-2 text-sm font-bold text-[#00C4B4] shadow-[0_4px_12px_rgba(0,0,0,0.1)] after:absolute after:left-6 after:top-full after:border-[6px] after:border-transparent after:border-t-white after:content-['']">
              풀타임, 파트타임
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="whitespace-pre-line text-3xl font-extrabold leading-snug tracking-normal sm:text-4xl sm:leading-snug md:text-[42px] md:leading-[1.3]">
              {hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="whitespace-pre-line text-lg font-semibold leading-relaxed text-white/90">
              {hero.subtitle}
            </motion.p>

            {/* Mobile: Carousel after subtitle */}
            <div className="w-full lg:hidden">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="flex justify-center">
                <div className="relative flex flex-col items-center gap-6">
                  <div className="relative flex items-center gap-2 rounded-lg bg-white px-3 py-2.5 text-base font-bold text-[#00C696] shadow-[0_8px_16px_rgba(0,0,0,0.12)] after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-[6px] after:border-transparent after:border-t-white after:content-['']">
                    <span className="flex h-5 w-5 items-center justify-center rounded bg-[#E8FFF8] text-sm">$</span>
                    {hero.salaryHighlight}
                  </div>
                  <TalentCarousel talents={talents} />
                </div>
              </motion.div>
            </div>

            {/* Mobile: Badges after carousel */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-3 text-sm font-semibold lg:hidden">
              {hero.badges.map((item) => (
                <div key={item} className="flex items-center gap-2 text-white">
                  <div className="flex h-5 w-5 items-center justify-center rounded bg-white">
                    <svg className="h-4 w-4 text-[#00C696]" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold">
              <div className="cursor-pointer text-white/90 hover:text-white lg:text-white/90 lg:hover:text-white">
                <span className="text-[#CBFF00] underline decoration-2 underline-offset-4 lg:text-white/90">
                  {hero.note}
                </span>
              </div>
            </motion.div>

            <div className="hidden gap-6 lg:grid lg:grid-cols-3">
              {stats.map((stat) => (
                <StatCard stat={stat} key={stat.title} />
              ))}
            </div>
          </div>

          <div className="relative hidden flex-col items-center gap-6 lg:flex">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="relative flex items-center gap-2 rounded-lg bg-white px-3 py-2.5 text-base font-bold text-[#00C696] shadow-[0_8px_16px_rgba(0,0,0,0.12)] after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-[6px] after:border-transparent after:border-t-white after:content-[''] md:px-4 md:py-3 md:text-lg">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-[#E8FFF8] text-sm md:h-6 md:w-6 md:text-base">
                $
              </span>
              {hero.salaryHighlight}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="-ml-10">
              <TalentCarousel talents={talents} />
            </motion.div>
          </div>
        </div>
      </div>

      <ServiceCarousel services={services} />
    </section>
  );
}
