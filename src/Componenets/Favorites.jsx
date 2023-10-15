import React from "react";
import { useGlobalContext } from "../Context";

export const Favorites = () => {
  const { favorites, selectMeal, removeFromFavorites } = useGlobalContext();
  return (
    <div className="mb-2 p-8 bg-blue-500">
      <div className="favorites-content">
        <div className="favorites-container">
          {favorites.map((item) => {
            const { idMeal, strMealThumb: image } = item;

            return (
              <div key={idMeal} className="favorite-item">
                <button
                  className="remove-btn"
                  onClick={() => removeFromFavorites(idMeal)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <img
                  src={image}
                  alt="img"
                  className="favorite-img img"
                  onClick={() => selectMeal(idMeal, true)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
