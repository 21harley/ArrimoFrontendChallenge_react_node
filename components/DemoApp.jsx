import React from "react";
import "@fullcalendar/react/dist/vdom"; //vite
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default class DemoApp extends React.Component {
  render() {
    return (
      <div className="container__calendar">
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
      </div>
    );
  }
}
