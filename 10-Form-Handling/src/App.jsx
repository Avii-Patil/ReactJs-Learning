import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const functionHandler = (e) => {
    e.preventDefault()
    console.log("Form Submitted");
  }

  return (
    <div className='form-container'>
      <form onSubmit={(e)=>{
        functionHandler(e)
      }}>
        <input placeholder='Enter Your Name' type='text'/> 
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App