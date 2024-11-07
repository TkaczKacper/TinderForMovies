import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";
import { fetchMovies } from "../redux/actions";

export const TinderCard = () => {
   const dispatch = useDispatch();
   const movies = useSelector((state) => state.movies.movies);
   const currIndex = useSelector((state) => state.movies.currentIndex);
   console.log(movies, currIndex);
   const currMovie = movies ? movies[currIndex] : null;

   useEffect(() => {
      dispatch(fetchMovies());
   }, [dispatch]);

   return (
      <div>
         <h1>Tinder</h1>
         {currMovie ? (
            <MovieCard movie={currMovie} />
         ) : (
            <h1>No more movies!</h1>
         )}
      </div>
   );
};
