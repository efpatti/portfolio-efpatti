"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "../constants";

export const useActiveNav = () => {
 const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
 const [activeIndex, setActiveIndex] = useState<number | null>(null);
 const pathname = usePathname();

 useEffect(() => {
  const current = NAV_ITEMS.find((item) => item.href === pathname);
  if (current) {
   const index = NAV_ITEMS.indexOf(current);
   setActiveIndex(index);
   setHoveredIndex(index);
  }
 }, [pathname]);

 return {
  hoveredIndex,
  setHoveredIndex,
  activeIndex,
 };
};
