"use client";

export default function LandingPage() {
 return (
  <div className="overflow-x-hidden">
   {/* Seção Início */}
   <section
    id="inicio"
    className="flex justify-center items-center h-screen bg-blue-500"
   >
    <h1 className="text-4xl font-bold text-white">Início</h1>
   </section>

   {/* Seção Sobre nós */}
   <section
    id="sobre"
    className="flex justify-center items-center h-screen bg-green-500"
   >
    <h1 className="text-4xl font-bold text-white">Sobre nós</h1>
   </section>

   {/* Seção Catálogo */}
   <section
    id="catalogo"
    className="flex justify-center items-center h-screen bg-red-500"
   >
    <h1 className="text-4xl font-bold text-white">Catálogo</h1>
   </section>

   {/* Seção Fale Conosco */}
   <section
    id="contato"
    className="flex justify-center items-center h-screen bg-purple-500"
   >
    <h1 className="text-4xl font-bold text-white">Fale Conosco</h1>
   </section>
  </div>
 );
}
