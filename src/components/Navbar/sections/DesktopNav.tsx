"use client";

import NavItem from "../elements/NavItem";
import { NavItemType } from "../types";

type Props = {
 items: NavItemType[];
 hoveredIndex: number | null;
 activeIndex: number | null;
 onHover: (index: number | null) => void;
 onNavClick: (sectionName: string) => void; // Adicionando o tipo para onNavClick
};

const DesktopNav: React.FC<Props> = ({
 items,
 hoveredIndex,
 activeIndex,
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
    activeIndex={activeIndex}
    onHover={onHover}
    onNavClick={onNavClick} // Passando a função onNavClick para o NavItem
   />
  ))}
 </div>
);

export default DesktopNav;
