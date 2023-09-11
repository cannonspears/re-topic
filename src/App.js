import React, { useState, useEffect } from "react";
import Topic from "./components/Topic";
import validCategories from "./utils/validCategories";

function App() {
  const [topic, setTopic] = useState("Loading...");
  const [categoryInd, setCategoryInd] = useState(0);

  const category = validCategories[categoryInd];

  const fetchTopic = async () => {
    try {
      const response = await fetch(`https://topicsgeneratorapi.onrender.com/${category.endpoint}`);

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

  const categoryHandler = () => {
    setCategoryInd((currentInd) =>
      currentInd !== validCategories.length - 1 ? currentInd + 1 : 0
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTopic();
      setTopic(data);
    };

    fetchData();
  }, [categoryInd]);

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
          <button onClick={categoryHandler} className="category" title={category.name}>
            {category.name}
          </button>
        </div>
        <Topic topic={topic} />
      </div>
      <button className="generate" onClick={generate}>
        Generate New Topic
      </button>
    </div>
  );
}

export default App;
