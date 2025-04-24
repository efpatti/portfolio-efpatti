// src/components/sidebar/sections/DesktopNav.tsx
"use client";

import NavItem from "../elements/NavItem";
import { NavItemType } from "@/types/nav";

type Props = {
 items: NavItemType[];
 hoveredIndex: number | null;
 activeSection: string;
 onHover: (index: number | null) => void;
 onNavClick: (sectionName: string, sectionHref: string) => void; // Atualizando a assinatura para incluir sectionHref
};

const DesktopNav: React.FC<Props> = ({
 items,
 hoveredIndex,
 activeSection,
 onHover,
 onNavClick,
}) => (
 <div className="highlight-el flex flex-col h-full p-4 justify-between items-center gap-2 lg:gap-3 w-full">
  {items.map((item, index) => (
   <NavItem
    key={item.name}
    item={item}
    index={index}
    hoveredIndex={hoveredIndex}
    activeSection={activeSection}
    onHover={onHover}
    onNavClick={onNavClick}
   />
  ))}
 </div>
);

export default DesktopNav;
