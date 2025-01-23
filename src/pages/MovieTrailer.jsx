import React from "react";
import { getMovieTrailer } from "../services/movieServices";
import { getSeriesTrailer } from "../services/seriesServices";
import { useState, useEffect } from "react";

function MovieTrailer({ id, movie = true }) {
  const [trailerKey, setTrailerKey] = useState("");
  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const result = movie
          ? await getMovieTrailer(id)
          : await getSeriesTrailer(id);

        // Directly find the trailer from result.results
        const trailer = result.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );

        // Set the trailer key if found
        if (trailer) {
          setTrailerKey(trailer.key);
        } else {
          setTrailerKey(""); // No trailer found
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
        setTrailerKey(""); // Handle error state
      }
    };

    fetchTrailer();
  }, [id, movie]); // Ensure dependencies are correct
  return (
    <div className="container mx-auto px-4 py-8 relative mt-24">
      <h1 className="text-6xl  text-center text-red-700 font-bold">Trailer</h1>

      {trailerKey ? (
        <div className="flex items-center justify-center mt-24">
          <iframe
            width="1280"
            height="780"
            src={`https://www.youtube.com/embed/${trailerKey}?`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p className="text-white text-3xl">No trailer found.</p>
      )}
    </div>
  );
}

export default MovieTrailer;
