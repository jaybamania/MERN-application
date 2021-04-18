import React from 'react'
import {Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ErrorPage from './components/ErrorPage';




const App = () => {
  return (
   <>
    <Navbar />
    <Switch>
    <Route exact path="/" component ={Home} />

    <Route path="/about" component ={AboutUs} />

    <Route path="/contact" component ={Contact} />

    <Route path="/login" component ={Login} />

    <Route path="/signup" component ={SignUp} />

    <Route  component ={ErrorPage} />
    </Switch>
   </>
  )
}

export default App
