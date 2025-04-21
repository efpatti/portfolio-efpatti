"use client";

export default function LandingPage() {
 return (
  <div className="overflow-x-hidden">
   <section id="inicio" className="flex justify-center items-center h-screen">
    <h1 className="text-4xl font-bold text-white">Início</h1>
   </section>

   <section id="sobre" className="flex justify-center items-center h-screen">
    <h1 className="text-4xl font-bold text-white">Sobre nós</h1>
   </section>

   <section id="catalogo" className="flex justify-center items-center h-screen">
    <h1 className="text-4xl font-bold text-white">Catálogo</h1>
   </section>

   <section id="contato" className="flex justify-center items-center h-screen">
    <h1 className="text-4xl font-bold text-white">Fale Conosco</h1>
   </section>
  </div>
 );
}
