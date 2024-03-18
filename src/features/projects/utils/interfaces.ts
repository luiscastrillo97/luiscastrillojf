export type ProjectName = "urlShortener" | "simpleTodo" | "advanceTodo";

export interface ProjectContent {
  name: ProjectName;
  githubUrl: string | undefined;
  deployUrl: string | undefined;
  title: string;
  description: string;
  technologies: string[];
}
