import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ReviewCard from '../components/ReviewCard'
import Stars from '../components/Stars'
import ReviewForm from '../components/ReviewForm'


const Moviepage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const fetchMovie = () => {
        axios.get(`http://127.0.0.1:3000/movies/${id}`)
            .then((response) => {
                console.log(response.data)
                setMovie(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    };


    useEffect(() => {
        fetchMovie();
    }, []);


    return (
        <>
            <div className='row'>
                <div className="col-12 col-md-6 col-lg-4">
                    <img src={movie.image} className="img-fluid" alt="movie" /></div>
                <div className="col-12 col-md-6 col-lg-4">
                    <h1>{movie.title}</h1>
                    <h3>{movie.director}</h3>
                    <Stars vote={movie.average_vote || 0} />
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
                <ReviewForm movie_id={movie.id} reloadReviews={fetchMovie} />
            </div>
        </>
    )
}

export default Moviepage