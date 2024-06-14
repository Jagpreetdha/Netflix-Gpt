function VideoTitle({title,overview}) {
  return (
    <>
    <div className="absolute top-[35%] left-[4%]  text-white text-shadow bg-blend-darken">
      <h1 className="text-5xl font-bold tracking-tight select-none">{title}</h1>
      <p className="py-4 text-lg w-5/12 px-1 select-none leading-relaxed">{overview}</p>
      <div className="flex gap-4 p-2 px-8">
        <button className="bg-white text-black py-2 px-7 rounded-lg text-xl font-medium tracking-tight hover:bg-gray-200 transition">▶️ Play</button>
        <button className="bg-gray-900 text-white py-2 px-7 rounded-lg text-xl font-medium opacity-70">ℹ️More Info</button>
      </div>
    </div>
    </>
  )
}

export default VideoTitle
