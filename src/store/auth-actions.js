import axios from "axios";
import { Routes } from "../constants/constants";
import authSlice from "./auth-slice";
import {
  clearAuthDataFromStorage,
  getExpiryDate,
  setAutoLogout,
  storeAuthDataToStorage,
} from "../helpers/auth-helpers";

export const getAuthToken = (payload, callback) => {
  return async (dispatch) => {
    const getToken = async () => {
      const response = await axios.post(Routes.AUTH + "login", payload);
      return response;
    };
    try {
      const response = await getToken();
      const expiration = 60 * 60 * 1000;
      const authData = {
        ...response.data,
        expiresOn: getExpiryDate(expiration),
      };
      setAutoLogout(expiration, () => {
        dispatch(authSlice.actions.logout());
      });
      storeAuthDataToStorage(authData);
      dispatch(authSlice.actions.login(authData));
      if (callback) callback();
    } catch (err) {
      console.log(err);
    }
  };
};

export const signUp = (payload, callback) => {
  return async (dispatch) => {
    const signUpHandler = async () => {
      const response = await axios.post(Routes.AUTH + "signup", payload);
      return response;
    };
    try {
      await signUpHandler();
      if (callback) callback();
    } catch (err) {
      console.log(err);
    }
  };
};

export const signOut = (callback) => {
  return async (dispatch) => {
    try {
      clearAuthDataFromStorage();
      dispatch(authSlice.actions.logout());
      if (callback) callback();
    } catch (err) {
      console.log(err);
    }
  };
};
