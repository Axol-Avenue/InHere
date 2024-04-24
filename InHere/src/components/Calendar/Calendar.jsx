import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "./AddEventModal.jsx";
import http from "../../http-common.js";

function Calendar() {

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
    const getEvents = () => {

        let data = {
            userID: currentUser
        }

        return http.post('https://ec2-18-223-107-62.us-east-2.compute.amazonaws.com:3307/readEvents', data)
            .then(res => {
                let events = [];
                for (let i = 0; i < res.data.events.length; i++) {
                    let allDayBool = JSON.parse((res.data.events)[i].AllDay);
                    events.push({
                        title: (res.data.events)[i].Title,
                        start: ((res.data.events)[i].StartDate).split("T")[0],
                        end: ((res.data.events)[i].EndDate).split("T")[0],
                        allDay: allDayBool,
                        extendedProps: {
                            eventID: (res.data.events)[i].EventID
                        }
                    });
                }
                return(events);
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
            events={() => getEvents()}
        />
        <button style={BUTTON_STYLES} onClick={() => setIsOpen(true)}>+</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
    </div>
}

export default Calendar;