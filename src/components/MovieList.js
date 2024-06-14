import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  if (!movies) return;
  return (
    <div className="py-5 px-6 text-white">
      <h1 className="text-3xl pb-2">{title}</h1>

      <div className="flex overflow-x-scroll gap-2 hide-scrollbar">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie?.poster_path} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
