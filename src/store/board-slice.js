import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  activeBoard: null,
  allBoards: [],
};

const replaceBoards = (state, action) => {
  const newState = {
    ...state,
    allBoards: action.payload.boards,
  };
  return newState;
};

const updateTask = (state, action) => {
  const newCard = action.payload;
  const listId = newCard.listId;

  const list = state.activeBoard.find((list) => list._id === listId);

  return state;
};

const changeActiveBoard = (state, action) => {
  return {
    ...state,
    activeBoard: action.payload,
  };
};

const boardSlice = createSlice({
  name: "board",
  initialState: initialState,
  reducers: { changeActiveBoard, replaceBoards, updateTask },
});

export const updateCardData = (payload) => {
  return async (dispatch) => {
    const updateHandler = async () => {
      const HOST_URL = process.env.REACT_APP_HOST_URL;
      const URL = HOST_URL + "card";

      const response = await axios.put(URL, {
        title: payload.card.title,
        description: payload.card.description,
        checkList: payload.card.checkList,
        listId: payload.card.listId,
        cardId: payload.card._id,
      });
      if (response.status === 200) {
      }
    };

    try {
      await updateHandler();
      dispatch(fetchActiveBoard(payload.card.boardId));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchActiveBoard = (boardId) => {
  return async (dispatch) => {
    const fetchBoardHandler = async () => {
      const HOST_URL = process.env.REACT_APP_HOST_URL;
      const URL = HOST_URL + "board/" + boardId;
      return await axios.get(URL);
    };

    try {
      const response = await fetchBoardHandler();
      dispatch(boardActions.changeActiveBoard(response.data[0]));
    } catch (err) {
      console.log(err);
    }
  };
};

export const createNewCard = (cardData) => {
  console.log(cardData);
  return async (dispatch) => {
    const createCard = async () => {
      const HOST_URL = process.env.REACT_APP_HOST_URL;
      const URL = HOST_URL + "card";
      return await axios.post(URL, cardData);
    };

    try {
      await createCard();
      dispatch(fetchActiveBoard(cardData.boardId));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchAllBoards = () => {
  return async (dispatch) => {
    const getBoards = async () => {
      const HOST_URL = process.env.REACT_APP_HOST_URL;
      const URL = HOST_URL + "board";
      return await axios.get(URL);
    };
    try {
      const response = await getBoards();
      dispatch(boardActions.replaceBoards(response.data));
      const boardId = response.data.boards[0]._id;
      dispatch(fetchActiveBoard(boardId));
    } catch (err) {
      console.log(err);
    }
  };
};

export const boardActions = boardSlice.actions;

export default boardSlice;
