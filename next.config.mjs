/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.fktm2-1.fna.fbcdn.net",
        pathname: "/**", 
      },
      {
        protocol: "https",
        hostname: "*.fbcdn.net", 
        pathname: "/**", 
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com", 
        pathname: "/**", 
      },
    ],
  },
};

export default nextConfig;
