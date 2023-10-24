import React from "react";

function RandomTopicButton({ onClick }) {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      Generate Random Topic
    </button>
  );
}

export default RandomTopicButton;
