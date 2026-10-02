import { projects } from "./data/projects";

const baseUrl = "https://carldev.vercel.app";

export default function sitemap() {
  const caseStudies = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    ...caseStudies,
    {
      url: `${baseUrl}/skills`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/certificates`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/resume/view`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/certificates/html-fundamentals/view`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6
    },
    {
      url: `${baseUrl}/certificates/javascript/view`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6
    },
    {
      url: `${baseUrl}/certificates/responsive-web-design/view`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6
    },
    {
      url: `${baseUrl}/certificates/front-end-development-libraries/view`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6
    },
    {
      url: `${baseUrl}/certificates/relational-database/view`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6
    },
    {
      url: `${baseUrl}/certificates/relational-database-v8/view`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6
    },
    {
      url: `${baseUrl}/certificates/front-end-development-libraries-v8/view`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6
    },
    {
      url: `${baseUrl}/certificates/legacy-javascript-algorithms-v7/view`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6
    },
    {
      url: `${baseUrl}/certificates/legacy-responsive-web-design-v8/view`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6
    }
  ];
}
