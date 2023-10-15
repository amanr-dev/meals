import React from "react";
import { useGlobalContext } from "../Context";
import { Circles } from "react-loader-spinner";

export const Meals = () => {
  const { loading, meals, selectMeal, addToFavorites, selectedMeals } =
    useGlobalContext();

  if (loading) {
    return (
      <section className="flex items-center my-5 justify-center">
        <Circles color="#62b2f4" height={65} width={65} />
      </section>
    );
  }

  if (meals.length < 1) {
    return (
      <section className="w-[100%] text-center my-5">
        <h4>No meals found, Try again leater.</h4>
      </section>
    );
  }

  return (
    <>
      <div className="bg-slate-50 text-start mb-8 p-4 mt-4">
        <h3 className="text-2xl text-slate-600 font-semibold">Our Meals</h3>
      </div>
      <section className="text-center grid grid-cols-4">
        {meals.map((singleMeal) => {
          const {
            idMeal,
            strMeal: title,
            strMealThumb: image,
            strYoutube: link,
          } = singleMeal;

          return (
            <div className="p-4 flex items-center justify-between flex-col">
              <div className="w-[100%]">
                <img
                  src={image}
                  alt="img"
                  className="rounded-lg w-[300px] object-fit"
                  onClick={() => selectMeal(idMeal)}
                />
                {/* <button
                  onClick={() => addToFavorites(idMeal)}
                  className="text-red-800 text-xl"
                >
                  <i className="fa-solid fa-heart"></i>
                </button> */}
              </div>
              <div
                className="flex justify-around my-2 items-center"
                style={{ width: "408px" }}
              >
                <h5 className="text-xl text-slate-600">{title}</h5>
                <a href={link} target="_blank" className="text-red-800 text-xl">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Meals;
