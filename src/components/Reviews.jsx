import React from "react";
import StarRating from "./StarRating";

const Reviews = ({ reviews }) => {
  console.log(reviews);

  return (
    <div className="row row-cols-3 mb-2">
      {reviews.map(({ id, name, review, rating }) => (
        <div className="container">
          <div className="row">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
