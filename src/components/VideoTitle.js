import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full pt-[20%] px-10 aspect-video absolute bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold mb-4 text-white">{title}</h1>
      <p className="text-lg w-2/6 text-white">{overview}</p>
      <div className="mt-3">
        <button className="p-2 px-5 bg-white rounded-md shadow-sm mr-2 text-black hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="p-2 px-5 bg-gray-400 rounded-md shadow-sm ml-2 bg-opacity-70 text-white">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
