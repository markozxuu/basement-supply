import { NextApiRequest, NextApiResponse } from 'next';

const hostname = 'https://basement-supply.vercel.app/';

interface Types {
  pathname: string;
  priority: number;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${hostname}</loc>
      <priority>1</priority>
    </url>
  </urlset> 
  `.trim();
  res.writeHead(200, { 'Content-Type': 'application/xml' });
  return res.end(sitemap);
}

export default handler;
