const initialState = {
   movies: [],
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
