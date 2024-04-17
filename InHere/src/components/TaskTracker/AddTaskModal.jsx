import ReactDom from "react-dom";
import http from "../../http-common.js";
import TaskValidation from "./AddTaskValidation.jsx";

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#EEE',
    padding: '50px',
    zIndex: 1000
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
    padding: '10px'
}

export default function Modal({ open, children, onClose }) {
    if (!open) return null

    function addTask() {

        let data = {
            userID: sessionStorage.getItem("UserID"),
            title: document.getElementById('title').value,
            date: document.getElementById('dueDate').value,
            priority: document.getElementById('priority').value
        }

        const err = TaskValidation(data.title, data.date, data.priority);

        if(err.title === "" && err.dueDate === "" && err.priority === "") {

            http.post('https://ec2-18-223-107-62.us-east-2.compute.amazonaws.com:3307/createTask', data)
                .then(res => {
                    if (res.data.message === "Creation Successful") {
                        // Force reloads the webpage to refresh events
                        // Band-aid fix
                        // window.location.reload();
                        onClose();
                    } else {
                        alert("Sorry, there was a problem creating that task.");
                    }
                })
                .catch(err => {
                    console.log("axios error (listCalendar)");
                    console.log(err)
                });
        } else {
            alert(err.title + err.dueDate + err.priority);
        }
    }

    return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES}/>
            <div style={MODAL_STYLES}>
                <button onClick={onClose}>Cancel</button>
                <div style={INPUT_STYLES}>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter Task Title"
                    />
                </div>
                <div style={INPUT_STYLES}>
                    <input
                        type="text"
                        id="dueDate"
                        placeholder="Enter Due Date"
                    />
                </div>
                <div style={INPUT_STYLES}>
                    <input
                        type="text"
                        id="priority"
                        placeholder="Enter Priority Level"
                    />
                </div>
                <button onClick={() => addTask()}>Add Task</button>
                {children}
            </div>
        </>,
        document.getElementById("portal")
    )
}