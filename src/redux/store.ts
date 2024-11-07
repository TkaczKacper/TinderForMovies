import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./reducers";

export const store = configureStore({
   reducer: {
      // @ts-ignore
      movies: movieReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
