import { createSlice } from "@reduxjs/toolkit";
//import axios from "axios";

const initialState = {
  data: [
    {
      id: 1,
      name: "john",
      password: "1234",
      email: "john@hotmail.com",
    },
  ],
  n_id: 1,
  login: false,
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action) => {
      let { user, n_user } = action.payload;
      for (let i = 0; i < state.data.length; i++) {
        if (state.data[i].id == n_user) {
          state.data[i] = user;
          break;
        }
      }
    },
    addUser: (state, action) => {
      let { name, password, email } = action.payload;
      state.n_id++;
      state.data.push({
        id: state.n_id,
        name: name,
        email: email,
        password: password,
      });
    },
    resertUser: (state, action) => {
      let { id_user } = action.payload;
      let new_data = state.data.filter((el) => {
        return id_user != el.id;
      });
      state.data = new_data;
    },
    setLogin: (state, action) => {
      state.login = action.payload.state;
    },
  },
});

export const { setUser, addUser, resertUser, setLogin } = userSlice.actions;

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
