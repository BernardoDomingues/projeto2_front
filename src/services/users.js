import axios from "axios";
import { URL_BACK } from "helpers/constant";

const updateUser = async (id, data) =>
  axios
    .put(`${URL_BACK}/updateUser/${id}`, data)
    .then((res) => res)
    .catch((error) => {
      if (!error.response) {
        return false;
      }
      return error.response.data;
    });

const deleteUser = async (id) =>
  axios
    .delete(`${URL_BACK}/deleteUser/${id}`)
    .then((res) => res)
    .catch((error) => {
      if (!error.response) {
        return false;
      }
      return error.response.data;
    });
export { updateUser, deleteUser };
