"use client";
import Portfolio from "@/components/portfolio";

export default function LandingPage() {
 return (
  <div className="flex flex-col w-full overflow-x-hidden">
   <section id="inicio" className="flex justify-center items-center h-screen">
    <h1 className="text-4xl font-bold text-white">Início</h1>
   </section>

   <section
    id="sobre"
    className="flex justify-center items-center h-screen w-full"
   >
    <h1 className="text-4xl font-bold text-white">Sobre nós</h1>
   </section>

   <Portfolio />

   <section id="contato" className="flex justify-center items-center h-screen">
    <h1 className="text-4xl font-bold text-white">Fale Conosco</h1>
   </section>
  </div>
 );
}
