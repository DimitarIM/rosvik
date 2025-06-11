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
    image: string
}

export type LogoProps = {
    image: string
}

export type FullScreenMenuProps = {
  isOpen: boolean;
  onClose: () => void;
}