"use client";

import { motion } from "framer-motion"; // Corrigido de "motion/react" para "framer-motion"
import CrookedLine from "@/components/CrookedLine";
import { NavItemType } from "../types";
import { useDispatch } from "react-redux";
import { setSection } from "@/store/sectionSlice"; // Ação para atualizar o estado da seção

type Props = {
 item: NavItemType;
 index: number;
 hoveredIndex: number | null;
 activeIndex: number | null;
 onHover: (index: number | null) => void;
 onNavClick: (sectionName: string) => void; // Adicionando a prop onNavClick
};

const NavItem: React.FC<Props> = ({
 item,
 index,
 hoveredIndex,
 activeIndex,
 onHover,
 onNavClick,
}) => {
 const dispatch = useDispatch(); // Inicializando o dispatch do Redux
 const isActive = activeIndex === index;
 const isHovered = hoveredIndex === index;

 // Atualizando o estado no Redux ao clicar em um item de navegação
 const handleNavClick = () => {
  dispatch(setSection(item.name)); // Atualiza a seção ativa no Redux
  onNavClick(item.name); // Chama a função onNavClick passada como prop
 };

 return (
  <motion.div
   className="inline-flex flex-col items-center"
   onHoverStart={() => onHover(index)}
   onHoverEnd={() => onHover(null)}
   initial={{ opacity: 0.6 }}
   animate={{ opacity: isHovered || isActive ? 1 : 0.6 }}
   transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
  >
   <motion.a
    href={item.href}
    className={`font-bold font-sora transition-all duration-300 ease-in-out ${
     isActive || isHovered ? "text-yellow-600" : "text-slate-400"
    }`}
    onClick={handleNavClick} // Chamando a função handleNavClick
   >
    <span className="text-lg">{item.name}</span>
    <div className="h-[9px] w-full">
     <CrookedLine animate={isActive || isHovered} />
    </div>
   </motion.a>
  </motion.div>
 );
};

export default NavItem;
