import React from 'react'
import { Link } from 'gatsby'
import { IdentityContextProvider } from 'react-netlify-identity'
import './layout.css'

const netlifyURL = 'https://fm-dashboard-with-auth-spa.netlify.app/'

const Layout = ({ children }) => (
	<IdentityContextProvider url={netlifyURL}>
		<header>
			<Link to="/">JAMStack App</Link>
		</header>
		<main>{children}</main>
	</IdentityContextProvider>
)

export default Layout
