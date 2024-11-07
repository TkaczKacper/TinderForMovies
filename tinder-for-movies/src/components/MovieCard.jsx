import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { acceptMovie, rejectMovie } from "../redux/actions";

export const MovieCard = ({ movie }) => {
   const [touchStart, setTouchStart] = useState(null);
   const [touchEnd, setTouchEnd] = useState(null);
   const [info, setInfo] = useState(null);
   const minSwipe = 50;
   const dispatch = useDispatch();

   const onStart = (pos) => {
      setTouchEnd(null);
      setTouchStart(pos);
   };

   const onMove = (pos) => setTouchEnd(pos);
   const onEnd = () => {
      if (!touchStart || !touchEnd) return;

      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > minSwipe;
      const isRightSwpie = distance < -minSwipe;

      if (isLeftSwipe || isRightSwpie) {
         console.log("swpie", isLeftSwipe ? "left" : "right");
         setInfo(isLeftSwipe ? "left" : "right");
         isLeftSwipe
            ? dispatch(rejectMovie(movie.id))
            : dispatch(acceptMovie(movie.id));
      }

      setTouchStart(null);
      setTouchEnd(null);
   };

   // desktop version swipe event handlers
   const onMouseDown = (e) => onStart(e.clientX);
   const onMouseMove = (e) => onMove(e.clientX);
   const onMouseUp = () => onEnd();

   // mobile version swipe event handlers
   const onTouchStart = (e) => onStart(e.targetTouches[0].clientX);
   const onTouchMove = (e) => onMove(e.targetTouches[0].clientX);
   const onTouchEnd = () => onEnd();

   return (
      <div
         className="movie-card"
         onTouchStart={onTouchStart}
         onTouchMove={onTouchMove}
         onTouchEnd={onTouchEnd}
         onMouseDown={onMouseDown}
         onMouseMove={(e) => touchStart && onMouseMove(e)}
         onMouseUp={onMouseUp}
      >
         <h3>{info}</h3>
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
