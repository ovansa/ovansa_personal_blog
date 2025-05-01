/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ovansa.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin', '/private-page'],
  robotsTxtOptions: {
    // additionalSitemaps: ['https://ovansa.com/server-sitemap.xml'],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
