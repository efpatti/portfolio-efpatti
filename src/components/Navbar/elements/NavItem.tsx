"use client";

import { motion } from "framer-motion";
import CrookedLine from "@/components/CrookedLine";
import { NavItemType } from "../types";

type Props = {
 item: NavItemType;
 index: number;
 hoveredIndex: number | null;
 activeIndex: number | null;
 onHover: (index: number | null) => void;
};

const NavItem: React.FC<Props> = ({
 item,
 index,
 hoveredIndex,
 activeIndex,
 onHover,
}) => {
 const isActive = activeIndex === index;
 const isHovered = hoveredIndex === index;

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
   >
    <span className="text-xl">{item.name}</span>
    <div className="h-[9px] w-full">
     <CrookedLine animate={isActive || isHovered} />
    </div>
   </motion.a>
  </motion.div>
 );
};

export default NavItem;
