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
 <div className="hidden lg:flex items-center gap-6">
  {items.map((item, index) => (
   <NavItem
    key={item.name}
    item={item}
    index={index}
    hoveredIndex={hoveredIndex}
    activeSection={activeSection}
    onHover={onHover}
    onNavClick={onNavClick} // Passando a função onNavClick para o NavItem
   />
  ))}
 </div>
);

export default DesktopNav;
