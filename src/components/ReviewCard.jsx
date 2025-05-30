import React from 'react'

const ReviewCard = ({ review }) => {
    return (
        <>
            <div className="col-12">
                <div className="card p-4">
                    <p>{review.author}</p>
                    <p>{review.text}</p>
                    <p>{review.rating}</p>
                </div>
            </div>
        </>
    )
}

export default ReviewCard
