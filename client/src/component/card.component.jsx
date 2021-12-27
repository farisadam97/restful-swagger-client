import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'



export const CardItem = (props) => {
    return(
        <Card sx={{ minWidth: 275,mb:2,borderRadius: 5}}>
            <CardContent>
                <Typography variant="h5" component="div" sx={{mb:2}}>
                    {props.data.username}
                </Typography>
                <Typography variant="body1" sx={{mb:1}}>
                    Email : {props.data.email}
                </Typography>
                <Typography variant="body1" sx={{mb:1}}>
                    Password : {props.data.password}
                </Typography>
            </CardContent>
            <Link to={`/edit/${props.data.id}`} style={{  textDecoration: 'none'}}>
                <CardActions>
                    <Button size="small">
                        Edit
                    </Button>                    
                </CardActions>
            </Link>
        </Card>
    )
}