import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactinoPlugin from "@fullcalendar/interaction";
//import Modal from "./AddEventModal.jsx";

function Calendar() {
    // Event placeholders
    const events = [
        {
            title: 'Event 1',
            start: '2024-04-01',
            end: '2024-04-02'
        },
        {
            title: 'Event 2',
            start: '2024-04-09',
            end: '2024-04-11'
        }
    ];

    const [isOpen, setIsOpen ] = useState(false)

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
            events={events}
        />

    </div>
}

export default Calendar;