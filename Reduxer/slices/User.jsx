import { createSlice } from "@reduxjs/toolkit";
//import axios from "axios";

const initialState = {
  data: [
    {
      id: 1,
      name: "john",
      password: "1234",
      email: "john.llanes@gmail.com",
    },
  ],
  n_users: 1,
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action) => {
      let { user, n_user } = action.payload;
      if (n_user >= 0 && n_user <= state.data.length) state.data[n_user] = user;
    },
    addUser: (state, action) => {
      state.data.push(action.payload.user);
      state.n_users++;
    },
    resertUser: (state, action) => {
      let { id_user } = action.payload;
      let new_data = state.data.filter((el) => {
        return id_user != el.id;
      });
      state.data = new_data;
      state.n_users--;
    },
    getUser: (state, action) => {
      let { id_user } = action.payload;
      for (let i = 0; i < state.data.length; i++) {
        if (state.data[i].id === id_user) {
          return {
            id: state.data[i].id,
            name: state.data[i].name,
            password: state.data[i].password,
            email: state.data[i].email,
          };
        }
      }
      return {};
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
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
