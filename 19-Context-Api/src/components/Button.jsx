import React, { useContext } from 'react'
import { ThemeData } from '../Context/Context'

const Button = () => {

    const [theme, setTheme] = useContext(ThemeData)

    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        }else {
            setTheme('light')
        }
    }

  return (
    <div>
        <button className='btn' onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Button