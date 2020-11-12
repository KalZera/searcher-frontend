import React from "react";
import "./ListAddress.css";

export const ListAddress = ({ restaurants, setRestaurant }) => {
  return (
    <>
      {restaurants.map((restaurant) => (
        <div key={restaurant.hash_id} className="card box-places">
          <div>
            <div className="info title-name">{restaurant.name}</div>
            <div className="info">
              <span>Endereço</span>: {restaurant.address}
            </div>
          </div>
          <div className="box-button">
            <button onClick={() => setRestaurant(restaurant.hash_id)}>
              Detalhes
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
