import { useEffect } from "react";
import { API_OPTIONS } from "../utils.js/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils.js/movieSlice";


function useNowPlayingMovies() {
  const dispatch = useDispatch()
  async function getNowPlayingMovies (){
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const json = await data.json()
    console.log(json.results)
    dispatch(addNowPlayingMovies(json.results))
  }
  useEffect(function(){
getNowPlayingMovies()
  },[])
  
}

export default useNowPlayingMovies
