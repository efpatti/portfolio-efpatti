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

const Navbar: React.FC = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const { hoveredIndex, setHoveredIndex, activeIndex } = useActiveNav();

 const toggleMenu = () => setIsMenuOpen((prev) => !prev);

 return (
  <nav className="relative fixed inset-x-0 top-0 z-50 w-full bg-neutral-950 shadow-md text-slate-400 p-3">
   <div className="flex items-center justify-between lg:justify-center gap-6 p-2 max-w-6xl mx-auto w-full">
    {/* Esquerda: Logo */}
    <div className="flex-1">
     <LogoSection />
    </div>

    {/* Centro: Navegação Desktop */}
    <div className="hidden lg:flex justify-center gap-6">
     <DesktopNav
      items={NAV_ITEMS}
      hoveredIndex={hoveredIndex}
      onHover={setHoveredIndex}
      activeIndex={activeIndex}
     />
    </div>

    {/* Direita: Botão de Diálogo */}
    <div className="flex-1 flex justify-end">
     <MyDialogButton />
    </div>

    {/* Mobile Menu: Botão para abrir o menu mobile */}
    <div className="lg:hidden">
     <MobileMenuButton isOpen={isMenuOpen} onToggle={toggleMenu} />
    </div>
   </div>

   {/* Navegação mobile (aparece quando o menu está aberto) */}
   {isMenuOpen && <MobileNav items={NAV_ITEMS} onClose={toggleMenu} />}

   {/* Linha animada no rodapé da navbar */}
   <AnimatedGradientLine />
  </nav>
 );
};

export default Navbar;
