import React from 'react';
import './BMI.css';
import { useState } from 'react';

function BMI() {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('');
    const [msg, setMsg] = useState('');  

    const reload = () => {
        window.location.reload();
    }

    const handleCalculations = (e) => {
        e.preventDefault();
        
        if (weight === 0 || height === 0) {
            alert("Please enter valid details!");
            return;
        }

        let formula = (weight / ((height / 100) * (height / 100)));
        setBmi(formula.toFixed(2));
        
        if (formula < 18) {
            setMsg("You're Under Weight.");
        } else if (formula >= 18 && formula < 25) {
            setMsg("You're Fit");
        } else {
            setMsg("You are Over Weight. WorkOut");
        }
    }

    return (
        <div className='calc_box'>
            <h1 className='heading'>BMI Calculator</h1>
            <form className='form' onSubmit={handleCalculations}>
                <div className='age-box'>
                    <label className='age' >Age:</label>
                    <br></br>
                    <input className='age-input' type="number" placeholder="Age..." value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className='weight-box'>
                    <label className='weight' >Weight:</label>
                    <br></br>
                    <input className='weight-input' type="number" placeholder="Weight (in kgs) " value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>
                <div className='height-box'>
                    <label className='height' >Height:</label>
                    <br></br>
                    <input className='height-input' type="number" placeholder="Height (in cms)" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
                <div className='btns-box'>
                    <button className='submit-btn' type="submit">Calculate</button>
                    <button className='reload-btn' type="button" onClick={reload}>Reload</button>
                </div>
                <div className='result'>
                    <h3 className='bmi-value'>Your BMI is: {bmi}</h3>
                    <p className='p-result'>{msg}</p>
                </div>
            </form>
        </div>
    )
}

export default BMI;
