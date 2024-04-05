import * as React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function ProgressChart(props) {
    return (
            <div>
                <CircularProgressbar value={props.percentage} />
            </div>
    );
}

export default ProgressChart;