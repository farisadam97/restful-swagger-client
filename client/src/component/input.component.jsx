import TextField from '@mui/material/TextField';

export const inputField = (props) => {
    let onChangeInput;
    if(props.onChange){
        onChangeInput = props.onChange
    } else {
        onChangeInput = false
    }
    return(
        <TextField sx={{mb:"16px"}} 
                id={`${props.idInput}`} fullWidth 
                label={`${props.labelInput}`} variant="outlined"
                onChange={onChangeInput}
                value={props.valueInput}
                />
    )
}