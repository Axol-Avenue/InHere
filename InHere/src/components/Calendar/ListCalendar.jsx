import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import http from "../../http-common.js";

// Copy of Kris' dummy calendar, just with a focus on the list view
function Calendar() {

    const getEvents = (fetchInfo) => {

        // Sets fetchInfo's end date to the day before
        // This is needed because our axios query needs Sun -> Sat, not Sun -> Sun
        (fetchInfo.end).setDate((fetchInfo.end).getDate() - 1);

        let data = {
            userID: 42,
            startDate: (fetchInfo.start).getFullYear() + "-" + ((fetchInfo.start).getMonth() + 1) + "-" + (fetchInfo.start).getDate(),
            endDate: (fetchInfo.end).getFullYear() + "-" + ((fetchInfo.end).getMonth() + 1) + "-" + (fetchInfo.end).getDate()
        }

        return http.post('https://ec2-18-223-107-62.us-east-2.compute.amazonaws.com:3307/taskTracker', data)
            .then(res => {

                let events = [];
                console.log(res.data.events.length);
                for (var i = 0; i < res.data.events.length; i++) {
                    events.push({
                        title: (res.data.events)[i].Title,
                        start: ((res.data.events)[i].DueDate).split("T")[0],
                        extendedProps: {
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

    return <div>
        <FullCalendar
            plugins={[listPlugin]}
            initialView={'listWeek'}
            height={"90vh"}
            displayEventTime={false}
            events={(fetchInfo) => getEvents(fetchInfo)}
        />
    </div>
}

export default Calendar;