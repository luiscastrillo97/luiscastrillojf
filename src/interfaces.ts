import { SocialMediaIcon } from "./components/fixedSides/SocialIcon";
import { ProjectName } from "./components/projects/ProjectImage";

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

export interface SocialMedia {
  url: string | undefined;
  name: SocialMediaIcon;
}

export interface ProjectContent {
  name: ProjectName;
  githubUrl: string | undefined;
  deployUrl: string | undefined;
  title: string;
  description: string;
  technologies: string[];
}
