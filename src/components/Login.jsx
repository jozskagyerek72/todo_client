import React from 'react'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'

export const Login = ({setIsloggedin}) => {
  
    const [username,setusername] = useState("")
    const [Password,setpassword] = useState("")
    const [isvalidusername, setIsvalidusername] = useState(null)
    const [isvalidpw , setIsvalidpw] = useState(null)
  
    const handleLogin = ()=>
    {
        console.log(username,Password);
        import.meta.env.VITE_USERNAME==username && import.meta.env.VITE_PW==Password ? setIsloggedin(true) : setIsloggedin(false)
        
    }

    return (
    <div className='login'>
      <h3>login form</h3>
      <TextField id="standard-basic" label="Username" variant="standard" value={username} onChange={(e)=>setusername(e.target.value)} error={isvalidusername!=null && !isvalidusername} onBlur={()=>setIsvalidusername(import.meta.env.VITE_USERNAME==username)}/>
      <TextField id="standard-basic" label="Password" variant="standard" value={Password} onChange={(e)=>setpassword(e.target.value)} 
        error={isvalidpw!=null && !isvalidpw} onBlur={()=>setIsvalidpw(import.meta.env.VITE_PW==Password)}/>
      <Button variant="outlined " onClick={handleLogin}>Login</Button>
    </div>
  )
}

