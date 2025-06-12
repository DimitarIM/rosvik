export type GameOverViewProps = {
    bgImageAlt: string;
    pageTitle: string;
    aboutText: string[];
    imageOneSrc: string;
    imageOneAlt: string;
    imageTwoSrc: string;
    imageTwoAlt: string;
    gameLoopTitle: string;
    gameLoopText: string[];
    managementBoxText:string[];
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
