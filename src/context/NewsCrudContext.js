import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const newsCrudContext = createContext();

export function NewsCrudContextProvider({ children }) {
  const API_URL = "https://newsapi.org/v2/everything?";
  const pageSize = process.env.REACT_APP_PAGE_SIZE;
  const pageNo = process.env.REACT_APP_PAGE_NO;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [keyWord, setKeyWord] = useState([]);
  // const [news, setNews] = useState([]);
  const LOCAL_STORAGE_KEY3 = "my-Favourites";
  const [myFav, setMyFav] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY3)) ?? []
  );

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

  const updateMyFav = async (title) => {
    const favNews = keyWord.filter((news) => {
      return news.title === title;
    });

    setMyFav([...myFav, ...favNews]);
  };

  // useEffect(() => {
  //   // Retrieve the existing favorites from localStorage
  //   const storedFavNews = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY3));

  //   // If stored favorites exist, set them to the state
  //   if (storedFavNews) {
  //     setMyFav(storedFavNews);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY3, JSON.stringify(myFav));
  }, [myFav]);

  const value = {
    keyWord,
    handleSetKeyword,
    updateMyFav,
  };

  return <newsCrudContext.Provider value={value}>{children}</newsCrudContext.Provider>;
}

export function useNewsCrud() {
  return useContext(newsCrudContext);
}
