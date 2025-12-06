import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type PillProps = {
  children: ReactNode;
  variant?: 'solid' | 'outline';
  className?: string;
};

export function Pill({ children, variant = 'solid', className }: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-tight',
        variant === 'solid'
          ? 'border-cyan-400/20 bg-cyan-400/25 text-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur'
          : 'border-white/30 bg-white/10 text-white/90',
        className,
      )}>
      {children}
    </span>
  );
}
