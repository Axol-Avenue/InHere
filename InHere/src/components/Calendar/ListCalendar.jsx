import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import listPlugin  from "@fullcalendar/list";

// Copy of Kris' dummy calendar, just with a focus on the list view
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
            plugins={[listPlugin]}
            initialView={'listWeek'}
            height={"90vh"}
            events={events}
        />
    </div>
}

export default Calendar;