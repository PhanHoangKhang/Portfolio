export type Experience = {
  number: string;
  company: string;
  role: string;
  type: string;
  period: string;
  logo?: string;
  description: string;
  technologies: string[];
  bullets: string[];
};

export type Project = {
  number: string;
  name: string;
  type: string;
  period: string;
  role: string;
  description: string;
  technologies: string[];
  github?: string;
  image?: string;
  bullets: string[];
};

export type Activity = {
  number: string;
  organization: string;
  role: string;
  type: string;
  period: string;
  description: string;
  image: string;
  bullets: string[];
};