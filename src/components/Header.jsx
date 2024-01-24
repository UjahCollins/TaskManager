import React, { useContext } from 'react'
import { AppContext } from '../context'

const Header = () => {
  const {setToggleTaskOverlay, toggleLogout, setToggleLogout}=useContext(AppContext)
  
  return (
    <div className='mainHeader'>
      <div className='rightHeader'>
        <p>Platform Launch </p>
      </div>
      <div className='leftHeader'>
        <button className='newTask'
        onClick={()=> setToggleTaskOverlay(true)}
        
        >+ Add New Task</button>
       <div className='ProfileHolder'>
       <button className='profile'
       onClick={()=>setToggleLogout(true)}
       >E</button>
       {
        toggleLogout ? (<div className='logout'><button>Logout</button></div>) : null
       }
        
       </div>
      </div>
      
    </div>
    
    
  )
}

export default Header
