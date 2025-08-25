// next-sitemap.config.js - Root level file
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://davidrogers.com', // Update with actual domain
  generateRobotsText: true,
  generateIndexSitemap: false,
  exclude: ['/404'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : 'monthly',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    }
  },
}
