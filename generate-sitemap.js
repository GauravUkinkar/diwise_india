const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://diwise.in' });
const writeStream = createWriteStream('./public/sitemap.xml');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog', changefreq: 'daily', priority: 0.9 },
  { url: '/brandingAndDesign', changefreq: 'weekly', priority: 0.8 },
  { url: '/digitalMarketing', changefreq: 'weekly', priority: 0.8 },
  { url: '/publicRelations', changefreq: 'weekly', priority: 0.8 },
  { url: '/websiteDevelopment', changefreq: 'weekly', priority: 0.8 },
  { url: '/businessLaunchpad', changefreq: 'weekly', priority: 0.8 },
  { url: '/privacypolicy', changefreq: 'monthly', priority: 0.7 },
  { url: '/termsandconditions', changefreq: 'monthly', priority: 0.7 },
];

(async () => {
  // Pipe sitemap to file before writing links
  sitemap.pipe(writeStream);

  links.forEach(link => sitemap.write(link));
  sitemap.end();

  await streamToPromise(sitemap);
  console.log('✅ Sitemap generated successfully!');
})();
