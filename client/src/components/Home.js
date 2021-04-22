import React, { useEffect, useState } from 'react'
// import {
//     Grid,
// } from '@material-ui/core'

// import { makeStyles } from '@material-ui/core/styles';



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
    const [userData, setUserData] = useState({name:"", work:""});
    const callHomePage = async () =>{
        try{
          const res = await fetch('/data',{
            method:"GET",
            headers:{
             
              "Content-Type":"application/json"
            },
          })
    
          const data = await res.json()
          
          setUserData({...userData , name:data.name, work:data.work})
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
      callHomePage()
      
    }, [])
    return (
        <div  >
            {/* <Grid container xs={12} sm={12} md={12} className={classes.image} /> */}
            {/* <img className="d-block w-100 "  height="100%" src="https://source.unsplash.com/random" alt="First slide" /> */}
            <div style={{backgroundColor:"#f0f0f0", height:"90vh", width:"100%",clipPath: "polygon(50% 0%,50% 100%,0% 100%,0% 0%)"}}>
            
            </div>
            <div className="carousel-caption  d-md-block text-dark 0"  >
                {
                   userData.name===""?
                   <>
                        <h3>Welcome to Web Development</h3>
                        <p>We are using MERN Technolgies to create a web application</p>
                   </> : <>
                        <h3>{userData.name},<small>{userData.work}</small></h3>
                        <p>Glad to see you back!</p>
                    </> 
                }
            </div>
            
        </div>
    )
}

export default Home
