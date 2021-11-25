import axios from "axios";
import { URL_BACK } from "helpers/constant";

const postLogin = async (data) =>
  axios
    .post(`${URL_BACK}/login`, data)
    .then((res) => res)
    .catch((error) => {
      if (!error.response) {
        return false;
      }
      return error.response.data;
    });
export { postLogin };
