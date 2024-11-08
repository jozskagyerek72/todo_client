import React from 'react'

export const TodoFooter = ({nrTask}) => {
  return (
    <div className='foooter'>
      {nrTask != 0 ? `${nrTask} tasks left...` : "No tasks left..."}
    </div>
  )
}

