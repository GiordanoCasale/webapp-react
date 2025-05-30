import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ReviewCard from '../components/ReviewCard'

const initialMovies = [
    {
        id: 1,
        title: "The Avengers",
        director: "Joss Whedon",
        year: 2012,
        poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
        description: "Earth's mightiest heroes must come together and learn to fight as a team to stop Loki and his alien army.",
        reviews: [
            {
                id: 1,
                author: "Luca",
                rating: 4,
                text: "Spettacolare! Gli effetti speciali sono incredibili e i personaggi sono tutti iconici."
            },
            {
                id: 2,
                author: "Giulia",
                rating: 3,
                text: "Divertente, ma un po' troppo caotico in certi momenti. Hulk è il mio preferito!"
            },
            {
                id: 3,
                author: "Marco",
                rating: 5,
                text: "Uno dei migliori cinecomic di sempre. Da rivedere con gli amici!"
            }
        ]
    },
    {
        id: 2,
        title: "The Matrix",
        director: "Lana & Lilly Wachowski",
        year: 1999,
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        description: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
        reviews: [
            {
                id: 1,
                author: "Sara",
                rating: 5,
                text: "Un capolavoro. Filosofia, azione e una visione del futuro ancora attuale."
            },
            {
                id: 2,
                author: "Andrea",
                rating: 4,
                text: "Stiloso e profondo. Neo e Morpheus sono personaggi indimenticabili."
            },
            {
                id: 3,
                author: "Davide",
                rating: 4,
                text: "Mi ha fatto riflettere sulla realtà. Da vedere assolutamente almeno una volta!"
            }
        ]
    },
    {
        id: 3,
        title: "Parasite",
        director: "Bong Joon-ho",
        year: 2019,
        poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        description: "A poor family schemes to infiltrate a wealthy household by posing as unrelated, highly qualified individuals.",
        reviews: [
            {
                id: 1,
                author: "Chiara",
                rating: 5,
                text: "Geniale e inquietante. La critica sociale è potente e ben costruita."
            },
            {
                id: 2,
                author: "Francesco",
                rating: 4,
                text: "Tensione continua e colpi di scena ben dosati. Merita tutti i premi ricevuti."
            },
            {
                id: 3,
                author: "Elisa",
                rating: 5,
                text: "Un film coreano che lascia il segno. Regia e sceneggiatura impeccabili."
            }
        ]
    }
];



const Moviepage = () => {
    const { id } = useParams();
    const [movies, setMovies] = useState(initialMovies);
    const [movie, setMovie] = useState({});

    const fetchMovie = () => {
        movies.forEach((actualMovie) => {
            if (actualMovie.id === parseInt(id)) {
                setMovie(actualMovie);
            };
        });

    };

    useEffect(() => {
        fetchMovie();
    }, []);


    return (
        <>
            <div className='row'>
                <div className="col-12 col-md-6 col-lg-4">
                    <img src={movie.poster} className="img-fluid" alt="movie" /></div>
                <div className="col-12 col-md-6 col-lg-4">
                    <h1>{movie.title}</h1>
                    <h3>{movie.director}</h3>
                    <h3>{movie.year}</h3>
                    <p>{movie.description}</p>
                </div>
            </div>
            <div className="row gy-4">
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        <h3>Our community reviews</h3>
                    </div>
                </div>
                {movie.reviews && movie.reviews.map((review, index) => (
                    <ReviewCard review={review} key={`review-${review.id}`} />
                ))}
            </div>
        </>
    )
}

export default Moviepage
