const initialState = {
   movies: [
      {
         id: "1and3011",
         imageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
         title: "Inferno",
         summary: "Lorem ipsum...",
         rating: 5.3,
      },
      {
         id: "2301abc",
         imageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
         title: "Star Wars: Episode VII - The Force Awakens",
         summary: "Lorem ipsum...",
         rating: 8.2,
      },
   ],
   currentIndex: 0,
};

export const movieReducer = (state = initialState, action) => {
   switch (action.type) {
      case "SET_MOVEIS":
         return { ...state, movies: action.payload };
      case "NEXT_MOVIE":
         return { ...state, currentIndex: state.currentIndex + 1 };
      default:
         return state;
   }
};
