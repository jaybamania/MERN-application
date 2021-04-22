import React, { useEffect, useState } from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    // Checkbox,
    // FormControlLabel,
    // Link,
    Paper,
    Grid,
    Typography
} from '@material-ui/core'

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import FormControl from '@material-ui/core/FormControl';


//Form Icon
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

// import {NavLink} from 'react-router-dom'
import FormFields from './FormFields';


// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor:theme.palette.grey[50] 
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  margin: {
    margin: theme.spacing(2),
  },
}));



const Contact = () => {
  const classes = useStyles()
  const [userData, setUserData] = useState({name:"", email:"",phone:"",message:""});

  const formFields = [
    {
      name:"name",
      label:"Name",
      type:"text",
      icon:<PersonIcon />,
      value: userData.name,
      labelwidth:40
    },
    {
      name:"email",
      label:"Email Address",
      type:"email",
      icon:<EmailIcon />,
      value: userData.email,
      labelwidth:100
    },
    {
      name:"phone",
      label:"Phone No.",
      type:"text",
      icon:<PhoneIcon />,
      value: userData.phone,
      labelwidth:70
    },
    {
      name:"message",
      label:"Description",
      type:"textarea",
      icon:"",
      value: userData.message,
    }
  ]

  const callContactPage = async () =>{
    try{
      const res = await fetch('/data',{
        method:"GET",
        headers:{
         
          "Content-Type":"application/json"
        },
      })

      const data = await res.json()
      console.log(data)
      setUserData({...userData , name:data.name, email:data.email, phone:data.phone})
      
      if(!res.status === 200){
        const error = new Error(res.error)
        throw error
      }
    }
    catch(err){
       console.log(err)
    }
}

useEffect(() => {
  callContactPage()
  
}, [])

const handleInput = (e)=>{
  const name = e.target.name
  const value = e.target.value

  setUserData({...userData,[name]:value})
}

const ContactForm = async (e) =>{
  e.preventDefault()

  const {name, email, phone, message} = userData

  const res = await fetch('/contact',{
    method:"POST",
    headers : {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      name,email,phone, message
    })
  })
  const data = await res.json()

  if(!data){
    console.log("message not send")
  }else{
    alert("Message Send")
    setUserData({...userData, message:""})
  }
}

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PhoneIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Contact Us
          </Typography>
          <form className={classes.form} method="POST">
            {
              formFields.map(formField => {
                return(
                  <>
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                    {formField.type==="textarea"? <FormFields 
                        name={formField.name}
                        type={formField.type}
                        label={formField.label}
                        icon={formField.icon}
                        value={formField.value}
                        handleInput={handleInput}
                        key={formField.name}
                      /> : <>
                        <InputLabel htmlFor="outlined-adornment-amount">{formField.label}</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-amount"
                          name={formField.name}
                          value={formField.value}
                          onChange={handleInput}
                          startAdornment={<InputAdornment position="start">{formField.icon}</InputAdornment>}
                          labelWidth={formField.labelwidth}

                        /> 
                      </>}
                  </FormControl>
                  <br/>
                  </>
                )
              })
            }
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={ContactForm}
            >
              Send
            </Button>
            {/* <Box mt={5}>
              <Copyright />
            </Box> */}
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Contact
