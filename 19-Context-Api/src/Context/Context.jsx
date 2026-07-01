import React, { createContext, useContext, useState } from 'react'

export const ThemeData = createContext()


const Context = (props) => {

    const [theme, setTheme] = useState('light')

  return (
    <div>
        <ThemeData.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeData.Provider>
    </div>
  )
}

export default Context