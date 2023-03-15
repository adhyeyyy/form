import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormInputValidation } from 'react-form-input-validation';
import { Button } from '@mui/material';
const Login = () => {
    // var[email,setemail]=useState();
    // const setemail1 =(e)=>{
    //     setemail(email=(e.target.value))
    //     console.log(email)

    // }
    const[fields,errors,form]=useFormInputValidation({
        email_address:"",
        password:""
    },
    { email_address:"required|email",
    password:"required"
 }
    )
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
      value={fields. email}
      onChange={form.handleChangeEvent}
      onBlur={form.handleBlurEvent}
      name='email_address'
        id="outlined-error"
        label="Email address"
        helperText={errors.email_address?errors.email_address:""}
        defaultValue=""
      /><br></br>
      <TextField
       value={fields. password}
       onBlur={form.handleBlurEvent}
       onChange={form.handleChangeEvent}
       name='password'
        id="outlined-error-helper-text"
        label="Password"
        defaultValue=""
        helperText={errors.password?errors.password:""}
        type={'password'}
      />
      
    </div>
   
  </Box>
  )
}

export default Login
