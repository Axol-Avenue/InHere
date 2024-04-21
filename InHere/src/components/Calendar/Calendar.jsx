import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "./AddEventModal.jsx";
import http from "../../http-common.js";

function Calendar() {
    // Event placeholders
    /*const events = [
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
    ];*/

    /*const events =

            [
                {
                    "id": "821",
                    "end": "2024-04-06 14:00:00",
                    "start": "2024-04-06 06:00:00",
                    "title": "Test event",
                    "allDay": "true"
                },
                {
                    "id": "822",
                    "end": "2024-04-10 21:00:00",
                    "start": "2024-04-10 16:00:00",
                    "title": "Test event 2",
                    "allDay": ""
                }
            ]
        ;*/
    const BUTTON_STYLES = {
        zIndex: '1000',
        position: 'absolute',
        right: '15px',
        bottom: '25px',
        fontSize: '40px',
        color: 'white',
        backgroundColor: '#4caf50',
        borderRadius: '50%',
        width: '50px',
        height: '50px'
    }

    const currentUser = sessionStorage.getItem("UserID");
    console.log("Current User = " + sessionStorage.getItem("UserID"));
    const getEvents = () => {

        let data = {
            userID: currentUser
        }

        return http.post('https://ec2-18-223-107-62.us-east-2.compute.amazonaws.com:3307/readEvents', data)
            .then(res => {
                console.log(res.data.events[0].Data);
                return(res.data.events[0].Data);
            })
            .catch(err => {
                console.log("axios error (Calendar)");
                console.log(err)
            });
    };

    const [isOpen, setIsOpen ] = useState(false)

    return <div style={{padding: '10px', flexGrow: '1'}}>
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={'dayGridMonth'}
            headerToolbar={{
                start: "today prev,next",
                center: "title",
                end: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            height={"89vh"}
            style={{width: '100%'}}
            events={getEvents}
        />
        <button style={BUTTON_STYLES} onClick={() => setIsOpen(true)}>+</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
    </div>
}

export default Calendar;