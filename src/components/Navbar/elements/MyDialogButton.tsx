"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useDispatch } from "react-redux";
import { MdTerminal } from "react-icons/md";
import Terminal from "../Terminal"; // Importando o componente Terminal

const MyDialogButton: React.FC = () => {
 const dispatch = useDispatch();

 const handleOpen = () => {
  dispatch({ type: "dialog/open" }); // Abre o diálogo via Redux
 };

 return (
  <Dialog.Root>
   <Dialog.Trigger asChild>
    <button
     onClick={handleOpen}
     className="text-slate-400 p-2 rounded hover:text-yellow-600 transition cursor-pointer"
    >
     <MdTerminal size={24} />
    </button>
   </Dialog.Trigger>
   <Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0 bg-black/60" />
    <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-900 p-6 rounded-xl w-[90%] max-w-md text-slate-100 shadow-lg">
     <Dialog.Title className="text-xl font-bold mb-2">Terminal</Dialog.Title>
     <Dialog.Description className="text-sm mb-4">
      Digite um comando para navegar.
     </Dialog.Description>
     {/* Exibindo o terminal */}
     <Terminal />
    </Dialog.Content>
   </Dialog.Portal>
  </Dialog.Root>
 );
};

export default MyDialogButton;
