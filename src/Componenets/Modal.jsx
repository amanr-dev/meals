import React from "react";
import { useGlobalContext } from "../Context";

export const Modal = () => {
  const { selectedMeals, closeModal } = useGlobalContext();
  const {
    strInstructions: text,
    strSource: source,
    strMeal: title,
    strMealThumb: image,
  } = selectedMeals;

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <div className="modal-img">
          <img src={image} alt="img" className="modal-img" />
        </div>
        <div className="modal-container-content">
          <h4 className="text-center modal-hedding">{title}</h4>
          <p className="modal-para">Cooking Instructions</p>
          <p className="modal-para-text">{text}</p>
          <div className="d-flex justify-content-around">
            <a href={source} target="_blank" className="modal-link">
              visit<i className="text-primary fa-solid fa-info"></i>
            </a>
            <button className="btn-sm btn close-btn" onClick={closeModal}>
              <i className="text-primary fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
