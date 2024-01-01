import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovieResults: null,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearchPage: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMoviesResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSearchPage, addGptMoviesResult } = GptSlice.actions;

export default GptSlice.reducer;
