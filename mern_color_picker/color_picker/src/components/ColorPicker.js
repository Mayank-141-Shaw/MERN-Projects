import React, { Component, useEffect } from 'react';
import './ColorPicker.css';

function ColorPicker() {

    const values = ['red', 'blue', 'green']

    let state = {
        color : '',
        inputColor : ''
    }

    const [color, setColor] = React.useState('');
    const [inputColor, setInputColor] = React.useState('');

    const handleClick = () => {
        alert("Now click to change the color");
        setColor(inputColor);
        let lb = document.getElementById('output_label');
        lb.textContent = color;
    }

    const onChange = (e) => {
        setInputColor(e.target.value);
    };

    useEffect(() => { document.body.style.backgroundColor = color });

    return (
            <div className="btn-style">
                <input type="text" name="color_input" placeholder="Enter color name" onChange={onChange} required="true"></input>
                <input type="color" onChange={onChange} name="color_select"></input>
                <button type="submit" onClick={handleClick}>Click Me</button><br/>
                <label id="output_label">Nothing Selected</label>
                <p style={{ color: color, fontSize: "30px", fontWeight: "bold" }} >This para is used as a default text for checking purpose.
                    This is a work of fiction all resemblance to any person is purely coincidental
                </p>
            </div>
            );
}

export default ColorPicker;