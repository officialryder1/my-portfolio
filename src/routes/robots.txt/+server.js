export async function GET() {
  return new Response(
    `User-agent: *
Allow: /
Sitemap: https://my-portfolio-tau-silk-83.vercel.app/sitemap.xml`,
    {
      headers: {
        'Content-Type': 'text/plain'
      }
    }
  );
}