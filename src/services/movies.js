import axios from "axios";
import { URL_BACK } from "helpers/constant";

const getHomePageMovies = async (data) =>
  axios
    .post(`${URL_BACK}/movies`, data)
    .then((res) => res.data.items)
    .catch((error) => {
      if (!error.response) {
        return false;
      }
      return error.response.data;
    });

const searchMovies = async (data) =>
  axios
    .post(`${URL_BACK}/movies`, data)
    .then((res) => res.data.results)
    .catch((error) => {
      if (!error.response) {
        return false;
      }
      return error.response.data;
    });
export { getHomePageMovies, searchMovies };
