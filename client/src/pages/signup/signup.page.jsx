import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'



const Signup = (props) => {
    return (
        <Box sx={{
            width:'50vw',
            height:'100vh',
            mx:'auto'
            
        }}>
            <Typography variant='h2' component='div' align="center">
                Signup
            </Typography>
            <Box component="form" sx={{
                marginTop: '48px',
                width:'50%',
                mx:'auto'
            }}>
                <TextField sx={{mb:"16px"}} id="username" fullWidth label="Username" variant="outlined"
                onChange={(e)=>props.setTmpUser({
                    ...props.tmpUser,
                    username: e.target.value
                })}
                value={props.tmpUser.username}
                />
                <TextField sx={{mb:"16px"}} id="email" fullWidth label="Email" variant="outlined"
                onChange={(e)=>props.setTmpUser({
                    ...props.tmpUser,
                    email: e.target.value
                })}
                value={props.tmpUser.email}
                />
                <TextField sx={{mb:"16px"}} id="password" fullWidth label="Password" variant="outlined" type="password" 
                onChange={(e)=>props.setTmpUser({
                    ...props.tmpUser,
                    password: e.target.value
                })}
                value={props.tmpUser.password}
                />
                <Button variant="contained" fullWidth >
                    <Link 
                        style={{  textDecoration: 'none', color: '#fff' }}
                        to={{pathname: `/`}} onClick={props.onSubmit}>                
                        Submit
                    </Link>
                </Button>
            </Box>
            
        </Box>
    )
}

export default Signup