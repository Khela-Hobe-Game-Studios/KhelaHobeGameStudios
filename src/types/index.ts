export interface Game {
  id: string;
  name: string;
  image: string;
  link: string;
  description?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  bio?: string;
}
