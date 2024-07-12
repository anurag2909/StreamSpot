import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import desc from "./descSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    desc: desc,
  },
});

export default store;
