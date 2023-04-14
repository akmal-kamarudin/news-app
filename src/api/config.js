import axios from "axios";

require("dotenv").config();

const instance = axios.create({
  baseURL: "https://newsapi.org/v2/everything?", // Replace with your API base URL
  headers: {
    "X-Api-Key": process.env.REACT_APP_NEWS_API_KEY, // Use the name of your API key in the .env file
  },
});

// Define a function that makes API request with a keyword parameter
export const searchNews = (keyword) => {
  return instance.get("everything", {
    params: {
      q: keyword, // Pass the keyword parameter in the API request
    },
  });
};

export default instance;
