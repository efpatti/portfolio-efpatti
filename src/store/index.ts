import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./dialogSlice";
import sectionReducer from "./sectionSlice"; // Import do slice novo

const store = configureStore({
 reducer: {
  dialog: dialogReducer, // dialog slice OK
  section: sectionReducer, // section slice OK
 },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
