// src/app/layout.tsx
"use client";

import { Provider } from "react-redux";
import store from "@/store";
import Sidebar from "@/components/sidebar";
import { HashListener } from "@/components/hash_listener";
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
    <body
     className="min-h-screen bg-neutral-900 text-white flex justify-center"
     suppressHydrationWarning
    >
     <HashListener />

     <div className="flex w-full max-w-7xl">
      {/* Sidebar fixa na esquerda dentro da largura máxima */}
      <Sidebar />

      {/* Conteúdo principal com largura calculada */}
      <div className="ml-[250px] w-[calc(100%-250px)] px-4">
       <main>{children}</main>
      </div>
     </div>
    </body>
   </html>
  </Provider>
 );
}
