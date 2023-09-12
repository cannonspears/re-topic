import React from "react";

function NewTopicButton({ onClick }) {
  return (
    <button className="generateButton" onClick={onClick}>
      Generate New Topic
    </button>
  );
}

export default NewTopicButton;
