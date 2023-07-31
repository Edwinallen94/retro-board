import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";

export function DislikeButton() {
  let [dislikes, setDislike] = useState(0);

  const dislike = () => {
    setDislike(dislikes + 1);
  };

  return (
    <button
      type="button"
      className="button button-left"
      title="Dislike"
      onClick={dislike}
    >
      {/* <img src="thumbsDown.svg" alt="Dislike" width="12" height="12" /> */}
      <FontAwesomeIcon icon={faThumbsDown} />
      {dislikes}
    </button>
  );
}
