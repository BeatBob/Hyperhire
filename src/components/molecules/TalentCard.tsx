'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Talent } from '@/types/landing';
import { cn } from '@/lib/cn';

type TalentCardProps = {
  talent: Talent;
  isActive?: boolean;
  index?: number;
};

export function TalentCard({ talent, isActive = false, index = 0 }: TalentCardProps) {
  return (
    <div
      className={cn(
        'w-[240px] rounded-[24px] bg-white px-5 py-6 shadow-[0_24px_60px_rgba(0,0,0,0.25)] md:w-[270px] md:rounded-[28px] md:px-6 md:py-7',
        isActive ? 'z-10' : 'opacity-85',
      )}>
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.15,
        }}>
        <div className="flex flex-col items-center text-center">
          <div className="relative h-20 w-20 overflow-hidden rounded-full border border-gray-200 shadow-[0_10px_25px_rgba(0,0,0,0.12)] md:h-24 md:w-24">
            <Image src={talent.avatar} alt={talent.name} fill className="object-cover" sizes="96px" priority />
            <span className="absolute -right-1 -bottom-1 rounded-full bg-white p-1 shadow">
              <Image src={talent.countryFlag} alt="국기" width={16} height={12} className="h-4 w-5 object-cover" />
            </span>
          </div>
          <div className="mt-4 space-y-2 md:mt-5">
            <div className="text-xl font-extrabold text-gray-900 md:text-2xl">{talent.name}</div>
            <p className="text-sm font-extrabold text-[#246bde] md:text-base">
              {talent.role} <span className="text-[#7c52ff]">· {talent.experience}</span>
            </p>
          </div>
          <div className="mt-4 flex w-full flex-wrap items-center justify-center gap-2 text-xs font-semibold text-gray-700 md:mt-5 md:text-sm">
            {talent.skills.map((skill) => (
              <span key={skill} className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 shadow-inner md:px-3.5 md:py-2">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
