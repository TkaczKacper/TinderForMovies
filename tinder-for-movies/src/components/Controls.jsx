import React from "react";
import { useDispatch } from "react-redux";
import { acceptMovie, rejectMovie } from "../redux/actions";
import "./Controls.css";

export const Controls = ({ movieId }) => {
   const dispatch = useDispatch();

   return (
      <div className="control-container">
         <button
            className="control-button"
            id="reject-button"
            onClick={() => dispatch(rejectMovie(movieId))}
         >
            X
         </button>
         <button
            className="control-button"
            id="accept-button"
            onClick={() => dispatch(acceptMovie(movieId))}
         >
            ❤
         </button>
      </div>
   );
};
