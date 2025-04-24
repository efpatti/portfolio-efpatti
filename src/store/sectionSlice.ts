// src/store/sectionSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SectionState {
 sectionName: string;
 sectionHref: string;
}

const initialState: SectionState = {
 sectionName: "Início",
 sectionHref: "#inicio", // Inicializando com a seção e href padrão
};

const sectionSlice = createSlice({
 name: "section",
 initialState,
 reducers: {
  setSection: (
   state,
   action: PayloadAction<{ name: string; href: string }>
  ) => {
   state.sectionName = action.payload.name;
   state.sectionHref = action.payload.href;
  },
 },
});

export const { setSection } = sectionSlice.actions;
export default sectionSlice.reducer;
