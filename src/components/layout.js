import React, {useState} from 'react'; // Importing React and useState
import './layout.css'; // Importing CSS styles
import logo from './Jess’ Calculator.png'; // Importing an image file
import Output from './output'; // Importing a component

const Layout = (props) => { // Declaring a functional component named Layout
    let [input, setInput] = useState('0') // Initializing input state
    let [result, setResult] = useState('') // Initializing result state
    const handleClick = (event) => { // Defining a click event handler
        const value = event.target.value; // Getting the value from the clicked element

        if (value === '=') { // Checking if the value is '='
            if (input !== '') { // Checking if the input is not empty
                let res = ''; // Initializing a result variable
                try {
                    res = eval(input); // Evaluating the input
                } catch (err) {
                    setResult('Math Error'); // Handling a math error
                    return;
                }

                setResult(input + '='); // Setting the result
                setInput(res.toString()); // Updating the input
            }
        } else if (value === 'C') { // Checking if the value is 'C'
            setInput('0'); // Resetting input to '0'
            setResult(''); // Resetting result
        } else if (value === 'DEL') { // Checking if the value is 'DEL'
            if (input !== '0') { // Checking if input is not '0'
                let str = input;
                str = str.substring(0, str.length - 1); // Removing the last character
                setInput(str || '0'); // Updating input or setting it to '0'
            }
        } else { // Handling other values
            if (input === '0') {
                setInput(value); // Setting input to the clicked value
            } else {
                setInput(input + value); // Appending the clicked value to input
            }
        }
    };

    return (
        <div className='frame'> {/* JSX: Adding a class to a div */}
            <div className='calculator'> {/* JSX: Adding a class to a div */}
                <br></br> {/* JSX: Adding a line break */}
                <Output user={input} answer={result} /> {/* Using the Output component */}
                <img src={logo} alt="logo" width='200x' style={{display: 'block', marginLeft: 'auto', marginRight:'auto'}}/> {/* JSX: Adding an image */}
                <div className='keys'> {/* JSX: Adding a class to a div */}
                    {/* Creating calculator buttons */}
                    <input type='button' value={'C'} className='button clear' onClick={handleClick}></input>
                    <input type='button' value={'DEL'} className='button clear' onClick={handleClick}></input>
                    <input type='button' value={'%'} className='button operator' onClick={handleClick}></input>
                    <input type='button' value={'/'} className='button operator' onClick={handleClick}></input>

                    <input type='button' value={'7'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'8'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'9'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'*'} className='button operator' onClick={handleClick}></input>

                    <input type='button' value={'4'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'5'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'6'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'-'} className='button operator' onClick={handleClick}></input>

                    <input type='button' value={'1'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'2'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'3'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'+'} className='button operator' onClick={handleClick}></input>

                    <input type='button' value={'0'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'.'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'='} className='button operator' onClick={handleClick}></input>
                </div>
            </div>
        </div>
    )
};

export default Layout; // Exporting the Layout component
