import { Dispatch } from "../types/types";

export const fetchMovies =
   () =>
   async (dispatch: Dispatch): Promise<void> => {
      try {
         const response = await fetch(`/recommendations`);
         const data = await response.json();
         dispatch({ type: "SET_MOVIES", payload: data });
      } catch (err) {
         console.error("Unexpected error while fetching movies: \n", err);
      }
   };

export const acceptMovie =
   (id: string) =>
   async (dispatch: Dispatch): Promise<void> => {
      try {
         console.log(`Movie id: ${id} accepted`);
         await fetch(`/recommendations/${id}/accept`, { method: "PUT" });
         dispatch({ type: "NEXT_MOVIE" });
      } catch (err) {
         console.error("Unexpected error while accepting movie: \n", err);
      }
   };

export const rejectMovie =
   (id: string) =>
   async (dispatch: Dispatch): Promise<void> => {
      try {
         await fetch(`/recommendations/${id}/reject`, { method: "PUT" });
         console.log(`Movie id: ${id} rejected`);
         dispatch({ type: "NEXT_MOVIE" });
      } catch (err) {
         console.error("Unexpected error while rejecting movie: \n", err);
      }
   };
