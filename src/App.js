import React, { useState, useEffect, useCallback } from "react";
import Topic from "./components/Topic";
import validCategories from "./utils/validCategories";
import CategoryButton from "./components/CategoryButton";

const API_URL = "https://topicsgeneratorapi.onrender.com/";

const DEFAULT_LOADING_TEXT = "Loading...";

function App() {
  const [state, setState] = useState({
    topic: DEFAULT_LOADING_TEXT,
    categoryInd: 0,
    topicList: [],
  });

  const { topic, categoryInd, topicList } = state;

  const fetchCategory = async () => {
    try {
      const response = await fetch(`${API_URL}${validCategories[categoryInd].endpoint}`);

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

  const categoryHandler = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      categoryInd:
        prevState.categoryInd !== validCategories.length - 1 ? prevState.categoryInd + 1 : 0,
    }));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCategory();
      if (data && data.length > 0) {
        setState((prevState) => ({
          ...prevState,
          topicList: data,
          topic: data[Math.floor(Math.random() * data.length)].topic,
        }));
      }
    };

    fetchData();
  }, [categoryInd]);

  const generate = () => {
    if (topicList && topicList.length > 0) {
      setState((prevState) => ({
        ...prevState,
        topic: topicList[Math.floor(Math.random() * topicList.length)].topic,
      }));
    }
  };

  const category = validCategories[categoryInd];

  return (
    <div className="App">
      <div className="topic">
        <CategoryButton onClick={categoryHandler} title={category.name} />
        <Topic topic={topic} />
      </div>
      <button className="generate" onClick={generate}>
        Generate New Topic
      </button>
    </div>
  );
}

export default App;
