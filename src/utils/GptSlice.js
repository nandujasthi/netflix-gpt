import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptSearchPage: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleGptSearchPage } = GptSlice.actions;

export default GptSlice.reducer;
