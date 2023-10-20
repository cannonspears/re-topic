import React from "react";

function RandomTopicButton({ onClick }) {
  return (
    <button className="randomTopicButton" onClick={onClick}>
      Generate Random Topic
    </button>
  );
}

export default RandomTopicButton;
