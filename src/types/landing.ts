export type HeroTag = {
  label: string;
  variant?: 'solid' | 'outline';
};

export type HeroData = {
  tags: HeroTag[];
  title: string;
  subtitle: string;
  note: string;
  cta: string;
  salaryHighlight: string;
  badges: string[];
};

export type Stat = {
  title: string;
  description: string;
};

export type Service = {
  name: string;
  icon: string;
};

export type Talent = {
  name: string;
  role: string;
  experience: string;
  countryFlag: string;
  skills: string[];
  avatar: string;
};

export type FooterLink = {
  title: string;
  cta: string;
  icon?: string;
};

export type FooterData = {
  company: {
    name: string;
    description: string;
    phone: string;
    email: string;
  };
  navigation: FooterLink[];
  legal: {
    businessName: string;
    businessNameEn?: string;
    rep: string;
    repEn?: string;
    corpNum: string;
    regNum?: string;
    addressKo?: string;
    addressEn?: string;
  };
};
