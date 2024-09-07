import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import {Analytics} from "@vercel/analytics/react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "flypedia",
  description: "Discover airlines and their flight status!",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <NextTopLoader color="rgb(59 130 246)" showSpinner={false} />
            {children}
          </main>
          <Footer />
        </div>
      </body>
      <Analytics />
      <script
        async
        src="https://analytics.umami.is/script.js"
        data-website-id="0baa8f92-8ee2-43d0-b7ae-426caf229772"
      ></script>
    </html>
  );
}
