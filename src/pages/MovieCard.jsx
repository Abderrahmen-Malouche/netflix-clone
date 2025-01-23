import React from "react";

function MovieCard({ movie = true, title, name, poster_path }) {
  return (
    <div>
      <div className="mt-20 flex flex-col justify-center items-center border-4 border-red-700 px-2 py-4 rounded-md w-[250px] h-[400px] overflow-hidden relative">
        {" "}
        {/* Use a unique key for React elements */}
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={movie?title:name}
          className="absolute top-0 left-0 h-full object-cover"
        />
      </div>
      {movie? <h2 className="text-xl text-center text-white pt-6 ">{title}</h2> : <h2 className="text-xl text-center text-white pt-6 ">{name}</h2>}
    </div>
  );
}

export default MovieCard;
