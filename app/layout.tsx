import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { NextUIProvider } from "@nextui-org/react"
import Navbar from "./_components/Navbar"
import ReactQueryProvider from "./_components/ReactQueryProvider"
import RecoilRootProvider from "./RecoilRootProvider"
import GoogleOAuthProviderComponent from "./GoogleOAuthProvider"
import { Toaster } from "react-hot-toast"
import { Montserrat } from "next/font/google"
const font = Montserrat({ subsets: ["latin-ext"] })

export const metadata: Metadata = {
  title: "Rooms on Rent",
  description: "Find rooms on rent in your city",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RecoilRootProvider>
          <ReactQueryProvider>
            <GoogleOAuthProviderComponent>
              <NextUIProvider>
                <div className="overflow-x-hidden">{children}</div>
              </NextUIProvider>
            </GoogleOAuthProviderComponent>
          </ReactQueryProvider>
        </RecoilRootProvider>
        <Toaster />
      </body>
    </html>
  )
}
