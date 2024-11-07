import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";
import { Controls } from "./Controls";
import "./TinderCard.css";
import { fetchMovies } from "../redux/actions";
import { AppDispatch, RootState } from "../redux/store";
import { Movie } from "../types/types";

export const TinderCard = () => {
   const dispatch = useDispatch<AppDispatch>();
   const movies = useSelector((state: RootState) => state.movies.movies);
   const currIndex = useSelector(
      (state: RootState) => state.movies.currentIndex
   );

   const currMovie: Movie | null = movies ? movies[currIndex] : null;

   useEffect(() => {
      dispatch(fetchMovies());
   }, [dispatch]);

   return (
      <div className="tinder-card-container">
         {currMovie ? (
            <>
               <MovieCard movie={currMovie} />
               <Controls movieId={currMovie.id} />
            </>
         ) : (
            <h1>No more movies!</h1>
         )}
      </div>
   );
};
