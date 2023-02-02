import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../api/RestaurantFinder";
import { useRestaurantContext } from "../context/RestaurantsContext";
import AddReview from "../components/AddReview";
import Reviews from "../components/Reviews";
import StarRating from "../components/StarRating";

const RestaurantDetail = () => {
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
  }, [id, setSelectedRestaurant]);

  // TODO: rerender reviews on submit, had it before but adding reviews kept rerendering a million times. we can do this by setting state in this page in a function with false as default and pass down as props to addReview

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
          <AddReview checkLength={selectedRestaurant?.reviews?.length} />
        </>
      )}
    </div>
  );
};

export default RestaurantDetail;
