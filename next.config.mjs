/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "data.zanda.info",
        port: "",
        pathname: "/assets/*",
      },
      {
        protocol: "https",
        hostname: "static.shuffle.dev",
        port: "",
        pathname:
          "/components/preview/928b7c01-6cbd-4e98-803d-a6199b9aea57/assets/public/shopky-assets/new-arrival/*",
      },
    ],
  },
};

export default nextConfig;
