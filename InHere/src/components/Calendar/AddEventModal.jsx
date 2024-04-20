import React from "react";
import ReactDom from "react-dom";

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
    padding: '10px'
}

const HEADER_STYLES = {
    padding: '2px',
    fontSize: '15px'
}

export default function Modal({ open, children, onClose }) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES}/>
            <div style={MODAL_STYLES}>
                <button onClick={onClose}>Cancel</button>
                <div style={INPUT_STYLES}>
                    <h1 style={HEADER_STYLES}>Enter Event Title</h1>
                    <input
                        type="text"
                        placeholder="Enter Event Title"
                    />
                </div>
                <div style={INPUT_STYLES}>
                    <h1 style={HEADER_STYLES}>Enter Start Date</h1>
                    <input
                        type="text"
                        placeholder="Enter Start date"
                    />
                </div>
                <div style={INPUT_STYLES}>
                    <h1 style={HEADER_STYLES}>Enter End Date</h1>
                    <input
                        type="text"
                        placeholder="Enter End date"
                    />
                </div>
                <button>Add Event</button>
                {children}
            </div>
        </>,
        document.getElementById("portal")
    )
}