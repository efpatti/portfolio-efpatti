"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSection } from "@/store/sectionSlice";

import { NAV_ITEMS } from "@/constants/routes";
import { useActiveNav } from "@/hooks/useActiveNav";

import LogoSection from "./sections/LogoSection";
import DesktopNav from "./sections/DesktopNav";
import MobileNav from "./sections/MobileNav";
import MobileMenuButton from "./elements/MobileMenuButton";
import MyDialogButton from "./elements/MyDialogButton";
import AnimatedGradientLine from "@/components/ui/AnimatedGradientLine";
import PageTransitionLoader from "@/components/ui/PageTransitionLoader";

const Navbar: React.FC = () => {
 const { sectionHref, hoveredIndex, setHoveredIndex } = useActiveNav();
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const dispatch = useDispatch();

 const toggleMenu = () => setIsMenuOpen((prev) => !prev);

 const handleNavClick = (sectionName: string, sectionHref: string) => {
  dispatch(setSection({ name: sectionName, href: sectionHref }));
  setIsMenuOpen(false); // Fecha o menu mobile ao clicar
 };

 return (
  <nav className="fixed inset-x-0 top-0 z-50 w-full bg-neutral-950 shadow-md text-slate-400">
   <PageTransitionLoader />
   <div className="flex p-5 items-center justify-between lg:justify-center gap-6 p-2 max-w-6xl mx-auto w-full">
    <div className="flex-1">
     <LogoSection />
    </div>

    <div className="hidden lg:flex justify-center gap-6">
     <DesktopNav
      items={NAV_ITEMS}
      hoveredIndex={hoveredIndex}
      onHover={setHoveredIndex}
      activeSection={sectionHref}
      onNavClick={handleNavClick} // Passando sectionName e sectionHref
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
     onNavClick={handleNavClick} // Passando sectionName e sectionHref
     onClose={toggleMenu}
    />
   )}

   <AnimatedGradientLine />
  </nav>
 );
};

export default Navbar;
