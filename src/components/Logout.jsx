import { Button } from '@mui/material'
import React from 'react'

export const Logout = ({setIsloggedin}) => {
  return (
    <div>
        <Button onClick={()=>setIsloggedin(false)} variant="contained"  sx={{position:"fixed",top:"5px",right:"5px"}}>Deploy the log</Button>
    </div>
  )
}

