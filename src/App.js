import React, { useState, useEffect } from "react";
import RealEstate from "./topics/RealEstate";

function App() {
  const [topic, setTopic] = useState("");

  const fetchTopic = async () => {
    const response = await fetch("https://topicsgeneratorapi.onrender.com/real-estate");
    const data = await response.json();
    return data.topic;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTopic();
      setTopic(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <RealEstate topic={topic} />
      <button>Generate New Topic</button>
    </div>
  );
}

export default App;
