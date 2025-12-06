import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type BadgeProps = {
  label: string;
  icon?: ReactNode;
  className?: string;
};

export function Badge({ label, icon, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white shadow-[0_15px_45px_rgba(0,0,0,0.18)] backdrop-blur',
        className,
      )}>
      {icon}
      {label}
    </span>
  );
}
