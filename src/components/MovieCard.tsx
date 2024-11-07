import React from "react";
import { useDispatch } from "react-redux";
import { acceptMovie, rejectMovie } from "../redux/actions";
import { useSwipe } from "../hooks/useSwipe";
import "./MovieCard.css";
import { Movie } from "../types/types";
import { AppDispatch } from "../redux/store";

interface MovieCardProps {
   movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
   const dispatch = useDispatch<AppDispatch>();

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
         style={{
            backgroundImage: `url(${movie.imageURL})`,
         }}
      >
         <div className="movie-card-footer">
            <h1 className="movie-title">{movie.title}</h1>
            <p className="movie-summary">{movie.summary}</p>
            <div className="movie-rating">
               <div className="rating-stars">
                  <div
                     className="filled-stars"
                     style={{ width: (movie.rating / 10) * 100 }}
                  >
                     ★★★★★
                  </div>
                  <div className="empty-stars">★★★★★</div>
               </div>
            </div>
         </div>
      </div>
   );
};
