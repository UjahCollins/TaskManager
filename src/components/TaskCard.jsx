import React, { useContext } from 'react'
import { AppContext } from '../context'

const TaskCard = () => {
  const {setToggleTaskOverlay}=useContext(AppContext)
  return (
    <div className='taskCard'>
      <div className='taskcardHeader'>
        <h3 >Add New Task</h3>
      </div>
      <div className='TaskInput1'>
        <label>Title</label>
        <input type="text" placeholder='e.g take coffee break' />
      </div>
      <div className='TaskInput2'>
      <label>Description</label>
        <input type="text" placeholder='e.g it was always good to take a break. this 15mins break will recharge the batteries a little' />
      </div>
      <div className='TaskInput3'>
      <label>Title</label>
        <input type="text" placeholder='e.g take coffee break' />
        <input type="text" placeholder='e.g take coffee break' />
        <button>+ Add New Subtask</button>
      </div>
      <div className='TaskInput4'>
        <p>status</p>
        <select name="" id="">
          <option>Todo</option>
          <option>Doing</option>
          <option>Done</option>
          
        </select>
      </div>
      <button className='AddTaskBtn'
      onClick={()=>setToggleTaskOverlay(false)}
      >Create Task</button>
    </div>
  )
}

export default TaskCard
