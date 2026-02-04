/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ousobkdlgxyowzipmxab.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
