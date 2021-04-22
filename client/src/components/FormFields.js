import React from 'react'
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      "& label": {
        marginTop: -3, // fix the icon alignment issue
      }
    },
    label: {
        display: "inline-flex",
        alignItems: "center"
      },
    fields:{
        backgroundColor:"white",
    }
})
)
const FormFields = (props) => {
    const {name, type,label,value,handleInput, icon , ...rest} = props
    const classes = useStyles()
    // let getname, getvalue
    // const handleInput = (e) =>{
    //     console.log(e)
    //     getname = e.target.name
    //     getvalue = e.target.value
    // }
    return (
        <>
            <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                //required
                label={
                    <div className={classes.label}>
                    {icon}&nbsp;
                    <span>{label}*</span>
                    </div>
                }
                name={name}
                id={name}  
                
                type={type}
                multiline={type==="textarea"?true:false}
                rows={type==="textarea"?"5":"1"}
                {...rest}
                className={classes.fields}
                onChange={handleInput}
                value={value}
            />
        </>
    )
}

export default FormFields
