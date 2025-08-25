// app/sitemap.js
export default function sitemap() {
  const baseUrl = 'https://davidrogers.com' // Update with actual domain
  const currentDate = new Date().toISOString()

  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mems`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gamma`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/qoipr`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]

  return routes
}