import React from 'react'
import { Link } from 'react-router-dom';
import Stars from './Stars';

const MovieCard = ({ movie }) => {
    const { id, title, author, abstract, image } = movie;
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-image-top">
                    <img className='img-fluid' src={movie.image} alt="movie" />
                </div>
                <div className="card-body">
                    <h3 className='text-primary'>{movie.title}</h3>
                    <Stars vote={movie.average_vote || 0} />
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
