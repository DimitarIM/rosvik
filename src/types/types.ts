
export type TeamColumnProps = {
  team: string;
};

export type SingleMemberProps = {
  name: string;
  title: string;
  image: string;
  quote: string;
  linkedin: string;
  website: string;
  discord: string;
};

export type MainHeroSectionProps = {
    firstText: string
    secondText: string
    thirdText: string
}

export type DownloadButtonProps = {
    image: string
    alt: string
}

export type LogoProps = {
    image: string
    alt: string
}

export type FullScreenMenuProps = {
  isOpen: boolean;
  onClose: () => void;
}

export type HeaderLogoProps = {
  image: string
  alt: string
}

export type LanguageSwitchProps = {
  isMobile?: boolean; 
}

 
