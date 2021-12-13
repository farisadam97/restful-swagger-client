import { useState } from "react";

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';



const Search = () => {
    const [data,setData] = useState({
        username : '',
        email : '',
        experience : '',
        lvl:''
    })
    
    const [tmpData,setTmpData] = useState({
        username : '',
        email : '',
        experience : '',
        lvl:''
    })
    
    const submitData = () => {
        setData({
            username : tmpData.username,
            email : tmpData.email,
            experience : tmpData.experience,
            lvl : tmpData.lvl,
        })
        
        setTmpData({
            username : '',
            email : '',
            experience : '',
            lvl:''
        })
    }
    return (
        <Box sx={{
            width:'50vw',
            height:'100vh',
            mx:'auto'
            
        }}>
            <Typography variant='h2' component='div' align="center">
                Search Player
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
                <TextField sx={{mb:"16px"}} id="experience" fullWidth label="Experience" variant="outlined"  
                onChange={(e)=>setTmpData({
                    ...tmpData,
                    experience: e.target.value
                })}
                value={tmpData.experience}
                />
                <TextField sx={{mb:"16px"}} id="lvl" fullWidth label="Level" variant="outlined"  
                onChange={(e)=>setTmpData({
                    ...tmpData,
                    lvl: e.target.value
                })}
                value={tmpData.lvl}
                />
                <Button variant="contained" fullWidth onClick={submitData}>Submit</Button>
                {Object.entries(data).map(([key,value]) => {
                    return( {value} !== null ? (
                        <Typography key={key} variant='body1' component='div' align="left" sx={{mt:"16px"}}>
                            {key} : {value}
                        </Typography>
                    ) : null)
                })}
            </Box>
            
        </Box>
    )
}

export default Search