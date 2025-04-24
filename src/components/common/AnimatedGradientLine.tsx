// src/components/common/AnimatedGradientLine.tsx
import { motion, useMotionValue, animate } from "motion/react";
import React, { useEffect } from "react";

// Array of batman-inspired colors (dark tones with yellow)
const COLORS_TOP = ["#F7D800", "#FFB800", "#FFAA00", "#FFCC00"]; // Amarelos e tons quentes

function AuroraGradientAnimated() {
 // Initialize motion value with the first color
 const color = useMotionValue(COLORS_TOP[0]);

 useEffect(() => {
  // Animate the color changes in a loop
  animate(color, COLORS_TOP, {
   ease: "easeInOut", // Easing function for smooth transitions
   duration: 10, // Duration for the entire color transition cycle
   repeat: Infinity, // Repeat the animation infinitely
   repeatType: "mirror", // Reverses the animation direction on each cycle
  });
 }, [color]);

 return (
  <div className="relative w-full h-[2px] overflow-hidden">
   <motion.div
    className="absolute top-0 left-0 w-full h-full"
    animate={{
     backgroundPositionX: ["0%", "100%"], // Move a linha da esquerda para a direita
    }}
    transition={{
     repeat: Infinity, // Loop infinito
     repeatType: "loop", // A animação deve ser contínua
     ease: "linear", // Movimento suave e constante
     duration: 4, // Controla a velocidade do movimento
    }}
    style={{
     backgroundImage: `repeating-linear-gradient(
                90deg,
                ${COLORS_TOP[0]} 0%,  /* Amarelo claro */
                ${COLORS_TOP[1]} 10%, /* Amarelo mais forte */
                ${COLORS_TOP[2]} 20%, /* Laranja */
                ${COLORS_TOP[3]} 30%  /* Amarelo dourado */
              )`, // Usando os tons de amarelo e laranja
     backgroundSize: "200% 100%", // Faz o padrão de fundo cobrir mais do que o necessário
    }}
   />
  </div>
 );
}

export default AuroraGradientAnimated;
