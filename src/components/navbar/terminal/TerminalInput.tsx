"use client";

import { useEffect, useRef } from "react";

interface TerminalInputProps {
 value: string;
 onChange: (value: string) => void;
 onEnter: (command: string) => void;
}

const TerminalInput: React.FC<TerminalInputProps> = ({
 value,
 onChange,
 onEnter,
}) => {
 const inputRef = useRef<HTMLInputElement>(null);

 // Foca no campo de input quando o componente é renderizado
 useEffect(() => {
  inputRef.current?.focus();
 }, []);

 const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
   onEnter(value); // Envia o comando quando o Enter é pressionado
  }
 };

 return (
  <div className="input-wrapper">
   {/* Estilo inline para o cifrão na cor amarela (yellow-600) */}
   <span className="prompt" style={{ color: "#eab308" }}>
    ${" "}
   </span>
   <input
    ref={inputRef}
    className="terminal-input"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    onKeyDown={handleKeyDown}
    placeholder="Digite um comando..."
   />
  </div>
 );
};

export default TerminalInput;
