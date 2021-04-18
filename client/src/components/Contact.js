import React from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    Checkbox,
    FormControlLabel,
    Link,
    Paper,
    Grid,
    Typography
} from '@material-ui/core'


//Form Icon
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

import {NavLink} from 'react-router-dom'
import FormFields from './FormFields';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
}));

const formFields = [
  {
    name:"name",
    label:"Name",
    type:"text",
    icon:<PersonIcon />
  },
  {
    name:"email",
    label:"Email Address",
    type:"email",
    icon:<EmailIcon />
  },
  {
    name:"phone",
    label:"Phone No.",
    type:"text",
    icon:<PhoneIcon />
  },
  {
    name:"description",
    label:"Description",
    type:"textarea",
    icon:""
  }
]

const Login = () => {
  const classes = useStyles();

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
          <form className={classes.form} noValidate>
            {
              formFields.map(formField => {
                return(
                  <FormFields 
                    name={formField.name}
                    type={formField.type}
                    label={formField.label}
                    icon={formField.icon}
                  />
                )
              })
            }
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
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

export default Login

          {/* <TextField
              variant="outlined"
              margin="normal"
              // required
              fullWidth
              id="email"
              label={
                <div className={classes.label}>
                  <EmailIcon />&nbsp;
                  <span>Email Address*</span>
                </div>
              }
              name="email"
              // autoComplete="email"
              // autoFocus
            /> */}
            {/* <TextField
              variant="outlined"
              margin="normal"
              // required
              fullWidth
              name="password"
              label={
                <div className={classes.label}>
                  <LockIcon />&nbsp;
                  <span>Password*</span>
                </div>
              }
              type="password"
              id="password"
              autoComplete="current-password"
            /> */}