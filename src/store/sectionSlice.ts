import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SectionState {
 sectionName: string;
}

const initialState: SectionState = {
 sectionName: "",
};

const sectionSlice = createSlice({
 name: "section",
 initialState,
 reducers: {
  setSection: (state, action: PayloadAction<string>) => {
   state.sectionName = action.payload;
  },
 },
});

export const { setSection } = sectionSlice.actions; // <-- ESSA LINHA É IMPORTANTE
export default sectionSlice.reducer;
