export interface NavLinks {
  id: string;
  name: string;
}

export interface ExperienceContent {
  title: string;
  date: string;
  description: string;
}

export interface WorkExperience {
  id: string;
  name: string;
  content: ExperienceContent[];
}
