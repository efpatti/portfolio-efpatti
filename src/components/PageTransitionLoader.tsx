"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { GiBatMask } from "react-icons/gi";
import { RootState } from "@/store";

const MIN_LOADING_TIME = 2000; // 2 segundos

export default function PageTransitionLoader() {
 const sectionName = useSelector(
  (state: RootState) => state.section.sectionName
 );
 const [isVisible, setIsVisible] = useState(false);
 const [startLoading, setStartLoading] = useState(false);

 useEffect(() => {
  if (!sectionName) return; // Não faz nada se não houver seção

  setStartLoading(true); // Começa o "loading"
  setIsVisible(true); // Torna o loader visível imediatamente

  // Quando o "loading" começa, inicia o timer para garantir o tempo mínimo
  const timeout = setTimeout(() => {
   setStartLoading(false); // Fecha o loader após o tempo mínimo
  }, MIN_LOADING_TIME);

  return () => clearTimeout(timeout); // Limpa o timeout caso o componente seja desmontado
 }, [sectionName]);

 useEffect(() => {
  if (!startLoading) {
   // Se o loading não estiver mais ativo, espera mais um tempo para a animação de saída
   const timeout = setTimeout(() => {
    setIsVisible(false); // Esconde o loader após o tempo mínimo
   }, 300); // Espera a animação de saída do loader

   return () => clearTimeout(timeout); // Limpa o timeout da animação de saída
  }
 }, [startLoading]);

 return (
  <AnimatePresence>
   {isVisible && (
    <motion.div
     className="fixed inset-0 z-50 bg-yellow-600 text-black flex items-center justify-center overflow-hidden"
     initial={{ clipPath: "circle(0% at 50% 50%)" }}
     animate={{ clipPath: "circle(150% at 50% 50%)" }}
     exit={{ clipPath: "circle(0% at 50% 50%)" }}
     transition={{ duration: 0.6, ease: "easeInOut" }}
    >
     <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="text-2xl font-semibold flex flex-col justify-center items-center"
     >
      <GiBatMask className="text-9xl text-black drop-shadow-lg animate-pulse" />
      <h1 className="font-bold mt-4">Enzo Ferracini</h1>
      <p className="text-lg mt-2">Desenvolvedor Web</p>
      <p className="mt-4 text-xl font-semibold">{sectionName}</p>
     </motion.div>
    </motion.div>
   )}
  </AnimatePresence>
 );
}
