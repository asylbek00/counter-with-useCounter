import React from 'react'
import useCounter from './useCounter'
import './App.css'



let number = 9
function App() {
  const {changeNumberInc, changeNumberDec,count,resetNumber } = useCounter(number,5,50,0)
  
  return (
    <div>
      {/* <input value={count} type="text" /> */}
      <h1>{count}</h1>
      <button className='button' onClick={changeNumberInc}>+</button>
      <button className='button'  onClick={changeNumberDec}>-</button>
      <button className='button' onClick={resetNumber}>reset</button>
    </div>
  )
}

export default App
