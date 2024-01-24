import React from 'react'
import { createContext, useState} from 'react'

export const AppContext= createContext();

export const AppProvider = ({children}) => {
  const [toggleTaskOverlay, setToggleTaskOverlay] = useState(false)
  const [toggleLogout, setToggleLogout] = useState(false)


  return (
    <AppContext.Provider
    value = {{
        toggleTaskOverlay,
        setToggleTaskOverlay,
        toggleLogout,
        setToggleLogout,
    }}>
        {children}
    </AppContext.Provider>
  )
}


