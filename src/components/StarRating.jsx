import React from "react";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating === null) {
      return "No reviews yet!";
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      console.log(Math.ceil(rating));
      stars.push(
        <i className="fa-regular fa-star-half-stroke text-warning"></i>
      );
    } else if (i <= rating) {
      stars.push(<i key={i} className="fa-solid fa-star text-warning"></i>);
    } else {
      stars.push(<i key={i} className="fa-regular fa-star text-warning"></i>);
    }
  }

  return <div style={{ display: "inline" }}>{stars}</div>;
};

export default StarRating;
