import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeBoard: null,
  allBoards: [],
};

const replaceBoards = (state, action) => {
  const newState = {
    activeBoard: action.payload[0],
    allBoards: action.payload,
  };
  return newState;
};

const changeActiveBoard = (state, action) => {
  const newBoard = state.allBoards.find(
    (board) => board._id === action.payload
  );

  return {
    ...state,
    activeBoard: newBoard,
  };
};

const boardSlice = createSlice({
  name: "board",
  initialState: initialState,
  reducers: { changeActiveBoard, replaceBoards },
});

export const boardActions = boardSlice.actions;

export default boardSlice;
