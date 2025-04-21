"use client";

import { useState } from "react";
import { NAV_ITEMS } from "./constants";
import { useActiveNav } from "./hooks/useActiveNav";
import LogoSection from "./sections/LogoSection";
import DesktopNav from "./sections/DesktopNav";
import MobileNav from "./sections/MobileNav";
import MobileMenuButton from "./elements/MobileMenuButtom";
import MyDialogButton from "./elements/MyDialogButton";
import AnimatedGradientLine from "@/components/AnimatedGradientLine"; // import da linha animada
import PageTransitionLoader from "@/components/PageTransitionLoader"; // importando o loader
import { useDispatch } from "react-redux";
import { setSection } from "@/store/sectionSlice";

const Navbar: React.FC = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const { hoveredIndex, setHoveredIndex, activeIndex } = useActiveNav();
 const dispatch = useDispatch();

 const toggleMenu = () => setIsMenuOpen((prev) => !prev);

 const handleNavClick = (sectionName: string) => {
  dispatch(setSection(sectionName)); // <-- Atualiza a seção no Redux
  setIsMenuOpen(false); // Fecha o menu no mobile
 };

 return (
  <nav className="relative fixed inset-x-0 top-0 z-50 w-full bg-neutral-950 shadow-md text-slate-400 p-3">
   <PageTransitionLoader /> {/* Vai ler direto do Redux */}
   <div className="flex items-center justify-between lg:justify-center gap-6 p-2 max-w-6xl mx-auto w-full">
    <div className="flex-1">
     <LogoSection />
    </div>

    <div className="hidden lg:flex justify-center gap-6">
     <DesktopNav
      items={NAV_ITEMS}
      hoveredIndex={hoveredIndex}
      onHover={setHoveredIndex}
      activeIndex={activeIndex}
      onNavClick={handleNavClick}
     />
    </div>

    <div className="flex-1 flex justify-end">
     <MyDialogButton />
    </div>

    <div className="lg:hidden">
     <MobileMenuButton isOpen={isMenuOpen} onToggle={toggleMenu} />
    </div>
   </div>
   {isMenuOpen && (
    <MobileNav
     items={NAV_ITEMS}
     onNavClick={handleNavClick}
     onClose={toggleMenu}
    />
   )}
   <AnimatedGradientLine />
  </nav>
 );
};

export default Navbar;
