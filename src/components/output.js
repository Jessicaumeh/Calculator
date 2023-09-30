import React from "react"; // Importing React
import OutputRow from "./outputRow"; // Importing OutputRow component

const Output = props => { // Declaring a functional component named Output
    // Rendering OutputRow for the answer and the user input
    return (
        <div>
            <OutputRow value={props.answer} textSize={{ fontSize: '20px' }} /> 
            <OutputRow value={props.user} /> 
        </div>
    )
}

export default Output; // Exporting the Output component
