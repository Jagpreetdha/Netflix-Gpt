import { IMG_CDN_URL } from "../utils.js/constants"

function MovieCard({posterPath}) {
  if(!posterPath) return null
  return (
    <div className="w-40 flex-none">
      <img src={IMG_CDN_URL+posterPath} alt="" />
    </div>
  )
}

export default MovieCard
