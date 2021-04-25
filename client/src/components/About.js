import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    // Paper,
    Tabs,
    Tab,
    Box,
    Typography,
    AppBar,
} from '@material-ui/core';
import {
    Rating
} from '@material-ui/lab';
import 'bootstrap/dist/css/bootstrap.min.css';

import TimeLine from './TimeLine'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      
      width: theme.spacing(100),
      height: theme.spacing(50),
    },
    justifyContent:"center",
    alignItems:"center",
  },
  tabpanel: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

//Tabs and Tab Panel
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  


const About = () => {
  const classes = useStyles();
  const history = useHistory()
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [userData, setUserData] = useState({});
  // const [timelines, setTimeLines] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const callAboutPage = async () =>{
      try{
        const res = await fetch('/about',{
          method:"GET",
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          credentials:"include"
        })

        const data = await res.json()
        console.log(data)
        setUserData(data)
        
        if(!res.status === 200){
          const error = new Error(res.error)
          throw error
        }
      }
      catch(err){
         console.log(err)
         history.push('/login')
      }
  }

  useEffect(() => {
    callAboutPage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="card m-auto my-2 t-3 p-4 col-12  col-lg-6 offset-lg-1" >
    <div className="row justify-center">
      <form method="GET">
        <div className="col-12 col-lg-4">
            <img className="img-thumbnail  shadow" src="https://pbs.twimg.com/profile_banners/1187404980988198914/1601635305"  alt="Card cap" />
        </div>
        <div className="col-12 col-lg-8 ">
        <div className="card-body  ">
            <div className="row my-3">
                <div className="col-lg-8 col-10">
                    <h4 >{userData.name}</h4>
                    <p style={{color:'cyan', fontSize:"100%"}}>{userData.work}</p>
                    <h6>Rankings: <Rating name="read-only" value={5} readOnly /></h6>
                </div>
                <div className="col-lg-4 col-2 ">
                    <button>Edit Profile</button>
                </div>
            </div>
            <div className="row ">
            <div className={classes.tabpanel}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          style={{backgroundColor:"white"}}
        >
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Timeline" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <div className="row py-3">
            <div className="col-5 col-lg-5">
                 <h5 className="card-title">Name : </h5>
                 <h5 className="card-title">Email : </h5>
                 <h5 className="card-title">Phone No. : </h5>
                 <h5 className="card-title">Profession : </h5>
                 <h5 className="card-title">Description : </h5>
            </div>
            <div className="col-7 col-lg-7">
            <p className="card-text">{userData.name}</p>
            <p className="card-text">{userData.email}</p>
            <p className="card-text">{userData.phone}</p>
            <p className="card-text">{userData.work}</p>
            <p className="card-text">Pursuing B.E. in Computer Engineering at LD College of Engineering</p>
            </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <TimeLine 
            // timeline={timelines}
          />
        </TabPanel>
      </SwipeableViews>
    </div>
            </div>
        
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        </form>
    </div>
    
  </div>

  );
}

export default About
