import { createContext, useContext, useState } from "react";
import axios from "axios";

const newsCrudContext = createContext();

export function NewsCrudContextProvider({ children }) {
  const API_URL = "https://newsapi.org/v2/everything?";
  const pageSize = process.env.REACT_APP_PAGE_SIZE;
  const pageNo = process.env.REACT_APP_PAGE_NO;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [keyWord, setKeyWord] = useState([]);
  // const [news, setNews] = useState([]);

  const handleSetKeyword = async (keyWord) => {
    try {
      const response = await axios.get(
        `${API_URL}q=${keyWord}&pageSize=${pageSize}&page=${pageNo}&apiKey=${apiKey}`
      );
      console.log(response);
      const data = await response.data.articles;
      console.log(data);
      setKeyWord(data);
    } catch (error) {
      console.error(error);
    }
  };

  const value = {
    keyWord,
    handleSetKeyword,
  };

  return <newsCrudContext.Provider value={value}>{children}</newsCrudContext.Provider>;
}

export function useNewsCrud() {
  return useContext(newsCrudContext);
}
