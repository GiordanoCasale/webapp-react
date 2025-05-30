import React from 'react'
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const { id, title, author, abstract, image } = movie;
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-image-top">
                    <img className='img-fluid' src={movie.poster} alt="movie" />
                </div>
                <div className="card-body">
                    <h3 className='text-primary'>{movie.title}</h3>
                    <h4>
                        <em>{movie.director}</em>
                    </h4>
                    <p>{movie.description}</p>
                    <Link className='btn btn-primary' to={`/movies/${id}`}>
                        Leggi tutto
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
