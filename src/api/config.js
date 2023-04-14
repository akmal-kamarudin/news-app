import axios from "axios";

export default axios.create({
  baseURL:
    "https://newsapi.org/v2/everything?" +
    "q=Apple&" +
    "sortBy=publishedAt&" +
    "apiKey=2a7530a76ae8496680afdfa64487b08b",
});
