import React from "react";
import { useEffect, useState } from "react";
import { getTrendingMovies, getPopularMovies } from "../services/movieServices";
import {
  getTrendingSeries,
  getPopularSeries,
} from "../services/seriesServices";

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingSeries, setTrendingSeries] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingMoviesResponse = await getTrendingMovies();
        const trendingSeriesResponse = await getTrendingSeries();
        const popularMoviesResponse = await getPopularMovies();
        const popularSeriesResponse = await getPopularSeries();

        setTrendingMovies(trendingMoviesResponse.results || []); // Ensure safety
        setTrendingSeries(trendingSeriesResponse.results || []); // Ensure safety
        setPopularMovies(popularMoviesResponse.results || []); // Ensure safety
        setPopularSeries(popularSeriesResponse.results || []); // Ensure safety

        console.log("Trending Series:", trendingSeriesResponse.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container mx-auto mt-16">
      <div>
        <h1 className="text-white text-4xl outline-slate-500 font-bold">
          Trending Movies
        </h1>
        <div className="grid xl:grid-cols-6 gap-2 sm:grid-cols-3">
          {trendingMovies.slice(0, 6).map((movie) => (
            <div>
            <div key={movie.id} className="mt-20 flex flex-col justify-center items-center border-4 border-red-700 px-2 py-4 rounded-md w-[250px] h-[400px] overflow-hidden relative">
              {" "}
              {/* Use a unique key for React elements */}
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="absolute top-0 left-0 h-full object-cover"
                />
            </div>
            <h2 className="text-xl text-center text-white pt-6 ">{movie.title}</h2>
          </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-white text-4xl outline-slate-500 font-bold mt-16">
          Trending Series
        </h1>
        <div className="grid xl:grid-cols-6 gap-2 sm:grid-cols-3">
          {trendingSeries.slice(0, 6).map((serie) => (
            <div>
            <div key={serie.id} className="mt-20 flex flex-col justify-center items-center border-4 border-red-700 px-2 py-4 rounded-md w-[250px] h-[400px] overflow-hidden relative">
              {" "}
              {/* Use a unique key for React elements */}
              <img
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.title}
                className="absolute top-0 left-0 h-full object-cover"
                />
            </div>
            <h2 className="text-xl text-center text-white pt-6 ">{serie.name}</h2>
          </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-white text-4xl outline-slate-500 font-bold mt-16">
          Popular Movies
        </h1>
        <div className="grid xl:grid-cols-6 gap-2 sm:grid-cols-3">
          {popularMovies.slice(0, 6).map((movie) => (
            <div>
            <div key={movie.id} className="mt-20 flex flex-col justify-center items-center border-4 border-red-700 px-2 py-4 rounded-md w-[250px] h-[400px] overflow-hidden relative">
              {" "}
              {/* Use a unique key for React elements */}
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="absolute top-0 left-0 h-full object-cover"
                />
            </div>
            <h2 className="text-xl text-center text-white pt-6 ">{movie.title}</h2>
          </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-white text-4xl outline-slate-500 font-bold mt-16">
          Popular Series
        </h1>
        <div className="grid xl:grid-cols-6 gap-2 sm:grid-cols-3">
          {popularSeries.slice(0, 6).map((serie) => (
            <div>
            <div key={serie.id} className="mt-20 flex flex-col justify-center items-center border-4 border-red-700 px-2 py-4 rounded-md w-[250px] h-[400px] overflow-hidden relative">
              {" "}
              {/* Use a unique key for React elements */}
              <img
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.name}
                className="absolute top-0 left-0 h-full object-cover"
                />
            </div>
            <h2 className="text-xl text-center text-white pt-6 ">{serie.name}</h2>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
