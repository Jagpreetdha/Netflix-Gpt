import { useSelector } from "react-redux";
import appStore from "../utils.js/appStore";
import MovieList from "./MovieList";

function GPTMovieSuggestions() {
  const gpt = useSelector((appStore) => appStore.gpt);
  const { movieResults, movieNames } = gpt;
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70">
      <div className="">
        {movieNames.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
}

export default GPTMovieSuggestions;
