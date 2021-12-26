
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {useParams} from 'react-router-dom'


const Edit = (props) => {

    let idUserParams = useParams()
    let indexUser = props.user.findIndex((obj => obj.id === parseInt(idUserParams.idUser)))
    let dataUser = props.user[indexUser]
    
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
                defaultValue={dataUser.username}
                onChange={(e)=>
                    {
                        props.setTmpUser({
                            ...props.tmpUser,
                            username: e.target.value
                        })
                    }
                }
                />
                <TextField sx={{mb:"16px"}} id="email" fullWidth label="Email" variant="outlined"
                onChange={(e)=>props.setTmpUser({
                    ...props.tmpUser,
                    email: e.target.value
                })}
                defaultValue={dataUser.email}
                />
                <TextField sx={{mb:"16px"}} id="password" fullWidth label="Password" variant="outlined"  
                onChange={(e)=>props.setTmpUser({
                    ...props.tmpUser,
                    password: e.target.value
                })}
                defaultValue={dataUser.password}
                />
                <Button variant="contained" fullWidth onClick={props.onEdit(indexUser,props.tmpUser)}>Submit</Button>
            </Box>
        </Box>
    )
}

export default Edit