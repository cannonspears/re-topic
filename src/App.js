import React, { useState, useEffect, useCallback } from "react";
import validCategories from "./utils/validCategories";
import { Topic, CategoryButton, NewTopicButton } from "./components";

const API_URL = "https://redotopics.onrender.com/";

const DEFAULT_LOADING_TEXT = "Loading Topic";

function App() {
  const [state, setState] = useState({
    topic: DEFAULT_LOADING_TEXT,
    script: "",
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

  const updateTopicList = (data) => {
    if (data && data.length > 0) {
      const currentTopic = data[Math.floor(Math.random() * data.length)];
      setState((prevState) => ({
        ...prevState,
        topicList: data,
        topic: currentTopic.topic,
        script: currentTopic.script,
      }));
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
      updateTopicList(data);
    };

    fetchData();
  }, [categoryInd]);

  const randomTopicHandler = () => {
    if (topicList.length > 0) {
      const currentTopic = topicList[Math.floor(Math.random() * topicList.length)];
      setState((prevState) => ({
        ...prevState,
        topic: currentTopic.topic,
        script: currentTopic.script,
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
