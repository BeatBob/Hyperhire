import Image from 'next/image';
import type { FooterData } from '@/types/landing';

type FooterSectionProps = {
  footer: FooterData;
};

const iconMap: Record<string, JSX.Element> = {
  code: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  person: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  ),
  kor: (
    <div className="flex h-6 w-6 items-center justify-center rounded bg-slate-200 text-[10px] font-bold text-slate-700">
      KOR
    </div>
  ),
  gear: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export function FooterSection({ footer }: FooterSectionProps) {
  return (
    <footer className="bg-[#FBFBFB] text-slate-800">
      <div className="mx-auto container space-y-10 px-5 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div className="space-y-4">
            <Image src="/hyperhire-logo-colored.png" alt="hyperhire" width={187} height={34} />
            <p className="text-sm font-bold leading-relaxed text-slate-600">{footer.company.description}</p>
            <div className="space-y-1 text-[13px] font-bold text-slate-600">
              <p>{footer.company.phone}</p>
              <p>{footer.company.email}</p>
            </div>
          </div>
          <div className="grid gap-2 grid-cols-2 lg:grid-cols-4">
            {footer.navigation.map((item) => (
              <div key={item.title} className="flex flex-col items-start gap-4 rounded-xl bg-white px-4 py-4 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                  {item.icon && iconMap[item.icon]}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold leading-tight text-slate-800">{item.title}</p>
                  <button className="mt-2 flex items-center gap-1 text-xs font-bold text-slate-600">
                    {item.cta}
                    <span className="border border-black p-1 rounded-md">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-10 md:gap-4 text-[13px] grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-bold text-slate-700">상호명</p>
            <p className="mt-2 font-semibold">{footer.legal.businessName}</p>
            <p className="font-semibold text-slate-500">{footer.legal.businessNameEn}</p>
          </div>
          <div>
            <p className="font-bold text-slate-700">대표 CEO</p>
            <p className="mt-2 font-semibold">{footer.legal.rep}</p>
            <p className="font-semibold text-slate-500">{footer.legal.repEn}</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="font-bold text-slate-700">사업자등록번호 CIN</p>
            <p className="mt-2 font-semibold">{footer.legal.corpNum}</p>
            {footer.legal.regNum && <p className="mt-1 font-semibold text-slate-700">{footer.legal.regNum}</p>}
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="font-bold text-slate-700">주소 ADDRESS</p>
            {footer.legal.addressKo && <p className="mt-2 font-semibold">{footer.legal.addressKo}</p>}
            {footer.legal.addressEn && <p className="mt-1 font-semibold text-slate-500">{footer.legal.addressEn}</p>}
          </div>
        </div>

        <p className="text-[13px] font-bold text-slate-600">© 2023 Hyperhire</p>
      </div>
    </footer>
  );
}
