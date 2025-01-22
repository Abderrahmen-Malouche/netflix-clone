import React from 'react'
import { useEffect } from 'react'
import { getTrendingMovies} from '../services/movieServices'
function Home() {
  useEffect(() => {
    getTrendingMovies()
    console.log("Home")
  },[])
  return (
    <div>Home</div>
  )
}

export default Home