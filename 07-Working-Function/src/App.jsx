import React from 'react'

const App = () => {

  function clickAction(){
    console.log("You Clicked Button...");
  }

  return (
    <div>
      <h1>Hello This Project Demostrate The Working Of Funtions</h1>
      <button onClick={clickAction}>Click Me</button>
    </div>
  )
}

export default App