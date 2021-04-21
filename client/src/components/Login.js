import React, { useState } from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    Checkbox,
    FormControlLabel,
    // Link,
    Paper,
    Grid,
    Typography
} from '@material-ui/core'


//Form Icon
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

import {NavLink, useHistory} from 'react-router-dom'
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



const Login = () => {
  const classes = useStyles();
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const formFields = [
    {
      name:"email",
      label:"Email Address",
      type:"email",
      icon:<EmailIcon />,
      value:email
    },
    {
      name:"password",
      label:"Password",
      type:"password",
      icon:<LockIcon />,
      value:password
    }
  ]

  const LoginUser = async (e) => {
    e.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        email, password
      })
    }

    const res = await fetch('/signin', requestOptions)
    console.log(res)
    const data = res.json()
    console.log(data)
    if( res.status === 400 || !data){
      console.log("Invalid Credentials")
      window.alert("Invalid Credentials")
      
      
    }else{
      // setError("Invalid Registeration")
      console.log("Login Successfully")
      window.alert("Login Successfully")
      
      history.push("/")
      
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
            Sign in
          </Typography>
          <form className={classes.form} method="POST">
            {
              formFields.map(formField => {
                return(
                  <FormFields
                    key={formField.name} 
                    name={formField.name}
                    type={formField.type}
                    label={formField.label}
                    icon={formField.icon}
                    value={formField.value}
                    handleInput={(e) => {
                      formField.name==='email'? setEmail(e.target.value) : setPassword(e.target.value)
                    }}
                  />
                )
              })
            }
            
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={LoginUser}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink to="#" variant="body2">
                  Forgot password?
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
            {/* <Box mt={5}>
              <Copyright />
            </Box> */}
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login