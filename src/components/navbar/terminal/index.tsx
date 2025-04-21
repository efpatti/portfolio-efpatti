"use client";

import TerminalInput from "./TerminalInput";
import TerminalOutput from "./TerminalOutput";
import { useState } from "react";
import { NAV_ITEMS } from "@/constants/routes"; // Importa os itens de navegação
import { useDispatch } from "react-redux";
import { setSection } from "@/store/sectionSlice";

const Terminal: React.FC = () => {
 const [output, setOutput] = useState<string[]>([]); // Estado para armazenar a saída do terminal
 const [input, setInput] = useState<string>("");
 const [currentDir, setCurrentDir] = useState<string>("#inicio"); // Diretório atual

 // Função que lida com a entrada do comando
 const dispatch = useDispatch();

 const handleCommand = (command: string) => {
  const trimmed = command.trim();
  const parts = trimmed.split(" ");
  const baseCommand = parts[0].toLowerCase();

  if (baseCommand === "ls") {
   // Comando 'ls', lista diretórios
   setOutput((prev) => [
    ...prev,
    `$ ${command}`,
    ...NAV_ITEMS.map(
     (item) => `  ${item.name} (${item.href.replace("#", "/")})` // Substitui # por /
    ),
   ]);
  } else if (baseCommand === "cd") {
   // Comando 'cd', navega entre os diretórios
   const target = parts[1];

   if (!target) {
    setOutput((prev) => [
     ...prev,
     `$ ${command}`,
     `cd: destino não especificado`,
    ]);
    return;
   }

   if (target === "..") {
    // Retorna ao diretório anterior
    setCurrentDir("#inicio"); // Voltando à raiz
    dispatch(setSection({ name: "Início", href: "#inicio" }));
    setOutput((prev) => [...prev, `$ ${command}`, `Voltando para a raiz`]);
    return;
   }

   const match = NAV_ITEMS.find(
    (item) => item.href.replace("#", "").toLowerCase() === target.toLowerCase()
   );

   if (match) {
    setCurrentDir(match.href); // Atualiza o diretório atual
    dispatch(setSection({ name: match.name, href: match.href }));
    setOutput((prev) => [...prev, `$ ${command}`, `Entrando em ${match.name}`]);
   } else {
    setOutput((prev) => [
     ...prev,
     `$ ${command}`,
     `cd: ${target}: diretório não encontrado`,
    ]);
   }
  } else if (baseCommand === "pwd") {
   // Comando 'pwd', mostra o diretório atual
   setOutput((prev) => [
    ...prev,
    `$ ${command}`,
    `Diretório atual: ${currentDir.replace("#", "/")}`,
   ]);
  } else if (baseCommand === "clear") {
   // Comando 'clear', limpa a tela do terminal
   setOutput([]);
  } else {
   // Comando não reconhecido
   setOutput((prev) => [
    ...prev,
    `$ ${command}`,
    `zsh: comando não encontrado: ${command}`,
   ]);
  }

  setInput(""); // limpa o campo de input
 };

 return (
  <div className="terminal-container">
   <div className="terminal-output">
    {output.map((line, index) => (
     <TerminalOutput key={index} line={line} />
    ))}
   </div>
   <TerminalInput value={input} onChange={setInput} onEnter={handleCommand} />
  </div>
 );
};

export default Terminal;
