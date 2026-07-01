import React, { useContext } from 'react'
import { ThemeData } from '../Context/Context'

const Navbar2 = () => {

    const [theme, setTheme] = useContext(ThemeData)
    // console.log(data);
    
  return (
    <div className='nav2'>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Contact</h1>
        <h1>{theme}</h1>
    </div>
  )
}

export default Navbar2