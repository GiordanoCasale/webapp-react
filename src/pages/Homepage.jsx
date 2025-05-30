import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import MovieCard from '../components/MovieCard'


const initialMovies = [
    {
        id: 1,
        title: "The Avengers",
        director: "Joss Whedon",
        year: 2012,
        poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
        description: "Earth's mightiest heroes must come together and learn to fight as a team to stop Loki and his alien army."

    },
    {
        id: 2,
        title: "The Matrix",
        director: "Lana & Lilly Wachowski",
        year: 1999,
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        description: "A computer hacker learns about the true nature of reality and his role in the war against its controllers."
    },
    {
        id: 3,
        title: "Parasite",
        director: "Bong Joon-ho",
        year: 2019,
        poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        description: "A poor family schemes to infiltrate a wealthy household by posing as unrelated, highly qualified individuals."
    }
];


const Homepage = () => {
    const [movies, setMovies] = useState(initialMovies);
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
