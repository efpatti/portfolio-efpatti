"use client";

import { motion } from "framer-motion";
import CrookedLine from "@/components/common/CrookedLine";
import { NavItemType } from "@/types/nav";
import { useDispatch } from "react-redux";
import { setSection } from "@/store/sectionSlice"; // Certifique-se de importar a ação

type Props = {
 item: NavItemType;
 index: number;
 hoveredIndex: number | null;
 activeSection: string;
 onHover: (index: number | null) => void;
 onNavClick: (sectionName: string, sectionHref: string) => void;
};

const NavItem: React.FC<Props> = ({
 item,
 index,
 hoveredIndex,
 activeSection,
 onHover,
 onNavClick,
}) => {
 const dispatch = useDispatch(); // Hook para despachar a ação

 // Verificando se o href ativo corresponde ao item
 const isActive = activeSection === item.href; // Mudando de `item.name` para `item.href`
 const isHovered = hoveredIndex === index;

 const handleNavClick = () => {
  // Passando tanto sectionName quanto sectionHref para o Redux
  dispatch(setSection({ name: item.name, href: item.href }));
  onNavClick(item.name, item.href); // Passando valores para outras funções, se necessário
 };

 return (
  <motion.div
   className="inline-flex flex-col items-center"
   onHoverStart={() => onHover(index)}
   onHoverEnd={() => onHover(null)}
   initial={{ opacity: 0.6 }}
   animate={{
    opacity: isHovered || isActive ? 1 : 0.6,
   }}
   transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
  >
   <motion.a
    href={item.href}
    className={`font-bold font-sora transition-all duration-300 ease-in-out ${
     isActive || isHovered ? "text-yellow-600" : "text-slate-400"
    }`}
    onClick={handleNavClick}
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
