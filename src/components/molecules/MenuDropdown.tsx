'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type MenuDropdownProps = {
  label: string;
  items: string[];
};

export function MenuDropdown({ label, items }: MenuDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className="flex items-center gap-1 text-sm font-bold text-white hover:text-white/80"
        aria-haspopup="true"
        aria-expanded={open}>
        {label}
        <Image src="/caret-down.png" alt="열기" width={12} height={12} className="mt-[1px]" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 top-[calc(100%+12px)] z-20 w-64 -translate-x-1/2 rounded-2xl border border-slate-100 bg-white text-slate-700 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <div className="border-b border-slate-100 px-4 py-3 text-sm font-semibold text-slate-900">{label}</div>
            <ul className="divide-y divide-slate-100 text-sm font-medium">
              {items.map((item) => (
                <li key={item}>
                  <button type="button" className="block w-full px-4 py-3 text-left text-slate-700 hover:bg-slate-50">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
