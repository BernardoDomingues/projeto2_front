import axios from "axios";

const postRegister = async (data) =>
  axios
    .post("http://localhost:5000/register", data)
    .then((res) => res)
    .catch((error) => {
      if (!error.response) {
        return false;
      }
      return error.response.data;
    });
export { postRegister };
