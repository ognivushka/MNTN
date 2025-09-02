export interface SocialLink {
  name: string;
  url: string;
}

export interface Socials {
  facebook: SocialLink;
  linkedin: SocialLink;
  github: SocialLink;
}

export interface CommonData {
  username: string;
  socials: Socials;
}
