import { MovieAction, MovieState } from "../types/types";

const initialState: MovieState = {
   movies: [
      {
         id: "1and3011",
         imageURL:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
         title: "Inferno",
         summary: "Lorem ipsum...",
         rating: 5.3,
      },
      {
         id: "2301abc",
         imageURL:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
         title: "Star Wars: Episode VII - The Force Awakens",
         summary: "Lorem ipsum...",
         rating: 2.3,
      },
      {
         id: "6202jkl",
         imageURL:
            "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
         title: "Interstellar",
         summary: "Lorem ipsum...",
         rating: 9.6,
      },
      {
         id: "1040vwx",
         imageURL: "https://m.media-amazon.com/images/I/715YKSv-XuL.jpg",
         title: "Harry Potter and the Sorcerer's Stone",
         summary: "Lorem ipsum...",
         rating: 7.6,
      },
   ],
   currentIndex: 0,
};

export const movieReducer = (
   state = initialState,
   action: MovieAction
): MovieState => {
   switch (action.type) {
      case "SET_MOVIES":
         return { ...state, movies: action.payload };
      case "NEXT_MOVIE":
         return { ...state, currentIndex: state.currentIndex + 1 };
      default:
         return state;
   }
};
