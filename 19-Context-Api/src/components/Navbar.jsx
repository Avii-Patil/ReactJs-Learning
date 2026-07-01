import React, { useContext } from 'react'
import Navbar2 from './Navbar2'
import { ThemeData } from '../Context/Context'

const Navbar = () => {
    const [theme] = useContext(ThemeData)
  return (
    <div className={theme}>
        <h1>React.Js</h1>
        <Navbar2 />
    </div>
  )
}

export default Navbar