import { NavLinks, WorkExperience } from "./interfaces";

export const navLinks: NavLinks[] = [
  {
    id: "about",
    name: "About",
  },
  {
    id: "jobs",
    name: "Experience",
  },
  {
    id: "projects",
    name: "Work",
  },
  {
    id: "contact",
    name: "Contact",
  },
];

export const workExperience: WorkExperience[] = [
  {
    id: "current",
    name: "Magdalena University",
    content: [
      {
        title: "Monitoring systems developer",
        date: "Oct 2021 - Jun 2023",
        description:
          "Implement a wireless sensor network to monitor the conditions of banana crops in Magdalena, taking data such as temperature, humidity, among others.",
      },
      {
        title: "Electronic Engineer",
        date: "Nov 2023 - Dec 2023",
        description:
          "Develop literature reviews in Scopus and Web of Science using search equations to perform bibliometric analysis, create co-occurrence maps and present the results visually. In addition, review and conduct technical reports and papers on solar farm decommissioning to identify and compile current best practices and recommendations.",
      },
    ],
  },
  // {
  //   id: "2023-3",
  //   name: "Universidad del Magdalena",
  //   content: [
  //     {
  //       title: "Monitoring systems developer",
  //       date: "Oct 2021 - Jun 2023",
  //       description:
  //         "Implement a wireless sensor network to monitor the conditions of banana crops in Magdalena, taking data such as temperature, humidity, among others.",
  //     },
  //   ],
  // },
  // {
  //   id: "2023-1",
  //   name: "Universidad del Magdalena",
  //   content: [
  //     {
  //       title: "Electronic Engineer",
  //       date: "Nov 2023 - Dec 2023",
  //       description:
  //         "Develop literature reviews in Scopus and Web of Science using search equations to perform bibliometric analysis, create co-occurrence maps and present the results visually. In addition, review and conduct technical reports and papers on solar farm decommissioning to identify and compile current best practices and recommendations.",
  //     },
  //   ],
  // },
];

export const socialMedia = [
  {
    url: "https://github.com/luiscastrillo97",
    name: "github",
  },
  {
    url: "https://www.linkedin.com/in/luiscastrillojf/",
    name: "linkedin",
  },
  {
    url: "https://www.instagram.com/luis_castrillojf/",
    name: "instagram",
  },
  {
    url: "https://twitter.com/casfer_luis",
    name: "twitter",
  },
];

export const technologies = [
  {
    name: "html",
    src: "https://skillicons.dev/icons?i=html",
  },
  {
    name: "css",
    src: "https://skillicons.dev/icons?i=css",
  },
  {
    name: "javascript",
    src: "https://skillicons.dev/icons?i=js",
  },
  {
    name: "typescript",
    src: "https://skillicons.dev/icons?i=ts",
  },
  {
    name: "react",
    src: "https://skillicons.dev/icons?i=react",
  },
  {
    name: "next",
    src: "https://skillicons.dev/icons?i=next",
  },
  {
    name: "python",
    src: "https://skillicons.dev/icons?i=python",
  },
  {
    name: "django",
    src: "https://skillicons.dev/icons?i=django",
  },
  {
    name: "postgres",
    src: "https://skillicons.dev/icons?i=postgres",
  },
  {
    name: "mongodb",
    src: "https://skillicons.dev/icons?i=mongo",
  },
  {
    name: "docker",
    src: "https://skillicons.dev/icons?i=docker",
  },
  {
    name: "aws",
    src: "https://skillicons.dev/icons?i=aws",
  },
  // {
  //   name: "azure",
  //   src: "https://skillicons.dev/icons?i=azure",
  // },
  // {
  //   name: "postman",
  //   src: "https://skillicons.dev/icons?i=postman",
  // },
  // {
  //   name: "tailwind",
  //   src: "https://skillicons.dev/icons?i=tailwind",
  // },
  // {
  //   name: "mui",
  //   src: "https://skillicons.dev/icons?i=mui",
  // },
];
