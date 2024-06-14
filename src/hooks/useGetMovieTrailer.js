import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils.js/movieSlice";
import { API_OPTIONS } from "../utils.js/constants";
import { useEffect } from "react";


function useGetMovieTrailer(id) {
  const dispatch = useDispatch()
  async function getMovie() {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    const filterData = json.results.filter((video) => video?.type === "Trailer");
    const trailer = filterData[0];
    dispatch(addTrailerVideo(trailer))
    console.log(trailer);
  }
  useEffect(function () {
    getMovie();
  },[]);

}

export default useGetMovieTrailer
