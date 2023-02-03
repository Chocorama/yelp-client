import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../api/RestaurantFinder";
import { useRestaurantContext } from "../context/RestaurantsContext";
import AddReview from "../components/AddReview";
import Reviews from "../components/Reviews";
import StarRating from "../components/StarRating";

const RestaurantDetail = () => {
  const [addReview, setAddReview] = useState({});
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useRestaurantContext();

  useEffect(() => {
    try {
      (async () => {
        const response = await RestaurantFinder.get(`/${id}`);

        setSelectedRestaurant(response.data.data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [id, setSelectedRestaurant, addReview, setAddReview]);

  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1 className="text-center display-1">
            {selectedRestaurant.restaurant.name}
          </h1>
          <div className="text-center">
            {
              <StarRating
                rating={selectedRestaurant.restaurant.average_rating}
              />
            }
          </div>
          <div style={{ maxWidth: "80%", margin: "auto" }} className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReview
            addReview={setAddReview}
            checkLength={selectedRestaurant?.reviews?.length}
          />
        </>
      )}
    </div>
  );
};

export default RestaurantDetail;
