import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { EditToDo } from './EditToDo';
import { useQueryClient } from '@tanstack/react-query';
import { delToDos, updateCompleted } from '../utils';

export const Todo = ({ id, task, completed}) => {

    const [open,setOpen] = useState(false)
    const queryClient = useQueryClient()

    const handleEdit = ()=>
    {
        setOpen(true)
    }

    const handleDelete = async () => {
        //setTodos(prev => prev.filter(obj => obj.id != id))
       await delToDos(id)
       queryClient.invalidateQueries("todos") 
    }

    const handleDone = async () => {
       await updateCompleted(id)
       queryClient.invalidateQueries("todos")
    }


    return (
        <div>
            <ListItem disablePadding>
                <ListItemButton >
                    <ListItemIcon>
                        <DoneIcon onClick={handleDone}/>
                    </ListItemIcon>
                    <ListItemText primary={task} sx={{textDecoration:completed?"line-through":"none"}}/>
                    <ListItemIcon sx={{ color: "red" }}>
                        <DeleteIcon onClick={handleDelete} />
                    </ListItemIcon>
                    <ListItemIcon sx={{ color: "blue" }}>
                        <EditIcon onClick={handleEdit}/>
                    </ListItemIcon>

                </ListItemButton>
            </ListItem>
            <Divider/>
            {open&& <EditToDo open={open} setOpen={setOpen} id={id} task={task} />}
        </div>
    )
}

