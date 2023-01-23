import React from "react";
import StarRating from "./StarRating";

const Reviews = ({ reviews }) => {
  return (
    <div className="row row-cols-3 mb-2">
      {reviews.map(({ id, name, review, rating }) => (
        <div key={id} style={{ minWidth: "240px" }} className="container">
          <div className="row">
            <div className="card bg-primary text-white">
              <div className="card-header">
                <span>{name}</span>
                <span>
                  <StarRating rating={rating} />
                </span>
              </div>
              <div className="card-body">
                <p className="card-text">{review}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
