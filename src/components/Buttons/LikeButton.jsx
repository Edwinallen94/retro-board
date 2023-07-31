import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export function LikeButton() {
  let [likes, setLikes] = useState(0);

  const like = () => {
    setLikes(likes + 1);
  };
  return (
    <button
      type="button"
      className="button button-left"
      title="Like"
      onClick={like}
    >
      {/* <img src="thumbsUp.svg" alt="Like" width="12" height="12" /> */}
      <FontAwesomeIcon icon={faThumbsUp} />
      {likes}
    </button>
  );
}
