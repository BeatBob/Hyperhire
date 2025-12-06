import Image from 'next/image';
import type { Service } from '@/types/landing';

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="flex w-full items-center gap-4 rounded-lg border border-white/15 bg-white/20 p-3 text-sm font-semibold text-white shadow-[0_12px_38px_rgba(0,0,0,0.12)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18">
      <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-md bg-white/40 shadow-inner">
        <Image src={service.icon} alt={service.name} width={24} height={24} className="h-6 w-6 object-contain" />
      </span>
      <span className="whitespace-nowrap">{service.name}</span>
    </div>
  );
}
