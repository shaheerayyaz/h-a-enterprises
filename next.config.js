/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // Tells Next.js to build static HTML/CSS files
  images: {
    unoptimized: true,       // Required because GitHub Pages doesn't support the Next.js image server
  },
  basePath: '/h-a-enterprises',      // Matches your exact GitHub repository name
};

export default nextConfig;
