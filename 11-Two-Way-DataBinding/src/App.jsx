import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  
  const functionHandler = (e) => {
    e.preventDefault()                      //Form Handling Concepts...
    console.log(title + " Submitted");
    setTitle('')                            // Clearing Input By Setting Title To NULL String
  }

  const changeFunction = (val) => {         // Function For Changing Continous Inputs In Input Fields
    setTitle(val)
  }

  return (
    <div className='form-container'>
      <form onSubmit={(e)=>{
        functionHandler(e)
      }}>
        <input placeholder='Enter Your Name' type='text' value={title} onChange={(e) => {
          changeFunction(e.target.value)
        }}/> 
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App