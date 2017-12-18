import axios from "axios";

const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const KEY = "1ca7ae3d292b4e2c98b4b139c11dc063";

export default {
  getData(search) {
    return axios.get(`${URL}?q=${search}&api-key=${KEY}`);
  },
  getSavedArticles() {
    return axios.get("/api/articles");
  },
  saveArticles(Article) {
    return axios.post("api/articles", Article)
  },
  deleteArticle(id) {
    return axios.delete("api/articles/" + id);
  }
};
