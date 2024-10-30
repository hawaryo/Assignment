import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyimage.com",
        pathname: "**",
      },
    ],
  },
  //
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  //
};

export default nextConfig;
