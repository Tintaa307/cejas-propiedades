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
    ],
  },
}

export default nextConfig
