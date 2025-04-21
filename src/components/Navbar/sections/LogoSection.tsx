"use client";
import Image from "next/image";
import Logo from "@/img/efpatti.png";

const LogoSection: React.FC = () => (
 <div className="text-slate-100">
  <Image src={Logo} alt="Logo" width={100} height={100} />
 </div>
);

export default LogoSection;
