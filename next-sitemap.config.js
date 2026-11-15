/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ovansa.me',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  autoLastmod: false,
  exclude: ['/admin', '/private-page', '/opengraph-image'],
  transform: async (config, path) => {
    const isArticle = path.startsWith('/blogpost/');
    const priorities = {
      '/': 1,
      '/about': 0.8,
      '/resume': 0.9,
      '/blog': 0.8,
      '/consulting': 0.7,
      '/contact': 0.6,
    };

    return {
      loc: path,
      changefreq: isArticle ? 'yearly' : 'monthly',
      priority: isArticle ? 0.7 : priorities[path] || 0.5,
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
  },
};
