export interface Game {
  id: string;
  name: string;
  link?: string;
  description?: string;
  underConstruction?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  bio?: string;
}
