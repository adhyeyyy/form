import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left'>
          Home page
          </Typography>
           
       <Button color='inherit' ><Link to="/" style={{color:'white',textDecoration:'none'}}>Login</Link></Button>
       <Button color='inherit' ><Link to={"/Signup"}>Signup</Link></Button>
       <Button color='inherit' ><Link to={"/Contact"}>Contact</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar

