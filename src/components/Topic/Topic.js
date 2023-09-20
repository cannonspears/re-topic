import React, { useState } from "react";
import Script from "./Script";

function Topic({ topic, script }) {
  const [showScript, setShowScript] = useState(false);

  const showScriptHandler = () => {
    setShowScript(!showScript);
  };

  let buttonText = showScript ? "Hide" : "Show";

  return (
    <React.Fragment>
      <blockquote>
        <h1>{topic}</h1>
        {showScript && <Script script={script} />}
      </blockquote>

      <button onClick={showScriptHandler} className="scriptButton" title={`${buttonText} Script`}>
        {buttonText} Script
      </button>
    </React.Fragment>
  );
}

export default Topic;
