"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useDispatch } from "react-redux";
import { MdTerminal } from "react-icons/md";

const MyDialogButton: React.FC = () => {
 const dispatch = useDispatch();

 const handleOpen = () => {
  dispatch({ type: "dialog/open" }); // Exemplo se quiser usar Redux pra controlar estado global
 };

 return (
  <Dialog.Root>
   <Dialog.Trigger asChild>
    <button
     onClick={handleOpen}
     className="text-slate-100 p-2 rounded hover:bg-neutral-800 transition"
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
     {/* Conteúdo aqui, como um terminal fake */}
     <input
      className="w-full p-2 rounded bg-neutral-800 text-slate-100"
      placeholder="cd /about"
     />
    </Dialog.Content>
   </Dialog.Portal>
  </Dialog.Root>
 );
};

export default MyDialogButton;
