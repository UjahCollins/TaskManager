import React, { useContext } from 'react'
import "../App.css"
import Sidebar from './Sidebar'
import Header from './Header'
import Task from './Task'
import TaskCard from './TaskCard'
import { AppContext } from '../context'


const LandingPage = () => {
  const {toggleTaskOverlay} = useContext(AppContext);
  return (
    <div className='mainContainer'>
      <div className='container'>
      <div className='sidebar'>
        <Sidebar/>
      </div>
      <div className='secondPart'>
        <div className='header'>
          <Header/>
        </div>
        <div className='task'>
          <Task/>
        </div>
      </div>
      </div>
      <>
          {
            toggleTaskOverlay ? (<div className=  "container2">
            <TaskCard/>
               
            </div> ) : null
          }
          </>
      
    </div>
  )
}

export default LandingPage
