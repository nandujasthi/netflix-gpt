import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-48 flex justify-center relative z-5">
      <form className="bg-black rounded w-1/2 grid grid-cols-12 p-6">
        <input
          type="text"
          className="bg-white p-3 col-span-9 rounded-md"
          placeholder={lang[langKey].searchPlaceholder}
        />
        <button
          type="button"
          className="col-span-3 bg-red-700 rounded-md text-white mx-2"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
