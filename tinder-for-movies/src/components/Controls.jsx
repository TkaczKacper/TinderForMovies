import React from "react";
import { useDispatch } from "react-redux";
import { acceptMovie, rejectMovie } from "../redux/actions";

export const Controls = ({ movieId }) => {
   const dispatch = useDispatch();

   return (
      <div>
         <button
            className="control-button"
            id="accept"
            onClick={() => dispatch(acceptMovie(movieId))}
         >
            Accept
         </button>
         <button
            className="control-button"
            id="reject"
            onClick={() => dispatch(rejectMovie(movieId))}
         >
            Reject
         </button>
      </div>
   );
};
