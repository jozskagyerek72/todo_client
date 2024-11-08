import axios from "axios"

const url = "http://localhost:3000"

export const getToDos = async () =>
{
    const response = await axios.get(url+"/todos")
    return response
}

export const delToDos = async (id) =>
{
    const response = await axios.delete(url+"/todos/"+id)
    return response
}
    
export const updateCompleted = async (id) =>
{
    const response = await axios.put(url+"/todos/completed/"+id)
    return response
}
    
export const updateTask = async (id,data) =>
{
    const response = await axios.put(url+"/todos/"+id,data)
    return response
}

export const addToDo = async (data) =>
{
    const response = await axios.post(url+"/todos", data)
    return response
}
    
    