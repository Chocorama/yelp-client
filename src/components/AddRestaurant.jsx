import React from "react";

const AddRestaurant = () => {
  return (
    <div className="mb-4">
      <form>
        <div className="container">
          <div className="row">
            <div className="col">
              <input type="text" className="form-control" placeholder="name" />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="location"
              />
            </div>
            <div className="col">
              <select className="custom-select my-1 mx-2">
                <option disabled> Price Range</option>
                <option value={1}>$</option>
                <option value={2}>$$</option>
                <option value={3}>$$$</option>
                <option value={4}>$$$$</option>
                <option value={5}>$$$$$</option>
              </select>
              <button type="button" class="btn btn-primary">
                Primary
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;