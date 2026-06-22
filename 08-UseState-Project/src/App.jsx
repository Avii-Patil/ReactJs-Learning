import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function increase() {
    setNum(num + 1)
  }
  function reset() {
    setNum(0)
  }
  function decrease() {
    if (num == 0) {
      return;
    }
    else {
      setNum(num - 1)
    }
  }

  return (
    <div className="Maindiv">
      <h1>{num}</h1>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increase}>Increase</button>

    </div>
  )
}

export default App