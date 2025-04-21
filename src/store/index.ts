// src/store/index.ts

import { configureStore, createSlice } from "@reduxjs/toolkit";

// Define o tipo do estado
interface DialogState {
 isOpen: boolean;
}

// Estado inicial
const initialState: DialogState = {
 isOpen: false,
};

// Criação do slice
const dialogSlice = createSlice({
 name: "dialog",
 initialState,
 reducers: {
  open: (state) => {
   state.isOpen = true;
  },
  close: (state) => {
   state.isOpen = false;
  },
 },
});

// Exporte as ações
export const { open, close } = dialogSlice.actions;

// Exporte o reducer
const store = configureStore({
 reducer: {
  dialog: dialogSlice.reducer,
 },
});

// Tipagem do Redux Store e Dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
