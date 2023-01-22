import React, { useState } from "react";
import RestaurantFinder from "../api/RestaurantFinder";
import { useParams } from "react-router-dom";

const AddReview = () => {
  const { id } = useParams();
  // const [name, setName] = useState("");
  // const [reviewText, setReviewText] = useState("");
  // const [rating, setRating] = useState("Rating");

  const [reviewForm, setReviewForm] = useState({
    name: "",
    reviewText: "",
    rating: "",
  });

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    console.log(id);

    await RestaurantFinder.post(`/${id}/add-review`, {
      ...reviewForm,
    });
  };

  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              value={reviewForm.name}
              onChange={(e) =>
                setReviewForm({ ...reviewForm, name: e.target.value })
              }
              placeholder="name"
              id="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">rating</label>
            <select
              value={reviewForm.rating}
              onChange={(e) =>
                setReviewForm({ ...reviewForm, rating: e.target.value })
              }
              id="rating"
              className="custom-select"
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Review">review</label>
          <textarea
            className="form-control"
            value={reviewForm.reviewText}
            onChange={(e) =>
              setReviewForm({ ...reviewForm, reviewText: e.target.value })
            }
            id="review"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={handleSubmitReview}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
