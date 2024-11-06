import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./reducers";

export const store = configureStore(movieReducer);
