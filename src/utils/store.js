import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import desc from "./descSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    desc: desc,
    chat: chatSlice,
  },
});

export default store;
