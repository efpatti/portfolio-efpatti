"use client";

import { MdCloseFullscreen } from "react-icons/md";
import { NavItemType } from "@/types/nav";

type Props = {
 items: NavItemType[];
 onClose: () => void;
 onNavClick: (sectionName: string, sectionHref: string) => void; // Atualizando a assinatura para incluir sectionHref
};

const MobileNav: React.FC<Props> = ({ items, onClose, onNavClick }) => (
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
     onClick={() => {
      onNavClick(item.name, item.href); // Passando name e href
      onClose();
     }}
    >
     {item.name}
    </a>
   ))}
  </div>
 </div>
);

export default MobileNav;
