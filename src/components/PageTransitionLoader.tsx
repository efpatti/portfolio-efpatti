"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiBatMask } from "react-icons/gi";

const MIN_LOADING_TIME = 2000; // 2 segundos

export default function PageTransitionLoader() {
 const pathname = usePathname();
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  setIsVisible(true);

  const timeout = setTimeout(() => {
   setIsVisible(false);
  }, MIN_LOADING_TIME);

  return () => clearTimeout(timeout);
 }, [pathname]);

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
     </motion.div>
    </motion.div>
   )}
  </AnimatePresence>
 );
}
