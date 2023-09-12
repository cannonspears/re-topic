import React, { useState } from "react";
import Script from "./Script";

function Topic({ topic, script }) {
  // TODO: Functional Script button
  // Need: Grey out and make not clickable if no script available in fetched data
  // Binary state variable to show/hide script if available
  // Change button and title text to "Show" or "Hide"

  const [showScript, setShowScript] = useState(false);

  const showScriptHandler = () => {
    setShowScript(!showScript);
  };
  let buttonText = showScript ? "Hide" : "Show";

  if (showScript) {
    buttonText = "Hide";
  }

  return (
    <React.Fragment>
      <blockquote>
        {topic}
        {showScript && <Script script={script} />}
      </blockquote>

      <div className="container">
        <button onClick={showScriptHandler} className="scriptButton" title={`${buttonText} Script`}>
          {buttonText} Script
        </button>
      </div>
    </React.Fragment>
  );
}

export default Topic;
