export const fetchMovies = () => async (dispatch) => {
   try {
      const response = await fetch(`/recommendations`);
      dispatch({ type: "SET_MOVIES", payload: response.data });
   } catch (err) {
      console.error("Unexpected error while fetching movies: \n", err);
   }
};

export const acceptMovie = (id) => async (dispatch) => {
   try {
      await fetch(`/recommendations/${id}/accept`, { method: "PUT" });
      dispatch({ type: "NEXT_MOVIE" });
   } catch (err) {
      console.error("Unexpected error while accepting movie: \n", err);
   }
};

export const rejectMovie = (id) => async (dispatch) => {
   try {
      await fetch(`/recommendations/${id}/reject`, { method: "PUT" });
      dispatch({ type: "NEXT_MOVIE" });
   } catch (err) {
      console.error("Unexpected error while rejecting movie: \n", err);
   }
};
