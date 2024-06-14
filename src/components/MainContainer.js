import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;
  const mainMovie = movies[0]
  const {overview,original_title,id} = mainMovie


  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground id={id}/>
    </div>
  );
}

export default MainContainer;
