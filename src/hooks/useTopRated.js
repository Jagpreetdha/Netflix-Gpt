import { useEffect } from "react";
import { API_OPTIONS } from "../utils.js/constants";
import { useDispatch } from "react-redux";
import {  addTopRated } from "../utils.js/movieSlice";

function useTopRated() {
  const dispatch = useDispatch();
  async function getTopRated() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addTopRated(json.results));
  }
  useEffect(function () {
    getTopRated();
  }, []);
}

export default useTopRated;
