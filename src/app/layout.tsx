import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter, Sora } from "next/font/google";

const inter = Inter({
 subsets: ["latin"],
 variable: "--font-inter",
 display: "swap",
});

const sora = Sora({
 subsets: ["latin"],
 variable: "--font-sora",
 display: "swap",
});

export const metadata: Metadata = {
 title: "Portfólio | Enzo Ferracini",
 description: "Desenvolvedor Web",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="pt-br" className={`${inter.variable} ${sora.variable}`}>
   <body>
    <Navbar />
    <main>{children}</main>
   </body>
  </html>
 );
}
