import axios from "axios";
import { Routes } from "../constants/constants";
import { getTokenFromStorage } from "../helpers/auth-helpers";
import { boardActions } from "./board-slice";

export const createNewBoard = (title) => {
  return async (dispatch) => {
    const createBoardHandler = async () => {
      return await axios.post(Routes.BOARD, title, {
        headers: { Authorization: "Bearer " + getTokenFromStorage() },
      });
    };
    try {
      const response = await createBoardHandler();
      dispatch(fetchAllBoards());
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateBoard = (payload) => {
  console.log(payload);
  return async (dispatch) => {
    const updateHandler = async () => {
      return await axios.put(
        Routes.BOARD + payload.boardId,
        { title: payload.title },
        {
          headers: { Authorization: "Bearer " + getTokenFromStorage() },
        }
      );
    };
    try {
      const response = await updateHandler();
      dispatch(fetchAllBoards());
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteBoard = (payload) => {
  return async (dispatch) => {
    const deleteHandler = async () => {
      return await axios.delete(Routes.BOARD + payload.boardId, {
        headers: { Authorization: "Bearer " + getTokenFromStorage() },
      });
    };
    try {
      const response = await deleteHandler();
      dispatch(fetchAllBoards());
    } catch (err) {
      console.log(err);
    }
  };
};

export const createNewList = (payload) => {
  return async (dispatch) => {
    const createListHandler = async () => {
      return await axios.post(Routes.LIST, payload, {
        headers: { Authorization: "Bearer " + getTokenFromStorage() },
      });
    };
    try {
      const response = await createListHandler();
      dispatch(fetchActiveBoard(payload.boardId));
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateList = (payload) => {
  console.log(payload);
  return async (dispatch) => {
    const updateListHandler = async () => {
      return await axios.put(Routes.LIST, payload, {
        headers: { Authorization: "Bearer " + getTokenFromStorage() },
      });
    };
    try {
      const response = await updateListHandler();
      dispatch(fetchActiveBoard(payload.boardId));
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteList = (payload) => {
  return async (dispatch) => {
    const deleteListHandler = async () => {
      return await axios.delete(Routes.LIST + payload.listId, {
        headers: { Authorization: "Bearer " + getTokenFromStorage() },
      });
    };
    try {
      const response = await deleteListHandler();
      dispatch(fetchActiveBoard(payload.boardId));
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteCard = (payload) => {
  return async (dispatch) => {
    const deleteCardHandler = async () => {
      return await axios.delete(Routes.CARD + payload.cardId, {
        headers: { Authorization: "Bearer " + getTokenFromStorage() },
      });
    };
    try {
      const response = await deleteCardHandler();
      dispatch(fetchActiveBoard(payload.boardId));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchActiveBoard = (boardId) => {
  return async (dispatch) => {
    const fetchBoardHandler = async () => {
      return await axios.get(Routes.BOARD + boardId, {
        headers: { Authorization: "Bearer " + getTokenFromStorage() },
      });
    };
    try {
      const response = await fetchBoardHandler();
      dispatch(boardActions.changeActiveBoard(response.data[0]));
      const lists = response.data[0].lists.map((list) => {
        return { id: list._id, value: list.title };
      });

      dispatch(boardActions.replaceActiveBoardList(lists));
    } catch (err) {
      console.log("HERERE");
      console.log(err);
    }
  };
};

export const fetchAllBoards = () => {
  return async (dispatch) => {
    const getBoards = async () => {
      return await axios.get(Routes.BOARD, {
        headers: { Authorization: "Bearer " + getTokenFromStorage() },
      });
    };
    try {
      const response = await getBoards();
      dispatch(boardActions.replaceBoards(response.data));

      if (response.data.boards.length > 0) {
        const boardId = response.data.boards[0]._id;
        dispatch(fetchActiveBoard(boardId));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateCardData = (payload) => {
  return async (dispatch) => {
    const updateHandler = async () => {
      const response = await axios.put(
        Routes.CARD,
        {
          title: payload.title,
          description: payload.description,
          checkList: payload.checkList,
          listId: payload.listId,
          cardId: payload._id,
        },
        {
          headers: { Authorization: "Bearer " + getTokenFromStorage() },
        }
      );
      if (response.status === 200) {
      }
    };

    try {
      await updateHandler();
      dispatch(fetchActiveBoard(payload.boardId));
    } catch (err) {
      console.log(err);
    }
  };
};

export const createNewCard = (payload) => {
  return async (dispatch) => {
    try {
      await axios.post(Routes.CARD, payload, {
        headers: { Authorization: "Bearer " + getTokenFromStorage() },
      });
      dispatch(fetchActiveBoard(payload.boardId));
    } catch (error) {
      console.log(error);
    }
  };
};
