import { json } from '@sveltejs/kit';

const website = 'https://my-portfolio-39ntj11wu-officialryder1s-projects.vercel.app/';

export async function GET() {
  const pages = [
    '',
    '/about',
    '/projects',
    '/contact'
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(page => `
        <url>
          <loc>${website}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>
      `).join('')}
    </urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}