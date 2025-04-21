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
      <stop offset="0%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
      <stop offset="50%" style={{ stopColor: "#FFA500", stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: "#1a1a1a", stopOpacity: 1 }} />
     </linearGradient>
    </defs>

    <motion.path
     d="M2 6C9.14784 6.42046 16.579 6 24 6C33.7203 6 41.9819 3.51987 51.5 2.05556C65.9624 -0.169424 78.7854 7 93 7"
     variants={pathVariants}
     initial="hidden"
     animate={animate ? "visible" : "invisible"}
     stroke="url(#grad1)"
     strokeLinecap="round"
     strokeLinejoin="round"
     strokeWidth="5"
    />
   </svg>
  </div>
 );
};

export default CrookedLine;
