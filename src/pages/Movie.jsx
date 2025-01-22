import React from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/movieServices";
import { useState, useEffect } from "react";
import { TiArrowLeftOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieFetchRequest = await getMovieDetails(id);
        setMovie(movieFetchRequest || {});
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <section className="container mx-auto px-4 py-8 relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <Link to="/">
          <TiArrowLeftOutline className="text-3xl text-white hover:text-red-700" />
        </Link>
      </div>
      <div className="flex lg:flex-row sm:flex-col items-center ml-72 ">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-80 h-160 rounded-lg shadow-lg mr-20"
        />
        <div className="ml-4 flex flex-col">
          <h1 className="text-white  text-7xl mt-4 hover:text-red-700 hover:pointer mb-12">
            {movie.title}
          </h1>
          <div className="flex items-center justify-center space-x-9">
            <p className="text-white text-lg mt-2 flex justify-center items-center">
              <FaStar className="text-red-700  mr-2" /> {movie.vote_average}
            </p>
            <p className="text-white text-lg mt-2">{movie.runtime} min</p>
          </div>
          <p className="text-slate-200 text-lg mt-9">{movie.overview}</p>

          <div className="flex space-x-52 mt-16 items-center  justify-left">
            <h3 className=" text-lg text-red-700">Country :</h3>
            <div className="flex space-x-5 hover:text-red-700 text-left">
              {movie?.production_countries && movie.production_countries > 0 ?
                movie.production_countries.map((country, index) => (
                  <h3 key={index} className="text-white text-lg mt-2">
                    {country.name}
                  </h3>
                )): <p className="text-white text-lg mt-2">No countries available</p>}
            </div>
          </div>
          <div className="flex space-x-52 mt-16 items-center  justify-left">
            <h3 className="text-red-700 text-lg">Genre :</h3>
            <div className="flex space-x-5 hover:text-red-700 text-left">
              {movie?.genres && movie.genres.length > 0 ? (
                movie.genres.map((genre) => (
                  <p key={genre.id} className="text-white text-lg mt-2 text-left">
                    {genre.name}
                  </p>
                ))
              ) : (
                <p className="text-white text-lg mt-2">No genres available</p>
              )}
            </div>
          </div>
          <div className="flex space-x-72 mt-8 items-center  justify-left">
            <h3 className="text-red-700 text-lg">Released :</h3>
            <h3 className="text-white text-lg mt-2 text-left">{movie.release_date}</h3>
          </div>
          <div className="flex mt-8 items-center justify-left">
            <h3 className="text-red-700 text-lg">Production :</h3>
            <div className="ml-6 flex space-x-2 hover:text-red-700">
              {movie?.production_companies && movie.production_companies.length > 0 ?  movie.production_companies.map((company, index) => (
                <h3 key={index} className="text-white text-base mt-2 text-left ">
                  {company.name}
                </h3>
              )): <p className="text-white text-lg mt-2">No production companies available</p>}
            </div>
          </div>
          <div className="flex space-x-72 mt-8 items-center  justify-left">
            <h3 className="text-red-700 text-lg">Tags :</h3>
            <p className="text-white">{movie.tagline}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Movie;
