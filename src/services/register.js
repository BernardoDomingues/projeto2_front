import axios from "axios";
import { URL_BACK } from "helpers/constant";

const postRegister = async (data) =>
  axios
    .post(`${URL_BACK}/register`, data)
    .then((res) => res)
    .catch((error) => {
      if (!error.response) {
        return false;
      }
      return error.response.data;
    });
export { postRegister };
