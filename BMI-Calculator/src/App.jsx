import Title from './prac.jsx'
import './App.css'
// import "../../index.css";
import { useState } from 'react'

function App() {

  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();
  const [Message, setMessage] = useState(' ');

  function calcBmi(e) {
    e.preventDefault()
    if (weight == 0 || height == 0) {
      alert("Enter the value of weight and height to calculate BMI")
    }
    else{
      let b=(weight/(height*height)).toFixed(2);
      setBmi(b)
      printMess(b)
      setWeight(" ")
      setHeight(" ")
    }
  }
  // LOGIC TO CALCULATE BMI AND PRINT MESSAGE

  function printMess(bmi){
           if(bmi<=18.5){
            setMessage("You are Underweight")
           }
           else if(bmi>=19 && bmi<=24){
            setMessage("You are Healthy weight")
           }
           else if(bmi>=25 && bmi<=30){
            setMessage("You are Overweight")
           }
           else{
            setMessage("You are Obese")
           }
  }

  

  return (
    <>
      <div>
        <h2 className='heading'>BMI CALCULATOR</h2>
        <p style={{ marginLeft: '58px', marginTop: '-10px' }}>(Using metric measurement)</p>
      </div>
      <div className='container'>
        <form action="#" onSubmit={calcBmi}>
          <label htmlFor="weight">Weight(in kg)</label>
          <input type="text" name='weight' placeholder='Enter you weight' value={weight} onChange={(e) => setWeight(e.target.value)} />
          <br /><br />
          <label htmlFor="height">Height(in m)</label>
          <input type="text" name='height' placeholder='Enter you Height' value={height} onChange={(e) => setHeight(e.target.value)} />
          <br /><br />
          <button type='submit'>Calculate</button>
          <button type='button' onClick={()=> window.location.reload()}>Reload</button>

          <div>
            <p >Your BMI is : {bmi}</p>
            <p>{Message}</p>

          </div>
        </form>

      </div>

    </>
  )
}

export default App
