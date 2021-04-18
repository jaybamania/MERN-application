import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Paper,
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
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    // <div className="  my-3">
    //     <div className="mx-auto col-md-6 col-sm-12">
    //         <div className={classes.root} >
    //             <Paper elevation={3} >
    //                 <div className="row">
    //                     <div className="col-12 col-lg-4 ">
    //                         <div className="my-2 h-75">
    //                             <img src="https://pbs.twimg.com/profile_banners/1187404980988198914/1601635305" className="w-75 h-100 t-20"  />
    //                         </div>
    //                     </div>
    //                 </div> 
    //             </Paper>
    //         </div>
    //     </div>
    // </div>
    <div className="card m-auto my-2 t-3 p-4 col-12  col-lg-6 offset-lg-1 shadow" >
    <div className="row justify-center">
        <div className="col-12 col-lg-4">
            <img className="img-thumbnail  shadow" src="https://pbs.twimg.com/profile_banners/1187404980988198914/1601635305"  alt="Card image cap" />
        </div>
        <div className="col-12 col-lg-8 ">
        <div className="card-body  ">
            <div className="row my-3">
                <div className="col-lg-8 col-10">
                    <h4 >Jaykumar Bamania</h4>
                    <p style={{color:'cyan', fontSize:"100%"}}>web Developer</p>
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
            <p className="card-text">Bamania Jaykumar Hitendra</p>
            <p className="card-text">jaykumardiu@gmail.com</p>
            <p className="card-text">942322109</p>
            <p className="card-text">Web Developer</p>
            <p className="card-text">Pursuing B.E. in Computer Engineering at LD College of Engineering</p>
            </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <TimeLine />
        </TabPanel>
      </SwipeableViews>
    </div>
            </div>
            {/*  */}
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    </div>
    
  </div>
    
    // <div className="m-5">
    //   <h5 className="mb-3">Add Bootstrap in React - <a href="https://cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h5>
    //   <div className="card" style={{ width: '25rem' }}>
    //     
    //     <div className="card-body">
    //       <h5 className="card-title">Clue Mediator</h5>
    //       <p className="card-text">Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
    //       <a href="https://cluemediator.com" target="_blank" className="btn btn-dark" rel="noopener noreferrer">Visit Website</a>
    //     </div>
    //   </div>
    // </div>
  );
}

export default About
