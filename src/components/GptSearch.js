import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { LOGIN_BG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute">
        <img src={LOGIN_BG} alt="Login Background" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
