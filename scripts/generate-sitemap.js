const fs = require('fs');
const path = require('path');
const glob = require('glob');

const DOMAIN = process.env.URL || 'https://sonidovivo.org';

function generateSitemap() {
    const contentDir = path.join(process.cwd(), 'content/pages');
    const pages = glob.sync('**/*.md', { cwd: contentDir });
    
    const urls = pages.map(page => {
        let slug = page.replace('.md', '');
        if (slug === 'index') {
            slug = '';
        }
        slug = slug.replace(/\/index$/, '');
        
        const filePath = path.join(contentDir, page);
        const stats = fs.statSync(filePath);
        const lastmod = stats.mtime.toISOString().split('T')[0];
        
        const isHomePage = slug === '' || slug === 'index';
        const isMainPage = ['services', 'equipment-rentals', 'contact'].includes(slug);
        const priority = isHomePage ? '1.0' : isMainPage ? '0.9' : '0.8';
        const changefreq = isHomePage ? 'daily' : isMainPage ? 'weekly' : 'monthly';
        
        return {
            loc: `${DOMAIN}/${slug}`,
            lastmod,
            changefreq,
            priority
        };
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    const outputPath = path.join(process.cwd(), 'public/sitemap.xml');
    fs.writeFileSync(outputPath, sitemap);
    console.log(`Sitemap generated successfully at ${outputPath}`);
    console.log(`Total URLs: ${urls.length}`);
}

generateSitemap();
