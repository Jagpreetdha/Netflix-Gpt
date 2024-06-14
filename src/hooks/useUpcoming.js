import { useEffect } from "react";
import { API_OPTIONS } from "../utils.js/constants";
import { useDispatch } from "react-redux";
import { addUpcoming } from "../utils.js/movieSlice";

function useUpComing() {
  const dispatch = useDispatch();
  async function getUpcoming() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addUpcoming(json.results));
  }
  useEffect(function () {
    getUpcoming();
  }, []);
}

export default useUpComing;
