"use client";

import { useState, useEffect } from "react";
import { MdCloseFullscreen, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import CrookedLine from "./CrookedLine";
import Image from "next/image";
import Logo from "@/img/efpatti.png";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
 { name: "Início", href: "/" },
 { name: "Sobre nós", href: "/about" },
 { name: "Catálogo", href: "/catalog" },
 { name: "Fale conosco", href: "/contact" },
];

const Navbar: React.FC = () => {
 const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
 const [activeIndex, setActiveIndex] = useState<number | null>(null);
 const pathname = usePathname();
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 useEffect(() => {
  const currentNavItem = NAV_ITEMS.find((item) => item.href === pathname);
  if (currentNavItem) {
   const index = NAV_ITEMS.indexOf(currentNavItem);
   setActiveIndex(index);
   setHoveredIndex(index);
  }
 }, [pathname]);

 const toggleMenu = () => setIsMenuOpen((prev) => !prev);

 return (
  <nav className="fixed inset-x-0 top-0 z-50 w-full bg-neutral-900 text-slate-400">
   <div className="flex items-center justify-between p-4 max-w-6xl mx-auto">
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

const LogoSection: React.FC = () => (
 <div className="text-slate-100">
  <Image src={Logo} alt="Logo" width={100} height={100} />
 </div>
);

const MobileMenuButton: React.FC<{ isOpen: boolean; onToggle: () => void }> = ({
 isOpen,
 onToggle,
}) => (
 <button
  className="text-slate-100 lg:hidden focus:outline-none"
  onClick={onToggle}
  aria-label="Toggle Menu"
 >
  {isOpen ? <MdCloseFullscreen size={24} /> : <MdMenu size={24} />}
 </button>
);

const DesktopNav: React.FC<{
 items: { name: string; href: string }[];
 activeIndex: number | null;
 hoveredIndex: number | null;
 onHover: (index: number | null) => void;
}> = ({ items, hoveredIndex, onHover, activeIndex }) => (
 <div className="hidden lg:flex items-center gap-6">
  {items.map((item, index) => (
   <NavItem
    key={item.name}
    item={item}
    index={index}
    hoveredIndex={hoveredIndex}
    activeIndex={activeIndex}
    onHover={onHover}
   />
  ))}
 </div>
);

const NavItem: React.FC<{
 item: { name: string; href: string };
 index: number;
 hoveredIndex: number | null;
 activeIndex: number | null;
 onHover: (index: number | null) => void;
}> = ({ item, index, hoveredIndex, activeIndex, onHover }) => {
 const isActive = activeIndex === index;
 const isHovered = hoveredIndex === index;

 return (
  <motion.div
   className="inline-flex flex-col items-center"
   onHoverStart={() => onHover(index)} // Inicia a animação no hover
   onHoverEnd={() => onHover(null)} // Finaliza a animação no fim do hover
   initial={{ opacity: 0.6 }} // Começa com opacidade menor
   animate={{
    opacity: isHovered || isActive ? 1 : 0.6,
   }} // Transição de opacidade suave
   transition={{
    duration: 0.3,
    ease: [0.25, 0.8, 0.25, 1], // Usando uma curva de Bézier personalizada
   }}
  >
   <motion.a
    href={item.href}
    className={`font-semibold transition-all duration-300 ease-in-out ${
     isActive || isHovered
      ? "text-yellow-400" // Texto amarelo quando hoverado ou ativo
      : "text-slate-400"
    }`}
   >
    <span className="text-lg font-medium">{item.name}</span>
    <div className="h-[9px] w-full">
     <CrookedLine animate={isActive || isHovered} />
    </div>
   </motion.a>
  </motion.div>
 );
};

const MobileNav: React.FC<{
 items: { name: string; href: string }[];
 onClose: () => void;
}> = ({ items, onClose }) => (
 <div className="lg:hidden flex flex-col items-end p-8 bg-neutral-950 h-screen w-2/3 fixed top-0 right-0 z-40">
  <button
   className="mb-6 text-xl text-slate-100"
   onClick={onClose}
   aria-label="Close Menu"
  >
   <MdCloseFullscreen />
  </button>
  <div className="flex flex-col items-end">
   {items.map((item) => (
    <a
     key={item.name}
     href={item.href}
     className="text-slate-100 py-2 text-lg"
     onClick={onClose}
    >
     {item.name}
    </a>
   ))}
  </div>
 </div>
);

export default Navbar;
