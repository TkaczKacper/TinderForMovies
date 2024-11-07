import React from "react";
import { useDispatch } from "react-redux";
import "./Controls.css";
import { acceptMovie, rejectMovie } from "../redux/actions";
import { AppDispatch } from "../redux/store";

interface ControlsProps {
   movieId: string;
}

export const Controls: React.FC<ControlsProps> = ({ movieId }) => {
   const dispatch = useDispatch<AppDispatch>();

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
