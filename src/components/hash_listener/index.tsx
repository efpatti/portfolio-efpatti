import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSection } from "@/store/sectionSlice";
import { NAV_ITEMS } from "@/constants/routes";

export function HashListener() {
 const dispatch = useDispatch();

 useEffect(() => {
  const handleHashChange = () => {
   const hash = window.location.hash.replace("#", "");

   // Encontrando a seção correspondente no NAV_ITEMS
   const currentSection = NAV_ITEMS.find(
    (item) => item.href.replace("#", "") === hash
   );

   if (currentSection) {
    dispatch(
     setSection({ name: currentSection.name, href: currentSection.href })
    );
   }
  };

  window.addEventListener("hashchange", handleHashChange);
  handleHashChange(); // Executa ao carregar a página com o hash

  return () => window.removeEventListener("hashchange", handleHashChange);
 }, [dispatch]);

 return null;
}
