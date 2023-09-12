import React, { useState, useEffect } from "react";
import Topic from "./components/Topic";
import validCategories from "./utils/validCategories";

function App() {
  const [topic, setTopic] = useState("Loading...");
  const [categoryInd, setCategoryInd] = useState(0);
  const [topicList, setTopicList] = useState([]);

  const category = validCategories[categoryInd];

  const fetchCategory = async () => {
    try {
      const response = await fetch(`https://topicsgeneratorapi.onrender.com/${category.endpoint}`);

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      const { data } = await response.json();
      return data;
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
      const data = await fetchCategory();
      if (data && data.length > 0) {
        setTopicList(data);
        const randomIndex = Math.floor(Math.random() * data.length);
        setTopic(data[randomIndex].topic);
      }
    };

    fetchData();
  }, [categoryInd]);

  const generate = async () => {
    if (topicList && topicList.length > 0) {
      const randomIndex = Math.floor(Math.random() * topicList.length);
      setTopic(topicList[randomIndex].topic);
    }
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
