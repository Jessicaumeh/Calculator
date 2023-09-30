import React from 'react'; // Importing React
import './outputRow.css'; // Importing CSS styles

const OutputRow = props => { // Declaring a functional component named OutputRow
    return (
        <div>
            <input type='text' readOnly className='screen' style={props.textSize} value={props.value}></input> {/* Creating an input element */}
        </div>
    )
}

export default OutputRow; // Exporting the OutputRow component
