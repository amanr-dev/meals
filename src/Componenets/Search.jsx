import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../Context";
import logo from "./pngs/logo.png";
// import

export const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm } = useGlobalContext();
  const { fetchRandomMeals } = useGlobalContext();

  const handleChange = (e) => {
    console.log("handleChange");
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("handleSubmit");
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
    }
  };

  return (
    <header className="flex items-center justify-between p-2">
      <form
        onSubmit={handleSubmit}
        className="flex justify-between items-center w-[95vw]"
      >
        <a href="/" type="button" className="flex-row flex items-center px-8">
          <img src={logo} alt="logo" height={50} width={50} />
          <span id="logo">Meals</span>
        </a>
        <div>
          <input
            value={text}
            onChange={handleChange}
            type="text"
            placeholder="Search your Meal"
            name="text"
            id="text-input"
            className="bg-slate-100 px-8 py-2 rounded-full outline-none "
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-lg text-white bg-blue-600"
          >
            Search
          </button>

          <button
            className=" px-6 py-2 mx-2 rounded-lg text-white bg-blue-600"
            type="button"
            onClick={fetchRandomMeals}
          >
            Suprise me!
          </button>
        </div>
      </form>
    </header>
  );
};

export default Search;
