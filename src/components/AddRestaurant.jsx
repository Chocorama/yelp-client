import React, { useState } from "react";
import RestaurantFinder from "../api/RestaurantFinder";
import { useRestaurantContext } from "../context/RestaurantsContext";

const AddRestaurant = () => {
  const { addRestaurants } = useRestaurantContext();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await RestaurantFinder.post("/", {
        name,
        location,
        price_range: priceRange,
      });

      addRestaurants(response.data.data.restaurant);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mb-4">
      <form>
        <div className="container">
          <div className="row">
            <div className="col">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="name"
              />
            </div>
            <div className="col">
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                className="form-control"
                placeholder="location"
              />
            </div>
            <div className="col">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="custom-select my-1 mx-2"
              >
                <option disabled>Price Range</option>
                <option value={1}>$</option>
                <option value={2}>$$</option>
                <option value={3}>$$$</option>
                <option value={4}>$$$$</option>
                <option value={5}>$$$$$</option>
              </select>
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
