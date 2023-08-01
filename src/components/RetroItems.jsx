import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import { LikeButton } from "./Buttons/LikeButton.jsx";
import { DislikeButton } from "./Buttons/DislikeButton.jsx";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faTrash,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export function RetroItems() {
  const [items, setItems] = useState([""]);
  const newItem = () => {
    setItems([...items, ""]);
  };
  const updateItem = (userInput, index) => {
    const newItems = [...items];
    newItems[index] = userInput;
    setItems([...newItems]);
  };

  const deleteItem = (index) => {
    setItems(items.filter((item, currentIndex) => currentIndex !== index));
  };

  return (
    <>
      <button
        type="button"
        className="ButtonAdd button button-default"
        aria-label="Add new card"
        title="Add new card"
        onClick={newItem}
      >
        +
      </button>

      {/* <!-- A retro card (retrospective item) --> */}

      {items.map((item, index) => {
        return (
          <div className="RetroCard" aria-label="Retro card">
            <div key={`item${newItem}`}>
              {/* <!-- User input --> */}
              <textarea
                class="textbox"
                placeholder="Enter text here"
                aria-label="Enter text here"
                rows="1"
                value={item}
                onInput={(e) => updateItem(e.target.value, index)}
              ></textarea>

              <div className="button-group">
                <button
                  type="button"
                  className="button button-left"
                  title="Move left"
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button
                  type="button"
                  class="button button-delete"
                  title="Delete"
                  onClick={() => deleteItem(index)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <div>
                  {/* Like and Dislike button (renders) */}
                  <LikeButton></LikeButton>
                  <DislikeButton></DislikeButton>

                  <button
                    type="button"
                    className="button button-right"
                    title="Move right"
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
