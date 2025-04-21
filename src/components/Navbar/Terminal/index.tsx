"use client";

import TerminalInput from "./TerminalInput";
import TerminalOutput from "./TerminalOutput";
import { useState } from "react";
import { NAV_ITEMS } from "../constants"; // Importa os itens de navegação

const Terminal: React.FC = () => {
 const [output, setOutput] = useState<string[]>([]); // Estado para armazenar a saída do terminal
 const [input, setInput] = useState<string>("");

 // Função que lida com a entrada do comando
 const handleCommand = (command: string) => {
  if (command.trim().toLowerCase() === "ls") {
   // Exibe as páginas definidas em NAV_ITEMS
   setOutput([
    ...output,
    ...NAV_ITEMS.map((item) => `  ${item.name} (${item.href})`),
   ]);
  } else {
   setOutput([...output, `zsh: comando não encontrado: ${command}`]);
  }
  setInput(""); // Limpa o input após o comando
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
