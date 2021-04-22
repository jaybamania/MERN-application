import React, { createContext, useReducer } from 'react'
import {Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ErrorPage from './components/ErrorPage';
import Logout from './components/Logout'

import {initialState, rootReducer as reducer} from "../src/reducers/rootReducer"

export const UserContext = createContext()

const Routing = () =>{
  return (
    <Switch>
  <Route exact path="/" component ={Home} />

  <Route path="/about" component ={AboutUs} />

  <Route path="/contact" component ={Contact} />

  <Route path="/login" component ={Login} />

  <Route path="/signup" component ={SignUp} />

  <Route path="/logout" component ={Logout} />

  <Route  component ={ErrorPage} />
  </Switch>
  )
}

const App = () => {
  // 1. contextAPI

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
   <>
   <UserContext.Provider value={{state,dispatch}}>
    <Navbar />
    
    <Routing />
    </UserContext.Provider>
   </>
  )
}

export default App
