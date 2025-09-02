export interface SocialLink {
  name: string;
  url: string;
}

export interface Socials {
  facebook: SocialLink;
  linkedin: SocialLink;
  github: SocialLink;
}
export interface NavigationItem {
  name: string;
  url: string;
}

export interface BlogNavigationItem {
  name: string;
  url: string;
}

export interface CommonData {
  username: string;
  socials: Socials[];
  navigation: NavigationItem[];
  blogNavigation: NavigationItem[];
}
