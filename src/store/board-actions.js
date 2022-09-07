import axios from "axios";
import { Routes } from "../constants/constants";
import { boardActions } from "./board-slice";

export const fetchActiveBoard = (boardId) => {
  return async (dispatch) => {
    const fetchBoardHandler = async () => {
      return await axios.get(Routes.BOARD + boardId);
    };
    try {
      const response = await fetchBoardHandler();
      dispatch(boardActions.changeActiveBoard(response.data[0]));
      const lists = response.data[0].lists.map((list) => {
        return { id: list._id, value: list.title };
      });

      dispatch(boardActions.replaceActiveBoardList(lists));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchAllBoards = () => {
  return async (dispatch) => {
    const getBoards = async () => {
      return await axios.get(Routes.BOARD);
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

export const updateCardData = (payload) => {
  return async (dispatch) => {
    const updateHandler = async () => {
      const response = await axios.put(Routes.CARD, {
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

export const createNewCard = (payload) => {
  return async (dispatch) => {
    try {
      await axios.post(Routes.CARD, payload);
      dispatch(fetchActiveBoard(payload.boardId));
    } catch (error) {
      console.log(error);
    }
  };
};
