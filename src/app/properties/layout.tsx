import { FilterProvider } from "@/context/FilterContext"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <FilterProvider>{children}</FilterProvider>
}
