import { useState, createContext, useContext } from "react";

const RestaurantsContext = createContext();

const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [reviews, setReviews] = useState([]);

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const addRestaurants = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        setRestaurants,
        reviews,
        setReviews,
        addRestaurants,
        selectedRestaurant,
        setSelectedRestaurant,
      }}
      {...props}
    />
  );
};

const useRestaurantContext = () => {
  const context = useContext(RestaurantsContext);

  if (!context) {
    throw new Error("Couldnt find context with type");
  }

  return context;
};

export { RestaurantsContextProvider, useRestaurantContext };
