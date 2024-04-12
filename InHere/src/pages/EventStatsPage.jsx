import {useState} from 'react';

import ProgressChart from "../components/Event Stats/ProgressChart.jsx";
import styles from "./css-files/EventStatsPage.module.css"
import Legend from "../components/Event Stats/Legend.jsx";

import http from "../http-common.js";

// Global Declarations:
const TEST_USER_ID = 65;

const TEST_RESULTS =
    {
        "results":[
            {
                "Total_Count": 13,
                "Completed_Count": 3
            }
        ]
    }

// Get Task Completion Data:
function fetchData(userId)  {

    http.post('https://ec2-18-223-107-62.us-east-2.compute.amazonaws.com:3307/eventStats', {userID: userId})
        .then(res => {

            console.log(res);

            if(res.data.message === 'Query Successful')
            {
                return res.data.results;
            }
            else
            {
                alert("Query Failed!");
            }

        })
        .catch(err =>
        {
            console.log("axios error (event statistics)");
            console.log(err)
        })

    return null;
}


// Display Event Stats Page:
function EventStatsPage () {
    // Local Declarations:
    const [eventStats, setEventStats] = useState(TEST_RESULTS);

    // Get Task Completion Data:
    setEventStats(fetchData(TEST_USER_ID)); // Call the fetchData function with the desired UserID

    // // Percentage Calculations:
    //
    // const totalTaskCount = eventStats.find(
    //     item =>
    //         item.Condition_Name === 'Total Count').count;
    //
    // const completedTaskCount = eventStats.find(
    //     item =>
    //         item.Condition_Name === 'Completed Count').count;
    //
    // const incompleteTaskCount = totalTaskCount - completedTaskCount;
    //
    // const percentage = (completedTaskCount /  totalTaskCount) * 100;

    // DUMMY DATA:
    const total_count = eventStats.results[0].Total_Count;
    const completed_count = eventStats.results[0].Completed_Count;

    const incomplete_count = total_count - completed_count;

    const percentage = Math.trunc((completed_count /  total_count) * 100);


    // Parameters to Populate Progress Charts and Legends:
    const legendProps = {
        total_count: total_count,
        completed_count: completed_count,
        incomplete_count: incomplete_count
    };

    return (
        <>
            <h2 className={styles.heading}>Task Completion:</h2>

            <div className={styles.chartContainer}>

                <div className={styles.chartBox}>
                    <ProgressChart percentage={percentage}  />
                </div>

                <div className={styles.legendBox}>
                    <Legend data={legendProps}/>
                </div>

            </div>
        </>
    );
}


export default EventStatsPage;