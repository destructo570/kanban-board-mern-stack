import axios from "axios";
import { Routes } from "../constants/constants";

export const createNewCard = (payload, callback) => {
  axios
    .post(Routes.CARD, payload)
    .then(() => {
      if (callback) callback();
    })
    .catch((err) => console.log(err));
};
