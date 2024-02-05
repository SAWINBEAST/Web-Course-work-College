//import React from 'react';
import './ReviewsBlock.css'; // Стили для ReviewsBlock
import data from './data.json';

const ReviewsBlock = () => {
  const { reviews } = data;

  return (
    <div className="reviews-block">
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <strong>{review.name}</strong>: {review.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsBlock;