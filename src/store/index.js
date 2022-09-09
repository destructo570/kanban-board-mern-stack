import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";

import boardSlice from "./board-slice";

const store = configureStore({
  reducer: { board: boardSlice.reducer, auth: authSlice.reducer },
});

export default store;
