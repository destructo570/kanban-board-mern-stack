import axios from "axios";

export const createNewCard = (payload, callback) => {
  const HOST_URL = process.env.REACT_APP_HOST_URL;
  const URL = HOST_URL + "card";
  axios
    .post(URL, payload)
    .then(() => {
      if (callback) callback();
    })
    .catch((err) => console.log(err));
};
