import React from 'react'

const Task = () => {
  return (
    <div className='taskContainer'>
      <div className='todo' >
        <div className='todoheader'>
          <div className='todoCircle'></div>
          <p>TODO (0)</p>
        </div>
        <div className='todoTasks'>
        <div className='taskDetails'>
            <h6>Build UI for onboarding flow</h6>
            <p> 0 of 3 subtasks</p>
          </div>
        </div>
      </div>
      <div className='doing' >
        <div className='todoheader'>
          <div className='doingCircle'></div>
          <p>DOING (0)</p>
        </div>
        <div className='todoTasks'>
        <div className='taskDetails'>
            <h6>Build UI for onboarding flow</h6>
            <p> 0 of 3 subtasks</p>
          </div>
        </div>
      </div>
      <div className='done' >
        <div className='todoheader'>
          <div className='doneCircle'></div>
          <p>DONE (0)</p>
        </div>
        <div className='todoTasks'>
        <div className='taskDetails'>
            <h6>Build UI for onboarding flow</h6>
            <p> 0 of 3 subtasks</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task
