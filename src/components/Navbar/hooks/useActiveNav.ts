"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store"; // Certifique-se de importar o tipo do Redux
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "../constants";
import { setSection } from "@/store/sectionSlice";

export const useActiveNav = () => {
 const dispatch = useDispatch();
 const sectionName = useSelector(
  (state: RootState) => state.section.sectionName
 );
 const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
 const [activeIndex, setActiveIndex] = useState<number | null>(null);
 const pathname = usePathname();

 useEffect(() => {
  const currentHash = pathname.split("#")[1]; // Pega a parte após o '#'
  console.log(currentHash);

  if (currentHash) {
   const current = NAV_ITEMS.find(
    (item) => item.href.replace("#", "") === currentHash
   );
   if (current) {
    const index = NAV_ITEMS.indexOf(current);
    setActiveIndex(index); // Atualiza o índice do item ativo
    setHoveredIndex(index); // Atualiza o índice do item hover
    dispatch(setSection(current.name)); // Atualiza o Redux com a nova seção
   }
  }
 }, [pathname, dispatch]); // Certifique-se de incluir `dispatch` aqui

 // A seção ativa também deve ser controlada pelo Redux
 useEffect(() => {
  if (sectionName) {
   const current = NAV_ITEMS.find((item) => item.name === sectionName);
   if (current) {
    const index = NAV_ITEMS.indexOf(current);
    setActiveIndex(index); // Atualiza o índice com base no Redux
   }
  }
 }, [sectionName]);

 return {
  hoveredIndex,
  setHoveredIndex,
  activeIndex,
 };
};
