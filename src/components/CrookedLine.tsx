import { motion } from "framer-motion";

const CrookedLine = ({ animate }: { animate: boolean }) => {
 const pathVariants = {
  invisible: {
   opacity: 0,
   pathLength: 0,
   strokeDasharray: "500",
   strokeDashoffset: "500",
   transition: {
    opacity: { duration: 0.5, ease: "easeInOut", delay: 0.3 },
    pathLength: { duration: 0.5, ease: "easeInOut" },
    strokeDashoffset: { duration: 0.5, ease: "easeInOut" },
   },
  },
  hidden: {
   opacity: 0,
   pathLength: 0,
   strokeDasharray: "500",
   strokeDashoffset: "500",
   transition: {
    opacity: { duration: 0.5, ease: "easeInOut" },
    pathLength: { duration: 0.5, ease: "easeInOut" },
    strokeDashoffset: { duration: 0.5, ease: "easeInOut" },
   },
  },
  visible: {
   opacity: 1,
   pathLength: 1,
   strokeDasharray: "500",
   strokeDashoffset: "0",
   transition: {
    opacity: { duration: 0.5, ease: "easeInOut" },
    pathLength: { duration: 0.5, ease: "easeInOut" },
    strokeDashoffset: { duration: 0.5, ease: "easeInOut" },
   },
  },
 };

 return (
  <div className="h-full w-full">
   <svg
    className="h-full w-full"
    viewBox="0 0 126 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   >
    <defs>
     <linearGradient
      id="grad1"
      x1="0"
      y1="0"
      x2="126"
      y2="0"
      gradientUnits="userSpaceOnUse"
     >
      <stop offset="0%" style={{ stopColor: "#8C6D1F", stopOpacity: 1 }} />
      <stop offset="50%" style={{ stopColor: "#5A480F", stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: "#1a1a1a", stopOpacity: 1 }} />
     </linearGradient>
    </defs>

    {/* Reta: começa no ponto (2,6) e vai até (124,6) */}
    <motion.path
     d="M2 6H124"
     variants={pathVariants}
     initial="hidden"
     animate={animate ? "visible" : "invisible"}
     stroke="url(#grad1)"
     strokeLinecap="round"
     strokeLinejoin="round"
     strokeWidth="8"
    />
   </svg>
  </div>
 );
};

export default CrookedLine;
