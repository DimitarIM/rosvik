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

export type MemberPageProps = {
  params: {
    slug: string;
  };
}
