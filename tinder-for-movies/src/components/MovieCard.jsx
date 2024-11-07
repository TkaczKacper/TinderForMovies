import React from "react";
import { useDispatch } from "react-redux";
import { acceptMovie, rejectMovie } from "../redux/actions";
import { useSwipe } from "../hooks/useSwipe";

export const MovieCard = ({ movie }) => {
   const dispatch = useDispatch();

   const {
      onMouseDown,
      onMouseMove,
      onMouseUp,
      touchStart,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
   } = useSwipe(
      () => dispatch(rejectMovie(movie.id)),
      () => dispatch(acceptMovie(movie.id))
   );

   return (
      <div
         className="movie-card"
         onMouseDown={onMouseDown}
         onMouseMove={(e) => touchStart && onMouseMove(e)}
         onMouseUp={onMouseUp}
         onTouchStart={onTouchStart}
         onTouchMove={onTouchMove}
         onTouchEnd={onTouchEnd}
      >
         <h1 className="movie-title">{movie.title}</h1>
         <img
            className="movie-image"
            src={movie.imageUrl}
            alt="movie poster"
         ></img>
         <p className="movie-summary">{movie.summary}</p>
         <p className="movie-rating">({movie.rating} / 10)</p>
      </div>
   );
};
