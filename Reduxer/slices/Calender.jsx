import { createSlice } from "@reduxjs/toolkit";
//import axios from "axios";

const initialState = {
  data: {},
};

export const calenderSlice = createSlice({
  name: "Calender",
  initialState,
  reducers: {
    setCalender: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { setCalender } = calenderSlice.actions;

export default calenderSlice.reducer;
/*
export const AxiosAllItem=()=>(disptch)=>{
  axios
   .get('http://localhost:5000/products')
   .then((res)=>{
       console.log(res.data)
       disptch(setCarritoList(res.data));
   })
};
*/
