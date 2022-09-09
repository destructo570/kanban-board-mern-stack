import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  userId: "",
  isAuthed: false,
};

const login = (state, action) => {
  const newState = {
    token: action.payload.token,
    userId: action.payload.userId,
    isAuthed: true,
  };
  return newState;
};

const logout = () => {
  return initialState;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: { login, logout },
});

export const authActions = authSlice.actions;

export default authSlice;
