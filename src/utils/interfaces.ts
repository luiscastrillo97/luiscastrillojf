export type IconName =
  | "github"
  | "linkedin"
  | "instagram"
  | "twitter"
  | "openLink";

export interface SocialMediaInfo {
  url: string | undefined;
  name: IconName;
}
