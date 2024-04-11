import FullCalendar from "@fullcalendar/react";
import listPlugin  from "@fullcalendar/list";
import http from "../../http-common.js";

// Copy of Kris' dummy calendar, just with a focus on the list view
function Calendar() {

    return <div>
        <FullCalendar
            plugins={[listPlugin]}
            initialView={'listWeek'}
            height={"90vh"}
            events={() =>
            http.post('https://ec2-18-223-107-62.us-east-2.compute.amazonaws.com:3307/taskTracker', {userID: 42})
                .then(res => {

                    console.log(res);
                    if(res.data.message === 'Query Successful') {
                        return(Object.values(res.data.result[0])[0]);
                    } else {
                        alert("No record existed (listCalendar)");
                    }

                })
                .catch(err =>
                {
                    console.log("axios error (listCalendar)");
                    console.log(err)
                })}
        />
    </div>
}

export default Calendar;