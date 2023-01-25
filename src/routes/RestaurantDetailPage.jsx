import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../api/RestaurantFinder";
import { useRestaurantContext } from "../context/RestaurantsContext";
import AddReview from "../components/AddReview";
import Reviews from "../components/Reviews";

const RestaurantDetail = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant, setReviews, reviews } =
    useRestaurantContext();

  useEffect(() => {
    try {
      (async () => {
        const response = await RestaurantFinder.get(`/${id}`);

        setReviews(response);

        setSelectedRestaurant(response.data.data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [id, setSelectedRestaurant, setReviews, reviews]);

  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1 className="text-center display-1">
            {selectedRestaurant.restaurant.name}
          </h1>
          <div style={{ maxWidth: "80%", margin: "auto" }} className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReview checkLength={selectedRestaurant?.reviews?.length} />
        </>
      )}
    </div>
  );
};

export default RestaurantDetail;
