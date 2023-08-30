import React, { useState, useEffect } from "react";
import RealEstate from "./topics/RealEstate";

function App() {
  const [topic, setTopic] = useState({
    topic: null,
  });

  const fetchTopic = async () => {
    return await fetch("https://topicsgenerator.onrender.com/real-estate").then((response) => {
      response.json();
    });
  };

  useEffect(async () => {
    setTopic(await fetchTopic());
  }, []);

  return (
    <div className="App">
      <RealEstate topic={topic} />
      <button>Generate New Topic</button>
    </div>
  );
}

export default App;
