// src/components/sidebar/elements/MobileMenuButton.tsx
"use client";

import { MdCloseFullscreen, MdMenu } from "react-icons/md";

type Props = {
 isOpen: boolean;
 onToggle: () => void;
};

const MobileMenuButton: React.FC<Props> = ({ isOpen, onToggle }) => (
 <button
  className="text-slate-100 lg:hidden focus:outline-none"
  onClick={onToggle}
  aria-label="Toggle Menu"
 >
  {isOpen ? <MdCloseFullscreen size={24} /> : <MdMenu size={24} />}
 </button>
);

export default MobileMenuButton;
