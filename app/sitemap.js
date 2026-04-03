const baseUrl = "https://carldev.vercel.app";

export default function sitemap() {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
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
    }
  ];
}
