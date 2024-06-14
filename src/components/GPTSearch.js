import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

function GPTSearch() {
  return (
    <div className="pt-24 ">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="bg"
        className="h-screen w-screen bg-gradient-to-b from-black absolute top-0"
      />
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
}
export default GPTSearch;
