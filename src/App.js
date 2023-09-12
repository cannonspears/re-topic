import React, { useState, useEffect, useCallback } from "react";
import validCategories from "./utils/validCategories";
import { Topic, CategoryButton, NewTopicButton } from "./components";

const API_URL = "https://topicsgeneratorapi.onrender.com/";

const DEFAULT_LOADING_TEXT = "Loading...";

function App() {
  const [state, setState] = useState({
    topic: DEFAULT_LOADING_TEXT,
    categoryInd: 0,
    topicList: [],
  });

  const { topic, script, categoryInd, topicList } = state;

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

  const nextCategoryHandler = useCallback(() => {
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
        const currentTopic = data[Math.floor(Math.random() * data.length)];
        const script = currentTopic.script;
        setState((prevState) => ({
          ...prevState,
          topicList: data,
          topic: currentTopic.topic,
          script: script,
        }));
      }
    };

    fetchData();
  }, [categoryInd]);

  const randomTopicHandler = () => {
    const currentTopic = topicList[Math.floor(Math.random() * topicList.length)];
    const script = currentTopic.script;
    if (topicList && topicList.length > 0) {
      setState((prevState) => ({
        ...prevState,
        topic: currentTopic.topic,
        script: script,
      }));
    }
  };

  const category = validCategories[categoryInd];

  return (
    <div className="App">
      <div className="topic">
        <CategoryButton onClick={nextCategoryHandler} title={category.name} />
        <Topic topic={topic} script={script} />
      </div>
      <NewTopicButton onClick={randomTopicHandler} />
    </div>
  );
}

export default App;
