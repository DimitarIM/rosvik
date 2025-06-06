export type TeamColumnProps = {
  team: string,
}

export type MemberParamsProps = {
  params: {
    member: string
  }
}

export type Member = {
  title?: string,
  name?: string,
  linkedin?: string,
  discord?: string,
  website?: string,
  games?: string[],
  team?: string,
  image?: string,
  quote?: string,
  work?: string[],
}
