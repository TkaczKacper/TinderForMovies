export type MovieAction =
   | { type: "SET_MOVIES"; payload: Movie[] }
   | { type: "NEXT_MOVIE" };

export type Movie = {
   id: string;
   imageURL: string;
   title: string;
   summary: string;
   rating: number;
};

export type MovieState = {
   movies: Movie[];
   currentIndex: number;
};

export type Dispatch = (action: MovieAction) => void;
