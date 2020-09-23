import React from 'react'
import { navigate } from 'gatsby'
import { useIdentityContext } from 'react-netlify-identity'

const PrivateRoute = ({ component: Component, location, ...otherProps }) => {
	const identity = useIdentityContext()
	const isLoggedIn = identity && identity.isLoggedIn

	if (!isLoggedIn && location.pathname !== '/dashboard/login') {
		navigate('/dashboard/login', { replace: true })
		return null
	}

	return <Component {...otherProps} />
}

export default PrivateRoute
