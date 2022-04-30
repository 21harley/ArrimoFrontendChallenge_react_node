import React, { useState } from "react";
import "@fullcalendar/react/dist/vdom"; //vite
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useSelector, useDispatch } from "react-redux";
import { addEvent, addDayEvent } from "./../Reduxer/slices/Calender";

const DemoApp = () => {
  const [days, setDays] = useState("");
  const dispatch = useDispatch();
  const { formEvent, namesEvent } = useSelector((state) => state.calender);
  const [modal, setModal] = useState(false);
  const handleDateClick = (args) => {
    setDays(args.dateStr);
    if (namesEvent.length != 0) {
      setModal(!modal);
    } else {
      alert("Create event");
    }
  };
  const handleSumit = (e) => {
    e.preventDefault();
    console.log(days, e.target.evento.value);
    setModal(!modal);
    let name = e.target.evento.value;
    console.log(name, days);
    let ban = true;
    if (formEvent.length > 0) {
      for (let i = 0; i < formEvent.length; i++) {
        if (formEvent[i].date == days) {
          ban = false;
          break;
        }
      }
    }
    if (ban) dispatch(addDayEvent({ name: name, date: days }));
    e.target.evento.value = "";
    setDays("");
  };
  const handleSumitEvent = (e) => {
    e.preventDefault();
    let ban = true;
    for (let i = 0; i < namesEvent.length; i++) {
      if (namesEvent[i] == e.target.name.value) {
        ban = false;
        break;
      }
    }
    if (ban) {
      dispatch(addEvent({ name: e.target.name.value }));
    } else {
      alert("Evento ya creado");
    }

    e.target.name.value = "";
  };
  return (
    <>
      <div className="container__calendar">
        <form action="" onSubmit={(e) => handleSumitEvent(e)}>
          <h1>Create Event</h1>
          <div>
            <label htmlFor="">Name:</label>
            <input type="text" name="name" />
            <button>Create</button>
          </div>
        </form>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          events={formEvent}
        />
        <form
          action=""
          className={"form_modal " + (modal ? " form_modal--active " : "")}
          onSubmit={(e) => {
            handleSumit(e);
          }}
        >
          <div className="body_form_modal">
            <h1 className="tg-center">Agrege Event</h1>
            <div className="container--grid">
              <div>
                <label htmlFor="name">name:</label>
                <br />
                <select name="evento">
                  {namesEvent.map((el, index) => {
                    return (
                      <option key={index} value={el}>
                        {el}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <button className="button button--formEdit">add event</button>
                <button className="button button--formEdit">Exit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default DemoApp;
