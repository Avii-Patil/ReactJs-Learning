import React, { useState } from 'react'

const App = () => {

  const [user, setUser] = useState({ Name: "Aviii", Age: 19 })
  const [arr, setArr] = useState([10,20,30])

  const setData = () => {

    const userCopy = { ...user };
    userCopy.Name = "AVIII"
    userCopy.Age = 30

    setUser(userCopy);
  }

  const setVal = () => {
    const copyArr = [...arr]
    copyArr.push(40)
    setArr(copyArr)
  }

  return (
    <div>
      <h1>Hello This Is {user.Name}</h1>
      <h3>Age Of Name Is {user.Age}</h3>
      <h4>Value Of Array Is {arr}</h4>
      <button onClick={()=> {
        setData()
        setVal()
      }}>Click!!!</button>
    </div>
  )
}

export default App