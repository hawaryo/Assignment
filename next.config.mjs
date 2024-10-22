/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https", // Adjust protocol if necessary (e.g., 'http')
        hostname: "dummyimage.com", // Replace with your domain
        pathname: "**", // Allow images from all paths on the domain
      },
    ],
  },
};

export default nextConfig;
