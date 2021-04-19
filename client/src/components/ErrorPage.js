import React from 'react'
import {NavLink} from 'react-router-dom'

const ErrorPage = () => {
    return (
		<div className="wrap">
			
				<div className="header">
					<div className="logo">
						<h1><NavLink to="/home">Ohh</NavLink></h1>
					</div>
				</div>
			<div className="content">
				<img src="images/error-img.png" title="error" alt="Not loading ..." />
				<p><span><label>O</label>hh.....</span>You Requested the page that is no longer There.</p>
				<NavLink to="/home">Back To Home</NavLink>
   			</div>
			
		</div>
    )
}

export default ErrorPage
