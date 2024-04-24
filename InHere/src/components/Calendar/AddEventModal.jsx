import React from "react";
import ReactDom from "react-dom";
import http from "../../http-common.js";
//import EventValidation from "../TaskTracker/AddEventValidation.jsx";

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#EEE',
    padding: '50px',
    zIndex: 10000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

const INPUT_STYLES = {
    padding: '10px',
    fontSize: '15px'
}

const HEADER_STYLES = {
    padding: '2px',
    fontSize: '15px'
}

export default function Modal({ open, children, onClose }) {
    if (!open) return null

    function addEvent() {

        let data = {
            title: document.getElementById('title').value,
            startDate: document.getElementById('startDate').value,
            endDate: document.getElementById('endDate').value,
            allDay: JSON.stringify(document.getElementById('allDay').checked),
            userID: sessionStorage.getItem("UserID")
        }

        // Set up for validating tasks
        // const err = EventValidation(data.title, data.date, data.priority);

        // true to be replaced with validation
        if(true) {
            http.post('https://ec2-18-223-107-62.us-east-2.compute.amazonaws.com:3307/createEvent', data)
                .then(res => {
                    if (res.data.message === "Creation Successful") {
                        onClose();
                    } else {
                        alert("Sorry, there was a problem creating that event.");
                    }
                })
                .catch(err => {
                    console.log("axios error (Add Event to Calendar)");
                    console.log(err)
                });
        } else {
            alert(err.title + err.startDate + err.endDate + err.allDay);
        }
    }

    return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES}/>
            <div style={MODAL_STYLES}>
                <div style={INPUT_STYLES}>
                    <h1 style={HEADER_STYLES}>Enter Event Title</h1>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter Event Title"
                    />
                </div>
                <div style={INPUT_STYLES}>
                    <h1 style={HEADER_STYLES}>Enter Start Date</h1>
                    <input
                        type="text"
                        id="startDate"
                        placeholder="YYYY-MM-DD HH:mm:SS"
                    />
                </div>
                <div style={INPUT_STYLES}>
                    <h1 style={HEADER_STYLES}>Enter End Date</h1>
                    <input
                        type="text"
                        id="endDate"
                        placeholder="YYYY-MM-DD HH:mm:SS"
                    />
                </div>
                <div style={INPUT_STYLES}>
                    <h1 style={HEADER_STYLES}>Does this event last all day?</h1>
                    <input
                        type="checkbox"
                        id="allDay"
                        placeholder="true or false"
                    />
                </div>
                <button style={{display: 'inline'}} onClick={() => addEvent()}>Add Event</button>
                <button style={{display: 'inline', marginLeft: '45px'}} onClick={onClose}>Cancel</button>
                {children}
            </div>
        </>,
        document.getElementById("portal")
    )
}