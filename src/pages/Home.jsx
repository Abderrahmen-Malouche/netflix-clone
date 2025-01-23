  import React from "react";
  import { useEffect, useState } from "react";
  import { getTrendingMovies, getPopularMovies } from "../services/movieServices";
  import {
    getTrendingSeries,
    getPopularSeries,
  } from "../services/seriesServices";
  import { Link } from "react-router-dom";
import MovieCard from "./movieCard";
import Movie from "./Movie";
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
            {trendingMovies ? (
              trendingMovies.slice(0, 6).map((movie) => (
                <Link key={movie.id} to={`movies/${movie.id}`}>
                  <MovieCard key={movie.id} movie={true} poster_path={movie.poster_path} title={movie.title} />
                </Link>
              ))
            ) : (
              <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
              </div>
            )}
            {}
          </div>
        </div>
        <div>
          <h1 className="text-white text-4xl outline-slate-500 font-bold mt-16">
            Trending Series
          </h1>
          <div className="grid xl:grid-cols-6 gap-2 sm:grid-cols-3">
            {trendingSeries ? (
              trendingSeries.slice(0, 6).map((serie) => (
                <Link key={serie.id} to={`series/${serie.id}`}>
                  <MovieCard key={serie.id} movie={false} poster_path={serie.poster_path} name={serie.name} />
                </Link>
              ))
            ) : (
              <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        </div>
        <div>
          <h1 className="text-white text-4xl outline-slate-500 font-bold mt-16">
            Popular Movies
          </h1>
          <div className="grid xl:grid-cols-6 gap-2 sm:grid-cols-3">
            {popularMovies ? (
              popularMovies.slice(0, 6).map((movie) => (
                <Link key={movie.id} to={`movies/${movie.id}`}>
                  <MovieCard key={movie.id} movie={true} poster_path={movie.poster_path} title={movie.title} />
                </Link>
              ))
            ) : (
              <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        </div>
        <div>
          <h1 className="text-white text-4xl outline-slate-500 font-bold mt-16">
            Popular Series
          </h1>
          <div className="grid xl:grid-cols-6 gap-2 sm:grid-cols-3">
            {popularSeries ? (
              popularSeries.slice(0, 6).map((serie) => (
                <Link key={serie.id} to={`series/${serie.id}`}>
                  <MovieCard key={serie.id} movie={false} poster_path={serie.poster_path} name={serie.name} />
                </Link>
              ))
            ) : (
              <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin">Loading</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  export default Home;
