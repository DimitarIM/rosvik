import { ReactNode } from "react";

export type keyfeaturesProps = {
  keyfeatures: string[];
};


export type GameOverViewProps = {
    bgImageAlt: string;
    pageTitle?: string;
    aboutText: string[];
    imageOneSrc: string;
    imageOneAlt: string;
    imageTwoSrc: string;
    imageTwoAlt: string;
    gameLoopTitle?: string;
    gameLoopText?: string[];
    managementBoxText?:string[];
}

export type DownLoadButtonProps = {
    downloadButtonText: string;
    downloadButtonLink: string;
}

export type TeamColumnProps = {
  team: string;
};

export type SingleMemberProps = {
  name: string;
  title?: string;
  image?: string;
  quote?: string;
  linkedin?: string;
  github?: string;
  discord?: string;
  work?: string[];
};

export type FooterLogoProps = {
  logo: string;
  description: string | ReactNode;
}

export type MainHeroSectionProps = {
    firstText: string
    secondText: string
    thirdText: string
}

export type DownloadButtonHpProps = {
    href: string
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

export type GameLowerSectionProps = {
  title: string;
  description: string;

}

 
