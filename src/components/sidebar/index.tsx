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
import PageTransitionLoader from "@/components/common/PageTransitionLoader";

const Sidebar: React.FC = () => {
 const { sectionHref, hoveredIndex, setHoveredIndex } = useActiveNav();
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const dispatch = useDispatch();

 const toggleMenu = () => setIsMenuOpen((prev) => !prev);

 const handleNavClick = (sectionName: string, sectionHref: string) => {
  dispatch(setSection({ name: sectionName, href: sectionHref }));
  setIsMenuOpen(false);
 };

 return (
  <nav className="h-screen w-[250px] bg-neutral-950 shadow-md text-slate-400 flex flex-col justify-between items-center z-10">
   <PageTransitionLoader />

   {/* TOPO - LOGO */}
   <div className="p-4 w-full flex justify-center">
    <LogoSection />
   </div>

   {/* MEIO */}
   <div className="flex-1 w-full flex flex-col justify-center items-center px-4">
    <DesktopNav
     items={NAV_ITEMS}
     hoveredIndex={hoveredIndex}
     onHover={setHoveredIndex}
     activeSection={sectionHref}
     onNavClick={handleNavClick}
    />
   </div>

   {/* BASE */}
   <div className="w-full p-4 flex justify-center">
    <MyDialogButton />
   </div>

   {/* MOBILE MENU */}
   <div className="absolute top-4 right-4 lg:hidden">
    <MobileMenuButton isOpen={isMenuOpen} onToggle={toggleMenu} />
   </div>

   {isMenuOpen && (
    <MobileNav
     items={NAV_ITEMS}
     onNavClick={handleNavClick}
     onClose={toggleMenu}
    />
   )}
  </nav>
 );
};

export default Sidebar;
