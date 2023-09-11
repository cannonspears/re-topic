import React, { useState, useEffect } from "react";
import Topic from "./components/Topic";

function App() {
  const [topic, setTopic] = useState("Loading...");
  const [category, setCategory] = useState("real-estate");

  const fetchTopic = async () => {
    try {
      const response = await fetch(`https://topicsgeneratorapi.onrender.com/${category}`);
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      const { data } = await response.json();
      return data.topic;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTopic();
      setTopic(data);
    };

    fetchData();
  }, []);

  const generate = async () => {
    const fetchData = async () => {
      const data = await fetchTopic();
      setTopic(data);
    };

    fetchData();
  };

  return (
    <div className="App">
      <div className="topic">
        <div className="container">
          <button className="category" title={category}>
            {category}
          </button>
        </div>
        <Topic category="Real Estate" topic={topic} />
      </div>
      <button className="generate" onClick={generate}>
        Generate New Topic
      </button>
    </div>
  );
}

export default App;
