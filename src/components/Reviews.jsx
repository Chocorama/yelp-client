import React from "react";
import StarRating from "./StarRating";

const Reviews = ({ reviews }) => {
  console.log(reviews);

  return (
    <div className="row row-cols-3 mb-2">
      {reviews.map(({ id, name, review, rating }) => (
        <div
          key={id}
          style={{ maxWidth: "30%" }}
          className="card text-white bg-primary mb-3 mr-4"
        >
          <div className="card-header d-flex justify-content-between">
            <span>{name}</span>
            <span>
              <StarRating rating={rating} />
            </span>
          </div>
          <div className="card-body">
            <p className="card-text">{review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
