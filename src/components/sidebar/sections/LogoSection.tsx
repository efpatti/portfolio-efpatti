// src/components/sidebar/sections/LogoSection.tsx
"use client";
import { GiBatMask } from "react-icons/gi";

const LogoSection: React.FC = () => (
 <div className="flex flex-col justify-center items-center gap-2 highlight-el">
  <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-700 font-bold text-2xl">
   efpatti
  </h1>
  <div className="text-yellow-600 text-5xl">
   <GiBatMask />
  </div>
 </div>
);

export default LogoSection;
