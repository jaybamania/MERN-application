import React from 'react'
import {
    Grid,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';



// const useStyles = makeStyles((theme) => ({
//     root: {
//         height: '100vh',
//       },
//     image: {
//       backgroundImage: 'url(https://source.unsplash.com/random)',
//       backgroundRepeat: 'no-repeat',
//       backgroundColor:
//         theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//     },
//   }));

const Home = () => {
    // const classes = useStyles()
    return (
        <div >
            {/* <Grid container xs={12} sm={12} md={12} className={classes.image} /> */}
            <img class="d-block w-100 "  height="100%" src="https://source.unsplash.com/random" alt="First slide" />
            <div class="carousel-caption  d-md-block">
                <h3>Welcome to Web Development</h3>
                <p>We are using MERN Technolgies to create a web application</p>
            </div>
        </div>
    )
}

export default Home
