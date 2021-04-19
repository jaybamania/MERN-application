import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
//Form Icons
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import WorkIcon from '@material-ui/icons/Work';
import LockIcon from '@material-ui/icons/Lock';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {NavLink, useHistory} from 'react-router-dom'

import FormFields from './FormFields';
// import SnackBars from './SnackBars'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
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
}));

// async componentDidMount() {
//   // POST request using axios with async/await
//   const article = { title: 'React POST Request Example' };
//   const response = await axios.post('https://reqres.in/api/articles', article);
//   this.setState({ articleId: response.data.id });
// }

const SignUp = () => {
  const classes = useStyles();
  const history = useHistory()
  // const [error, setError] = useState("")
  const [user, setUser] = useState({
    name:"",
    email:"",
    phone:"",
    work:"",
    password:"",
    cpassword:""
  })

  const formFields = [
    {
      name:"name",
      label:"Name",
      type:"text",
      icon:<PersonIcon />,
      value: user.name
    },
    {
      name:"email",
      label:"Email Address",
      type:"email",
      icon:<EmailIcon />,
      value: user.email
    },
    {
      name:"phone",
      label:"Phone No.",
      type:"text",
      icon:<PhoneIcon />,
      value: user.phone
    },
    {
      name:"work",
      label:"Work",
      type:"text",
      icon:<WorkIcon />,
      value: user.work
    },
    {
      name:"password",
      label:"Password",
      type:"password",
      icon:<LockIcon />,
      value: user.password
    },
    {
      name:"cpassword",
      label:"Confirm Password",
      type:"password",
      icon:<LockIcon />,
      value: user.cpassword
    }
  ]

  let getname, getvalue
  const handleInput = (e) =>{
    console.log(e.target)
    getname = e.target.name
    getvalue = e.target.value

    setUser({...user, [getname]:getvalue})
}


const PostData = async (e) =>{
    e.preventDefault()
    const {name, email, phone, work, password, cpassword} = user
    console.log(user)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
  };
  console.log(requestOptions.body)
  // fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
  //     .then(response => response.json())
  //     .then(data => setPostId(data.id));

    const res = await fetch("/register",requestOptions)
    
    const data = await res.json()
    console.log(data)
    if(data.status === 201 || (!data.error && data.message === 'User Registered Successfully') ){
      console.log("Registeration Successfull")
      window.alert("Registeration Successfull")
      
      history.push("/login")
      
    }else{
      // setError("Invalid Registeration")
      console.log("Invalid Registeration")
      window.alert("Invalid Registeration")
      
    }
}

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} id="register-form" method="POST">
            {
              formFields.map(formField => {
                return(
                  <FormFields
                    key={formField.name}
                    name={formField.name}
                    label={formField.label}
                    type={formField.type}
                    icon={formField.icon}
                    value={formField.value}
                    handleInput={handleInput}
                  />
                )
              })
            }
            
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Readed Privacy"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={PostData}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink to="#" variant="body2">
                  Forgot password?
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/login" variant="body2">
                  {"Already have an account? Sign In"}
                </NavLink>
              </Grid>
            </Grid>
            {/* <Box mt={5}>
              <Copyright />
            </Box> */}
            {/* <SnackBars 
              error={error}
              opens={true}
            /> */}
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default SignUp