import { useState } from "react";

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';



const Edit = () => {
    const [data,setData] = useState({
        username : '',
        email : '',
        password : '',
    })
    
    const [tmpData,setTmpData] = useState({
        username : '',
        email : '',
        password : '',
    })
    
    const submitData = () => {
        setData({
            username : tmpData.username,
            email : tmpData.email,
            password : tmpData.password,
        })
        
        setTmpData({
            username : '',
            email : '',
            password : '',
        })
    }
    return (
        <Box sx={{
            width:'50vw',
            height:'100vh',
            mx:'auto'
            
        }}>
            <Typography variant='h2' component='div' align="center">
                Edit Player
            </Typography>
            <Box component="form" sx={{
                marginTop: '48px',
                width:'50%',
                mx:'auto'
            }}>
                <TextField sx={{mb:"16px"}} id="username" fullWidth label="Username" variant="outlined"
                onChange={(e)=>setTmpData({
                    ...tmpData,
                    username: e.target.value
                })}
                value={tmpData.username}
                />
                <TextField sx={{mb:"16px"}} id="email" fullWidth label="Email" variant="outlined"
                onChange={(e)=>setTmpData({
                    ...tmpData,
                    email: e.target.value
                })}
                value={tmpData.email}
                />
                <TextField sx={{mb:"16px"}} id="password" fullWidth label="Password" variant="outlined" type="password" 
                onChange={(e)=>setTmpData({
                    ...tmpData,
                    password: e.target.value
                })}
                value={tmpData.password}
                />
                <Button variant="contained" fullWidth onClick={submitData}>Submit</Button>
                {Object.entries(data).map(([key,value]) => {
                    return( {value} !== '' ? (
                        <Typography key={key} variant='body1' component='div' align="left" sx={{mt:"16px"}}>
                            {key} : {value}
                        </Typography>
                    ) : null)
                })}
            </Box>
            
        </Box>
    )
}

export default Edit