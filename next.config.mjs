/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dmcxbrwufzuvbiooeyde.supabase.co",
      },
      {
        protocol: "https",
        hostname: "cejaspropiedades.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
      },
    ],
  },
}

export default nextConfig
