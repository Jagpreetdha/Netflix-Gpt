import { useEffect } from "react";
import { API_OPTIONS } from "../utils.js/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils.js/movieSlice";

function usePopular() {
  const dispatch = useDispatch();
  async function getNowPlayingMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovies(json.results));
  }
  useEffect(function () {
    getNowPlayingMovies();
  }, []);
}

export default usePopular;
