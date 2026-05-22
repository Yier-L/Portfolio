import { projects } from '@/data/projects';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

  // collect static routes
  const routes = ['/', '/blog', '/projects', '/about', '/contact'];

  // blog posts from content folder
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  try {
    const files = await fs.readdir(blogDir);
    for (const f of files) {
      if (f.endsWith('.mdx') || f.endsWith('.md')) {
        const name = f.replace(/\.(mdx|md)$/i, '');
        routes.push(`/blog/${name}`);
      }
    }
  } catch {
    // ignore
  }

  // project pages
  projects.forEach((p) => routes.push(`/projects#${p.id}`));

  const now = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map(
        (r) => `<url><loc>${baseUrl}${r}</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq></url>`
      )
      .join('\n')}
  </urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
