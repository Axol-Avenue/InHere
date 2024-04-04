import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactinoPlugin from "@fullcalendar/interaction";

function Calendar() {
    return <div>
        <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactinoPlugin]}
        initialView={'dayGridMonth'}
        headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        height={"90vh"}
        />
    </div>
}

export default Calendar;