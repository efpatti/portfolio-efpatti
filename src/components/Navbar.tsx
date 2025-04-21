"use client";
import { useState, useEffect } from "react";
import { MdCloseFullscreen, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import CrookedLine from "./CrookedLine"; // Certifique-se de que o caminho esteja correto
import Image from "next/image";
import Logo from "@/img/efpatti.png";
import { usePathname } from "next/navigation"; // Import usePathname

const NAV_ITEMS = [
 { name: "Início", href: "/" },
 { name: "Sobre nós", href: "/about" },
 { name: "Catálogo", href: "/catalog" },
 { name: "Fale conosco", href: "/contact" },
];

const Navbar: React.FC = () => {
 const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
 const [activeIndex, setActiveIndex] = useState<number | null>(null); // Novo estado para índice ativo
 const pathname = usePathname(); // Pega o pathname atual
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 // Efeito para setar o índice ativo baseado no pathname
 useEffect(() => {
  const currentNavItem = NAV_ITEMS.find((item) => item.href === pathname);
  if (currentNavItem) {
   const index = NAV_ITEMS.indexOf(currentNavItem);
   setActiveIndex(index); // Setar o índice ativo baseado no pathname
   setHoveredIndex(index); // Manter o índice de hover
  }
 }, [pathname]);

 const toggleMenu = () => setIsMenuOpen((prev) => !prev);

 return (
  <nav className="fixed inset-x-0 top-0 z-50 w-full bg-neutral-900 text-slate-400">
   <div className="flex items-center justify-between p-4 max-w-6xl mx-auto">
    <LogoSection />
    <MobileMenuButton isOpen={isMenuOpen} onToggle={toggleMenu} />
    <DesktopNav
     items={NAV_ITEMS} // Passa os itens da navbar dinamicamente
     hoveredIndex={hoveredIndex}
     onHover={setHoveredIndex}
     activeIndex={activeIndex} // Passa o índice ativo para o DesktopNav
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
 items: { name: string; href: string }[]; // Aceita itens da navbar dinamicamente
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
    activeIndex={activeIndex} // Passa o índice ativo para o NavItem
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
}> = ({ item, index, hoveredIndex, activeIndex, onHover }) => (
 <motion.a
  href={item.href}
  className={`nav-link ${
   hoveredIndex === index || activeIndex === index
    ? "text-transparent  bg-gradient-to-r from-blue-500 to-purple-500 inline-block bg-clip-text"
    : ""
  }`}
  onMouseEnter={() => onHover(index)}
  onMouseLeave={() => onHover(null)}
 >
  <h1>{item.name}</h1>
  <div className="w-[95px] h-[9px]">
   <CrookedLine animate={hoveredIndex === index || activeIndex === index} />
  </div>
 </motion.a>
);

const MobileNav: React.FC<{
 items: { name: string; href: string }[]; // Aceita itens da navbar dinamicamente
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
