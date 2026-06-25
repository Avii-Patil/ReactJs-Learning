import React, { useEffect, useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num1, setNum1] = useState(0)

  useEffect(() => {
    console.log("Num Is Changed To = " + num);
  }, [num])

  useEffect(() => {
    console.log("Num1 Is Changed To = " + num1);
  }, [num1])

  return (
      <div className='Main-Div'>
        <h1>Value of Num = {num}</h1>
        <h1>Value of Num = {num1}</h1>
        <button onClick={() => {
          setNum(num + 1)
        }}>
          NUM Change
        </button>
        <button onClick={() => {
          setNum1(num1 + 1)
        }}>
          NUM2 Change
        </button>
      </div>
  )
}

export default App