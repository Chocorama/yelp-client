import { useState, createContext, useContext } from "react";

const RestaurantsContext = createContext();

const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);

  return (
    <RestaurantsContext.Provider
      value={{ restaurants, setRestaurants }}
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
