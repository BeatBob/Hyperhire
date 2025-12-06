'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import type { Talent } from '@/types/landing';
import { TalentCard } from '@/components/molecules/TalentCard';

type TalentCarouselProps = {
  talents: Talent[];
};

export function TalentCarousel({ talents }: TalentCarouselProps) {
  const [index, setIndex] = useState(0);
  const [cardOffset, setCardOffset] = useState(70);

  useEffect(() => {
    const updateOffset = () => {
      setCardOffset(window.innerWidth >= 768 ? 110 : 70);
    };

    updateOffset();
    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, []);

  useEffect(() => {
    if (!talents.length) return undefined;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % talents.length);
    }, 5000);
    return () => clearInterval(id);
  }, [talents.length]);

  const visibleTalents = useMemo(() => {
    if (!talents.length) return [];
    const prev = (index - 1 + talents.length) % talents.length;
    const next = (index + 1) % talents.length;
    return [talents[prev], talents[index], talents[next]];
  }, [index, talents]);

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + talents.length) % talents.length);
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % talents.length);
  };

  return (
    <div className="relative mx-auto flex w-full max-w-[500px] items-center justify-center px-4 md:px-0">
      <button
        type="button"
        aria-label="이전 인재"
        className="absolute left-3 top-1/2 z-30 h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white transition-all md:-left-12 md:flex hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)]"
        onClick={goPrev}>
        <Image src="/caret-right.png" alt="이전" width={28} height={28} className="rotate-180" />
      </button>
      <div className="pointer-events-none relative flex h-[350px] w-full items-center justify-center overflow-visible md:h-[400px] min-w-[380px]">
        <AnimatePresence mode="popLayout">
          {visibleTalents.map((talent, i) => {
            const talentIndex =
              i === 0 ? (index - 1 + talents.length) % talents.length : i === 1 ? index : (index + 1) % talents.length;
            return (
              <motion.div
                key={`talent-${talentIndex}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: i === 1 ? 1 : 0.5,
                  x: i === 0 ? -cardOffset : i === 2 ? cardOffset : 0,
                  scale: i === 1 ? 1 : 0.75,
                }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="pointer-events-auto absolute -top-3 left-[4.3rem] md:left-20 md:translate-x-0"
                style={{ zIndex: i === 1 ? 20 : 10 }}>
                <TalentCard talent={talent} isActive={i === 1} index={i} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <button
        type="button"
        aria-label="다음 인재"
        className="absolute -right-0 top-1/2 z-30 h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white transition-all md:-right-24 md:flex hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)]"
        onClick={goNext}>
        <Image src="/caret-right.png" alt="다음" width={28} height={28} />
      </button>
    </div>
  );
}
