import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const newsCrudContext = createContext();

export function NewsCrudContextProvider({ children }) {
  const API_URL = "https://newsapi.org/v2/everything?";
  const pageSize = process.env.REACT_APP_PAGE_SIZE;
  const pageNo = process.env.REACT_APP_PAGE_NO;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [keyWord, setKeyWord] = useState("games");
  const [news, setNews] = useState([]);
  const LOCAL_STORAGE_KEY3 = "my-Favourites";
  const [myFav, setMyFav] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY3)) ?? []
  );

  const handleSetKeyword = async (search) => {
    try {
      const response = await axios.get(
        `${API_URL}q=${search}&pageSize=${pageSize}&page=${pageNo}&apiKey=${apiKey}`
      );
      console.log(response);
      const data = await response.data.articles;
      console.log(data);
      setKeyWord(search);
      setNews(data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateMyFav = (title) => {
    const favNews = news.filter((news) => {
      return news.title === title;
    });

    setMyFav([...myFav, ...favNews]);
  };

  const clearMyFav = () => {
    console.log("delete ALL");
    localStorage.removeItem(LOCAL_STORAGE_KEY3, JSON.stringify(myFav));
    setMyFav([]);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY3, JSON.stringify(myFav));
  }, [myFav]);

  const value = {
    keyWord,
    news,
    myFav,
    handleSetKeyword,
    updateMyFav,
    clearMyFav,
  };

  return <newsCrudContext.Provider value={value}>{children}</newsCrudContext.Provider>;
}

export function useNewsCrud() {
  return useContext(newsCrudContext);
}
