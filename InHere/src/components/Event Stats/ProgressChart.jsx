import * as React from 'react';
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ProgressChart(props) {
    return (
            <div>
                <CircularProgressbar
                    value={props.percentage}
                    text={`${props.percentage}%`}
                    styles={buildStyles({
                        textColor: "#009900",
                        pathColor: "#009900",
                        trailColor: "#d6d6d6"
                    })}
                />
            </div>
    );
}

export default ProgressChart;