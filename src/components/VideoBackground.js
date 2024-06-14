import { useSelector } from "react-redux";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

function VideoBackground({ id }) {
  const trailer = useSelector((store) => store.movies?.trailer);
  useGetMovieTrailer(id);
  return (
    <div className="">
      <iframe
        className="w-screen h-screen -z-10 overflow-hidden"
        src={`https://www.youtube.com/embed/${trailer?.key}?controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&autoplay=1&mute=1
`}
        title="YouTube video player"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; " ></iframe>
    </div>
  );
}

export default VideoBackground;
