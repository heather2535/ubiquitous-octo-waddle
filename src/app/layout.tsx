import type { Metadata } from "next"
import { Commissioner } from 'next/font/google'
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const commissioner = Commissioner({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Projects | Bella Davies",
  description: "Navigating the digital landscape for success",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${commissioner.className} bg-white text-black`}>
        <Header/>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
