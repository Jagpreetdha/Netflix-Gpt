import { useDispatch, useSelector } from "react-redux";
import lang from "../utils.js/languageConstants";
import appStore from "../utils.js/appStore";
import useOpenAi from "../utils.js/useOpenAi";
import { useRef, useState } from "react";
import { addGPTResults, addOPEN_AI_KEY } from "../utils.js/gptSlice";
import { API_OPTIONS } from "../utils.js/constants";

function GPTSearchBar() {
  const language = useSelector((appStore) => appStore.config.lang);
  const openai = useOpenAi();
  const [err, setErr] = useState(false);
  const [openaiKey, setOpenaiKey] = useState("");
  const searchTxt = useRef(null);
  const dispatch = useDispatch();
  const OPEN_AI_Key = useSelector((appStore) => appStore.gpt.OPENAI_KEY);

  //search movie in TMDB database

  async function searchMovieTMDB({ movie }) {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query&=" +
        movie +
        "include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  }

  async function handleGPTSearchClick() {
    //Make an API call to GPT API and get Movie Results
    try {
      const getQuery =
        "Act as a Movie Recommendation system and suggest movie for the query " +
        searchTxt.current.value +
        ". only give name of 5 movies, cooma separated like the example result ahead. Example Result : Gadar, Sholay, Hungama, Golmaal, Koi Mil Gaya";
      const getResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: getQuery }],
        model: "gpt-3.5-turbo",
      });
      const gptMovies = getResults.choices?.[0]?.message?.content.split(",");

      //For each movie i will search TMDB API
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(
        addGPTResults({ movieNames: gptMovies, movieResults: tmdbResults })
      );

      setErr(false);
    } catch (err) {
      setErr(true);
    }
  }
  if (err) {
    return (
      <p className="absolute top-[40%] left-[30%] text-2xl text-red-500 bg-neutral-700 p-4">
        Error: Wrong Api or Api Access Token limit exceeded
      </p>
    );
  } else {
    return (
      <div>
        {!OPEN_AI_Key && (
          <div className="bg-black top-[30%] left-[25%] absolute w-1/2 p-2">
            <input
              type="text"
              placeholder={lang[language].openaiInput}
              className="w-[80%] p-2 mr-2"
              value={openaiKey}
              onChange={(e) => setOpenaiKey(e.target.value)}
            />
            <button
              className="bg-gray-400 text-white w-[18%] p-2 rounded-lg"
              onClick={() => dispatch(addOPEN_AI_KEY(openaiKey))}>
              Enter
            </button>
          </div>
        )}

        {OPEN_AI_Key && (
          <form
            action=""
            onSubmit={(e) => e.preventDefault()}
            className="bg-black w-1/2 absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] grid grid-cols-12">
            <input
              type="text"
              placeholder={lang[language].gptSearchPlaceholder}
              className="p-3 m-2 col-span-9"
              ref={searchTxt}
            />
            <button
              className="bg-red-500 text-white rounded-lg col-span-3 m-2"
              onClick={handleGPTSearchClick}>
              {lang[language].search}
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default GPTSearchBar;
