import React from 'react'
import Navbar from './Components/Section 1/Navbar'
import Bottom from './Components/Section 1/Bottom'

const App = () => {
  let userData = [
    {
      image : "https://th.bing.com/th/id/OIP.i-h_R_qJwqd5B1JF-0NEjwAAAA?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      desctiption : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, qui!",
      label : "Intern",
      btn : "aqua",
      num : "1",
    },
    {
      image : "https://thumbs.dreamstime.com/b/serious-indian-professional-business-man-office-portrait-serious-young-ambitious-indian-businessman-project-leader-dressed-367980912.jpg",
      desctiption : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, qui!",
      label : "FullTime",
      btn : "mediumaquamarine",
      num : "2",
    },
    {
      image : "https://tse2.mm.bing.net/th/id/OIP.c6By9cqpS5UzfNklhsjg5AHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      desctiption : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, qui!",
      label : "Manager",
      btn : "cyan",
      num : "3",
    },
  ]

  return (
    <div className="section-div">
      <Navbar /> 
      <Bottom user = {userData}/>
    </div>
  )
}

export default App