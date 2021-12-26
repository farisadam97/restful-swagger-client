import {CardItem} from "../../component/card.component";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home = (props) => {
    return(
        <Box sx={{
            width:'50vw',
            height:'100vh',
            mx:'auto'
            
        }}>
            <Typography variant='h2' component='div' align="center">
                List of all players
            </Typography>

            {
                props.user.map(data =>(
                    <CardItem key={data.id} data={data} id={data.id}/>
                ))
            }
        </Box>
        
    )
}

export default Home
