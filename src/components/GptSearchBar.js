import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResult } from "../utils/GptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovies = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptSearchKey = `Act as a Movie Recommendation system and suggest some movies for the query:  ${searchText.current.value}. Only give top 6 movies with comma seperated like the example. Example: Movie 1, Movie 2, Movie3, Movie 4`;
    const gptResults = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: gptSearchKey,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    const gptMoviesNames = gptResults.choices[0]?.message?.content.split(",");

    const moviesDataPromise = gptMoviesNames.map((movie) =>
      searchMovies(movie)
    );

    const tmdbMoviesData = await Promise.all(moviesDataPromise);
    console.log(tmdbMoviesData);
    dispatch(
      addGptMoviesResult({
        movieNames: gptMoviesNames,
        movieResults: tmdbMoviesData,
      })
    );
  };

  return (
    <div className="pt-48 flex justify-center relative z-5">
      <form
        className="bg-black rounded w-1/2 grid grid-cols-12 p-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="bg-white p-3 col-span-9 rounded-md"
          placeholder={lang[langKey].searchPlaceholder}
        />
        <button
          type="button"
          className="col-span-3 bg-red-700 rounded-md text-white mx-2"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
