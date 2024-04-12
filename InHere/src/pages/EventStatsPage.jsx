import {useEffect, useState} from 'react';

import ProgressChart from "../components/Event Stats/ProgressChart.jsx";
import styles from "./css-files/EventStatsPage.module.css"
import Legend from "../components/Event Stats/Legend.jsx";

import http from "../http-common.js";

// Display Event Stats Page:
function EventStatsPage () {
    // Global Declarations:
    const TEST_USER_ID = 65; // TODO: REMOVE HARDCODE USER ID

    const [eventStats, setEventStats] = useState(null); // holds response from the database


    // Get Task Completion Data:
    const fetchData = (userId) => {

        const data = {
            userID: userId
        }

        http.post('https://ec2-18-223-107-62.us-east-2.compute.amazonaws.com:3307/eventStats', data)
            .then(res => {

                console.log(res);

                if(res.data.message === 'Query Successful')
                {
                    setEventStats(res.data);
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
    };

    // Get Task Completion Data:
    useEffect(() =>
    {
        fetchData(TEST_USER_ID); // Call the fetchData function with the desired UserID
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    if (!eventStats) {
        return <div>Loading...</div>; // Placeholder for when data is being fetched
    }

    // Populate Data:
    const total_count = eventStats.results && eventStats.results.length > 0 ? eventStats.results[0].Total_Count : 0;
    const completed_count = eventStats.results && eventStats.results.length > 0 ? eventStats.results[0].Completed_Count : 0;

    const incomplete_count = total_count - completed_count;

    const percentage = total_count === 0 || completed_count === 0 ? 0 : Math.trunc((completed_count /  total_count) * 100);


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