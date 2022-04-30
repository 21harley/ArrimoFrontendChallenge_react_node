import { createSlice } from "@reduxjs/toolkit";
//import axios from "axios";

const initialState = {
  dataEvent: [],
  namesEvent: [],
  n_id_Even: 1,
  formEvent: [],
};

export const calenderSlice = createSlice({
  name: "Calender",
  initialState,
  reducers: {
    setCalenders: (state, action) => {
      state.dataEvent = action.payload.dataEvent;
    },
    setCalender: (state, action) => {
      for (let i = 0; i < state.dataEvent.length; i++) {
        if (action.payload.event.id == state.dataEvent[i].id) {
          state.dataEvent[i] = action.payload.dataEvent;
          break;
        }
      }
    },
    addEvent: (state, action) => {
      const { name } = action.payload;
      state.namesEvent.push(name);
      state.dataEvent.push({
        id: state.n_id_Even,
        name: name,
        days: [],
      });
      state.n_id_Even++;
    },
    resertEvent: (state, action) => {
      const { id } = action.payload;
      const new_dataEvent = state.dataEvent.filter((el) => {
        return id != el.id;
      });
      state.dataEvent = new_dataEvent;
    },
    addDayEvent: (state, action) => {
      state.formEvent.push({
        title: action.payload.name,
        date: action.payload.date,
      });
      for (let i = 0; i < state.dataEvent.length; i++) {
        if (state.dataEvent[i].name == action.payload.name) {
          state.dataEvent[i].days.push(action.payload.date);
          break;
        }
      }
    },
  },
});

export const { setCalenders, setCalender, addEvent, resertEvent, addDayEvent } =
  calenderSlice.actions;

export default calenderSlice.reducer;
