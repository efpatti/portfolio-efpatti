// src/hooks/useActiveNav.ts
"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constants/routes";
import { setSection } from "@/store/sectionSlice";

export const useActiveNav = () => {
 const dispatch = useDispatch();
 const { sectionName, sectionHref } = useSelector(
  (state: RootState) => state.section
 );
 const pathname = usePathname();
 const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

 useEffect(() => {
  const currentHash = pathname.split("#")[1];
  if (currentHash) {
   const current = NAV_ITEMS.find(
    (item) => item.href.replace("#", "") === currentHash
   );
   if (current) {
    dispatch(setSection({ name: current.name, href: current.href })); // Atualiza tanto o name quanto o href
   }
  }
 }, [pathname, dispatch]);

 return { sectionName, sectionHref, hoveredIndex, setHoveredIndex }; // Retorna também o href
};
