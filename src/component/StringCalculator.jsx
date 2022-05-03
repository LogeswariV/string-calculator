import React, { useState } from 'react';
import { calculation } from '../utils/calculation';

const StringCalculator = () => {
    const [stringInput, setStringInput] = useState('');
    const [sum,setSum] = useState('');
    const updateSum = () => {
        setSum(calculation(stringInput));
    }
    return <React.Fragment>
        <h1>String Calculator</h1>
        <input type='text' label='Enter String' onChange={(e)=>{
            setStringInput(e.target.value)
        }} value={stringInput}/>
        <button onClick={updateSum}>Click Here</button>
        {sum && <p>`Sum is ${sum}`</p>}
    </React.Fragment>
}
export default StringCalculator;