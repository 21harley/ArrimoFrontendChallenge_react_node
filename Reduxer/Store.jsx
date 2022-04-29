import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/User";
import calender from "./slices/Calender";

export default configureStore({
  reducer: {
    user,
    calender,
  },
});
