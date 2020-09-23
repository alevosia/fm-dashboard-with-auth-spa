import React from 'react'
import { useIdentityContext } from 'react-netlify-identity'
import { navigate } from 'gatsby'

const RouteLogin = ({ showModal }) => {
	const identity = useIdentityContext()

	if (identity && identity.isLoggedIn) {
		navigate('/dashboard/secret', { replace: true })
		return null
	}

	return (
		<>
			<h1>Log In or Sign Up</h1>
			<button onClick={() => showModal(true)}>Log In</button>
		</>
	)
}

export default RouteLogin
