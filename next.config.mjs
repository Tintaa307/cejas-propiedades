/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dmcxbrwufzuvbiooeyde.supabase.co",
      },
    ],
  },
}

export default nextConfig
