/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,


  output: "export",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
};

export default nextConfig;
