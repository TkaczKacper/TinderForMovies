import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";
import { fetchMovies } from "../redux/actions";
import { Controls } from "./Controls";
import "./TinderCard.css";

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
