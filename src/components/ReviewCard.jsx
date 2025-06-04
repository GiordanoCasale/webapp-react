import React from 'react'

const ReviewCard = ({ review }) => {
    return (
        <>
            <div className="col-12">
                <div className="card p-4">
                    <p>{review.name}</p>
                    <p>{review.vote}</p>
                    <p>{review.text}</p>
                </div>
            </div>
        </>
    )
}

export default ReviewCard
