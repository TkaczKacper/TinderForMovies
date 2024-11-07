import React from "react";

export const MovieCard = ({ movie }) => {
   return (
      <div className="movie-card">
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
