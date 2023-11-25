import React, { useState, useEffect, useCallback } from "react";
import validCategories from "./utils/validCategories";
import { Category, Topic, RandomTopicButton, SearchTopic } from "./components";
import { Box, Container, Stack } from "@mui/material";

const API_URL = "https://retopic-api.onrender.com/";

function App() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [topics, setTopics] = useState([]);
  const [currentTopic, setCurrentTopic] = useState({
    id: "",
    topic: "Loading Topic...",
    script: "",
  });

  let currentCategory = validCategories[categoryIndex];

  const fetchCategoryData = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}${validCategories[categoryIndex].endpoint}`);

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const { data } = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }, [categoryIndex]);

  const updateTopicList = (data) => {
    if (data && data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      setCurrentTopic(data[randomIndex]);
      setTopics(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCategoryData();
      updateTopicList(data);
    };

    fetchData();
  }, [fetchCategoryData]);

  const nextCategoryHandler = useCallback(() => {
    setCategoryIndex((prevIndex) => (prevIndex === validCategories.length - 1 ? 0 : prevIndex + 1));
  }, []);

  const previousCategoryHandler = useCallback(() => {
    setCategoryIndex((prevIndex) => (prevIndex === 0 ? validCategories.length - 1 : prevIndex - 1));
  }, []);

  const randomTopicHandler = () => {
    if (topics.length > 0) {
      const randomIndex = Math.floor(Math.random() * topics.length);
      setCurrentTopic(topics[randomIndex]);
    }
  };

  const searchById = async (id) => {
    const topic = topics.find((topic) => topic.id === Number(id));

    if (topic) {
      setCurrentTopic(topic);
    } else {
      // setCurrentTopic({ topic: "Not Found" });
      return `Topic with ID ${id} not found.`;
    }
  };

  return (
    <Container>
      <Box alignItems="center" justifyContent="center" textAlign="center">
        <Category
          previousClick={previousCategoryHandler}
          nextClick={nextCategoryHandler}
          currentCategory={currentCategory}
        />
        <Topic currentTopic={currentTopic} />
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" pt={2}>
          <RandomTopicButton onClick={randomTopicHandler} />
          <SearchTopic onSearch={searchById} />
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
