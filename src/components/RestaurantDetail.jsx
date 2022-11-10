import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../api/RestaurantFinder";
import { useRestaurantContext } from "../context/RestaurantsContext";
import AddReview from "./AddReview";
import Reviews from "./Reviews";

const RestaurantDetail = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useRestaurantContext();

  useEffect(() => {
    try {
      (async () => {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data.restaurant);
        //   console.log(response.data.data.restaurant);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [id, setSelectedRestaurant]);

  return (
    <div>
      {selectedRestaurant && (
        <>
          <div className="mt-3">
            <Reviews />
          </div>
          <AddReview />
        </>
      )}
    </div>
  );
};

export default RestaurantDetail;
