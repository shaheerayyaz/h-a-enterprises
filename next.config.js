/** @type {import('next').NextConfig} */
// Netlify automatically sets NETLIFY=true during its build process
const isNetlify = process.env.NETLIFY === 'true';

const nextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
  // If building on Netlify, basePath is empty. If on GitHub, it uses the subpath.
  basePath: isNetlify ? '' : '/h-a-enterprises', 
};

export default nextConfig;
