"use client";

import { Provider } from "react-redux";
import store from "@/store";
import Navbar from "@/components/Navbar";
import PageTransitionLoader from "@/components/PageTransitionLoader"; // ⬅️ Importar aqui
import { Inter, Sora } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <Provider store={store}>
   <html lang="pt-br" className={`${inter.variable} ${sora.variable}`}>
    <body>
     <Navbar />
     <PageTransitionLoader /> {/* ⬅️ Adicionado aqui */}
     <main>{children}</main>
    </body>
   </html>
  </Provider>
 );
}
