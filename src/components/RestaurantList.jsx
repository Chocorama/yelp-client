import React, { useEffect } from "react";
import RestaurantFinder from "../api/RestaurantFinder";
import { useRestaurantContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";
import StarRating from "../components/StarRating";

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useRestaurantContext();
  let history = useHistory();

  useEffect(() => {
    try {
      (async function fetchData() {
        const response = await RestaurantFinder("/");
        setRestaurants(response.data.data.restaurants);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [setRestaurants]);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await RestaurantFinder.delete(`/${id}`);

      const updatedRestaurantArray = restaurants.filter(
        (restaurant) => restaurant.id !== id
      );

      setRestaurants(updatedRestaurantArray);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`/restaurants/${id}/update`);
  };

  const handleRestaurantSelect = (restaurantId) => {
    history.push(`/restaurants/${restaurantId}`);
  };

  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="table-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((restaurant) => (
              <tr
                style={{ cursor: "pointer" }}
                onClick={() => handleRestaurantSelect(restaurant.id)}
                key={restaurant.id}
              >
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{"$".repeat(restaurant.price_range)}</td>
                <td>{<StarRating rating={restaurant.average_rating} />}</td>
                <td>
                  <button
                    onClick={(e) => handleUpdate(e, restaurant.id)}
                    className="btn btn-warning"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={(e) => handleDelete(e, restaurant.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          {/* <tr>
            <td>mcdonalds</td>
            <td>new york</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>mcdonalds</td>
            <td>new york</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
