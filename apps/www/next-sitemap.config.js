/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://viralsliceco.com',
  generateRobotsTxt: true,
  exclude: ['/admin/*', '/api/*', '/get-started', '/thanks'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/', '/get-started', '/thanks'],
      },
    ],
    additionalSitemaps: [
      'https://viralsliceco.com/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority for different pages
    let priority = 0.7;
    let changefreq = 'monthly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path === '/brands' || path === '/creators') {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path === '/blog') {
      priority = 0.9;
      changefreq = 'daily';
    } else if (path.startsWith('/blog/')) {
      priority = 0.8;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};

export default config;
