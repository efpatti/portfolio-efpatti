"use client";

import { useState } from "react";
import { NAV_ITEMS } from "./constants";
import { useActiveNav } from "./hooks/useActiveNav";
import LogoSection from "./sections/LogoSection";
import DesktopNav from "./sections/DesktopNav";
import MobileNav from "./sections/MobileNav";
import MobileMenuButton from "./elements/MobileMenuButtom";

const Navbar: React.FC = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const { hoveredIndex, setHoveredIndex, activeIndex } = useActiveNav();

 const toggleMenu = () => setIsMenuOpen((prev) => !prev);

 return (
  <nav className="fixed inset-x-0 top-0 z-50 w-full bg-neutral-950 shadow-sm shadow-slate-200 text-slate-400">
   <div className="flex items-center justify-between p-2 max-w-6xl mx-auto">
    <LogoSection />
    <MobileMenuButton isOpen={isMenuOpen} onToggle={toggleMenu} />
    <DesktopNav
     items={NAV_ITEMS}
     hoveredIndex={hoveredIndex}
     onHover={setHoveredIndex}
     activeIndex={activeIndex}
    />
   </div>
   {isMenuOpen && <MobileNav items={NAV_ITEMS} onClose={toggleMenu} />}
  </nav>
 );
};

export default Navbar;
