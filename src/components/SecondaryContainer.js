import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black -mt-32">
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
      <MovieList title="Top Rated" movies={movies?.topRated} />
      <MovieList title="Popular" movies={movies?.nowPopular} />
      <MovieList title="Upcoming" movies={movies?.upcoming} />
    </div>
  );
}

export default SecondaryContainer;
