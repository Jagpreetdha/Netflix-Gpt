import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopular from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpComing from "../hooks/useUpcoming";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import appStore from "../utils.js/appStore";

function Browse() {
  const btn = useSelector((appStore)=>appStore.gpt.btn);
  useNowPlayingMovies();
  usePopular();
  useTopRated();
  useUpComing();
  return (
    <div>
      <Header />
      {btn && <GPTSearch />}
      {!btn &&<>
      <MainContainer />
      <SecondaryContainer />
      </>}
      
    </div>
  );
}

export default Browse;
