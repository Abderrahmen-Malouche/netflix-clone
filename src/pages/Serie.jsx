import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSeriesDetails } from '../services/seriesServices'
import { TiArrowLeftOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import MovieTrailer from './MovieTrailer';
function Serie() {
    const {id} =useParams()
    const [serie,setSerie]=useState({})
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const serieFetchResponse=await getSeriesDetails(id);
                setSerie(serieFetchResponse || {});
            }
            catch(error){
                console.error("Error fetching data:",error)
            }
        }
        fetchData();
    },[id])
      return (
        <section className="container mx-auto px-4 py-8 relative">
          <div className="absolute top-0 left-0 w-full h-full">
            <Link to="/">
              <TiArrowLeftOutline className="text-3xl text-white hover:text-red-700" />
            </Link>
          </div>
          <div className="flex lg:flex-row sm:flex-col items-center ml-72 ">
            <img
              src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
              alt={serie.name}
              className="w-80 h-160 rounded-lg shadow-lg mr-20"
            />
            <div className="ml-4 flex flex-col">
              <h1 className="text-white  text-7xl mt-4 hover:text-red-700 hover:pointer mb-7">
                {serie.name}
              </h1>
              <div className="flex items-center text-left space-x-9">
                <p className="text-white text-lg mt-2 flex justify-center items-center">
                  <FaStar className="text-red-700  mr-2" /> {serie.vote_average}
                </p>
                
                <p className="text-white text-lg mt-2"> {serie.number_of_seasons} seasons</p>
              </div>
              <p className="text-slate-200 text-lg mt-9">{serie.overview}</p>
    
                <h3 className=" text-lg text-red-700">Country :</h3>
                <div className="flex space-x-5 hover:text-red-700 text-left">
                  {serie?.production_countries && serie.production_countries > 0 ?
                    serie.production_countries.map((country, index) => (
                      <h3 key={index} className="text-white text-lg ">
                        {country.name}
                      </h3>
                    )): <p className="text-white text-lg ">No countries available</p>}
                </div>
              
                <h3 className="text-red-700 text-lg">Genre :</h3>
                <div className="flex space-x-5 hover:text-red-700 text-left">
                  {serie?.genres && serie.genres.length > 0 ? (
                    serie.genres.map((genre) => (
                      <p key={genre.id} className="text-white text-lg  text-left">
                        {genre.name}
                      </p>
                    ))
                  ) : (
                    <p className="text-white text-lg mt-2">No genres available</p>
                  )}
                </div>
                <h3 className="text-red-700 text-lg">Released :</h3>
                <h3 className="text-white text-lg  text-left">{serie.first_air_date}</h3>
                <h3 className="text-red-700 text-lg">Production :</h3>
                <div className=" flex space-x-2 hover:text-red-700">
                  {serie?.production_companies && serie.production_companies.length > 0 ?  serie.production_companies.map((company, index) => (
                    <h3 key={index} className="text-white text-base  text-left ">
                      {company.name}
                    </h3>
                  )): <p className="text-white text-lg">No production companies available</p>}
              </div>
                <h3 className="text-red-700 text-lg">Tags :</h3>
                {serie.tagline? <p className="text-white text-left">{serie.tagline}</p>:<p className="text-white text-left">No tagline available</p>}
            </div>
          </div>
          <MovieTrailer id={id} movie={false}/>
        </section>
      );
}

export default Serie