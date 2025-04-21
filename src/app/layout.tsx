import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

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
  <html lang="pt-br">
   <body>
    <Navbar />
    <main>{children}</main>
   </body>
  </html>
 );
}
