import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import http from "../../http-common.js";
import Modal from "./AddTaskModal.jsx";
import React, {useState} from "react";

function Calendar() {

    const currentUser = sessionStorage.getItem("UserID");
    const getEvents = (fetchInfo) => {

        // Sets fetchInfo's end date to the day before
        // This is needed because our axios query needs Sun -> Sat, not Sun -> Sun
        (fetchInfo.end).setDate((fetchInfo.end).getDate() - 1);

        let data = {
            userID: currentUser,
            startDate: (fetchInfo.start).getFullYear() + "-" + ((fetchInfo.start).getMonth() + 1) + "-" + (fetchInfo.start).getDate(),
            endDate: (fetchInfo.end).getFullYear() + "-" + ((fetchInfo.end).getMonth() + 1) + "-" + (fetchInfo.end).getDate()
        }

        return http.post('https://ec2-18-223-107-62.us-east-2.compute.amazonaws.com:3307/readTasks', data)
            .then(res => {

                let events = [];
                for (var i = 0; i < res.data.events.length; i++) {
                    events.push({
                        title: (res.data.events)[i].Title,
                        start: ((res.data.events)[i].DueDate).split("T")[0],
                        extendedProps: {
                            taskID: (res.data.events)[i].TaskID,
                            status: (res.data.events)[i].Status,
                            priority: (res.data.events)[i].PriorityID
                        }
                    });
                }
                return(events);
            })
            .catch(err => {
                console.log("axios error (listCalendar)");
                console.log(err)
            });
    };

    const deleteTask = (currentTask) => {

        let data = {
            userID: currentUser,
            taskID: currentTask
        }

        http.post('https://ec2-18-223-107-62.us-east-2.compute.amazonaws.com:3307/deleteTask', data)
            .then(res => {
                if (res.data.message === "Deletion Successful") {
                    // Force reloads the webpage to refresh events
                    // Band-aid fix
                    setRefresh(refresh + 1)
                } else {
                    alert("Sorry, there was a problem deleting that task.");
                }
            })
            .catch(err => {
                console.log("axios error (listCalendar)");
                console.log(err)
            });
    }

    const updateTask = (currentTask) => {
        console.log(currentTask);
    }

    function customEvents(args) {

        const currentTask = args.event.extendedProps.taskID;

        return <div>
            <a>{args.event.title}</a>

            <button onClick={() => deleteTask(currentTask)}
                    style={{border: 'none', float: 'right'}}>Delete Task</button>

            <button onClick={() => updateTask(currentTask)}
                    style={{border: 'none', float: 'right', marginRight: '10px'}}>Modify Task</button>
        </div>
    }

    const [isOpen, setIsOpen ] = useState(false);
    const [refresh, setRefresh] = React.useState(0);

    return <div>
        <FullCalendar
            plugins={[listPlugin]}
            initialView={'listWeek'}
            height={"85vh"}
            displayEventTime={false}
            events={(fetchInfo) => getEvents(fetchInfo)}
            eventContent={(args) => customEvents(args)}
        />
        <button onClick={() => setIsOpen(true)}>Add Event</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
    </div>
}

export default Calendar;