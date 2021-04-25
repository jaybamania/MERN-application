import React, { useContext, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../App'

const Logout = () => {

    const history = useHistory()

    const {dispatch} = useContext(UserContext)

    useEffect(()=>{
        
        fetch('/logout',{
            method:"GET",
            headers:{
               
                "Content-Type" : "application/json"
            },
            // body:{
            //     state
            // }
            
        }).then((res)=>{

            dispatch({type:"USER",payload:false})
            history.push('/login',{ replace:true})
            if(res.status !== 200){
                const error = new Error(res.error)
                throw error
            }
        }).catch((error)=>{
            console.log(error)
        })
    })
    return (
        <>
            <h1>Logout....</h1>
        </>
    )
}

export default Logout
