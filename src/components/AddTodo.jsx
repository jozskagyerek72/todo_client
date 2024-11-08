import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { addToDo } from '../utils'
import { useQueryClient } from '@tanstack/react-query'


export const AddTodo = () => {
  
    const [newTask,setNewtask] = useState("")

    const queryClient = useQueryClient()

    const handleAdd = async ()=>
        {
           /* console.log(newTask);
            setTodos(prev=>[...prev, {id:v4(),task:newTask,completed:false}])    
            setNewtask("")   */
            
            await addToDo({task:newTask})
            setNewtask("")
            queryClient.invalidateQueries("todos")
        }


    return (
    <div className='addTodo'>
      <TextField id="filled-basic" label="add new task..." variant="filled" sx={{backgroundColor:"white"}} value={newTask} onChange={(e)=>setNewtask(e.target.value)}/>
      <Button variant='contained' onClick={handleAdd} disabled={!newTask?true:false} >Add</Button>
    </div>
  )
}

