import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./reducers";

export default configureStore({
   reducer: {
      movies: movieReducer,
   },
});
