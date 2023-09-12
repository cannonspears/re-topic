import React from "react";

function NewTopicButton({ onClick }) {
  return (
    <button className="generate" onClick={onClick}>
      Generate New Topic
    </button>
  );
}

export default NewTopicButton;
