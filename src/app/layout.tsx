import type { Metadata } from "next"
import "./globals.css"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar/Navbar"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: "Home | Unicelestia ",
  description:
    "Unicelestia is a pharmaceutical company that provides a wide range of medicines and health products."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased light`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
