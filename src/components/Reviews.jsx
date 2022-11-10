import React from "react";
import StarRating from "./StarRating";

const Reviews = () => {
  return (
    <div className="row row-cols-3 mb-2">
      <div
        style={{ maxWidth: "30%" }}
        className="card text-white bg-primary mb-3 mr-4"
      >
        <div className="card-header d-flex justify-content-between">
          <span>Joan</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">This place was awesome</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
