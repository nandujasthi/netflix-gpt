import { IMG_CDN_PATH } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-2">
      <img alt="Movie Card" src={IMG_CDN_PATH + posterPath} />
    </div>
  );
};

export default MovieCard;
