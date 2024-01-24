import React from 'react'

const Sidebar = () => {
  return (
    <div className='SidebarContainer'>
        <div className='sec1Sidebar'>
          <h4>Kanban</h4>
        </div>
        <div className='sec2Sidebar'>
          <p>ALL BOARDS (0)</p>
          <h5 className='active'>Platform Launch</h5>
          <h5>Marketing Plan</h5>
          <h5>Roadmap</h5>
          <h5><span>+</span>Create new Board</h5>
          
        </div>
        <div className='sec3Sidebar'>
          <div className='toggle'>hide</div>
          <p>Hide Sidebar</p>
        </div>
    </div>
  )
}

export default Sidebar
