// Navbar/index.tsx
"use client";

import { useState } from "react";
import { NAV_ITEMS } from "./constants"; // Constantes com os itens de navegação
import { useActiveNav } from "./hooks/useActiveNav"; // Hook para lidar com o estado de navegação
import LogoSection from "./sections/LogoSection"; // Componente para a logo
import DesktopNav from "./sections/DesktopNav"; // Componente para a navegação desktop
import MobileNav from "./sections/MobileNav"; // Componente para a navegação mobile
import MobileMenuButton from "./elements/MobileMenuButtom"; // Componente para o botão de menu mobile
import MyDialogButton from "./elements/MyDialogButton"; // Novo botão que abre o diálogo

const Navbar: React.FC = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const { hoveredIndex, setHoveredIndex, activeIndex } = useActiveNav();

 const toggleMenu = () => setIsMenuOpen((prev) => !prev);

 return (
  <nav className="fixed inset-x-0 top-0 z-50 w-full bg-neutral-950 shadow-sm shadow-slate-200 text-slate-400">
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

   {isMenuOpen && <MobileNav items={NAV_ITEMS} onClose={toggleMenu} />}
  </nav>
 );
};

export default Navbar;
