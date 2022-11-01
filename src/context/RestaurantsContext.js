import { useState, createContext } from "react";

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

export { RestaurantsContextProvider, RestaurantsContext };
