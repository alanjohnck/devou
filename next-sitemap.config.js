/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:"http://localhost:3000",
  generateRobotsTxt: true,
  exclude: ['/admin/*', '/private/*'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://your-domain.com/server-sitemap.xml',
    ],
  },
}