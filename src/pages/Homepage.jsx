import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'



const Homepage = () => {
    const [movies, setMovies] = useState([]);


    const fetchMovies = () => {
        axios.get('http://localhost:3000/movies')
            .then((response) => {
                console.log(response.data)
                setMovies(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <>
            <h1 className='text-primary'>Bool Movies</h1>
            <h2><i>The Best Homevideo only for you</i></h2>
            <div className="row gy-4">
                {movies.map((movie) => {
                    return <MovieCard movie={movie} key={`movie-${movie.id}`} />
                })};
            </div>
        </>
    )
}

export default Homepage
