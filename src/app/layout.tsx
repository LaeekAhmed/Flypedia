import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "flypedia",
   description: "Discover airlines and their flight status!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang='en'>
         <body className={inter.className}>
            <Navbar />
            {children}
            <Footer />
         </body>
         <Analytics />
         <script async src='https://analytics.umami.is/script.js' data-website-id='0baa8f92-8ee2-43d0-b7ae-426caf229772'></script>
      </html>
   );
}
