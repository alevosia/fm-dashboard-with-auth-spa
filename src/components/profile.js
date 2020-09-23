import React from 'react'
import { Link } from 'gatsby'
import { useIdentityContext } from 'react-netlify-identity'

const Profile = ({ showModal }) => {
	const identity = useIdentityContext()
	const isLoggedIn = identity && identity.isLoggedIn

	const name =
		isLoggedIn &&
		identity &&
		identity.user &&
		identity.user.user_metadata &&
		identity.user.user_metadata.full_name

	return (
		<div className="dashboard-header">
			<nav>
				<Link to="/dashboard/secret" activeClassName="active">
					Secret Stuff
				</Link>
				<Link to="/dashboard/base" activeClassName="active">
					See Your Base
				</Link>
			</nav>
			<span>
				{isLoggedIn ? (
					<>
						{name}{' '}
						<button onClick={() => showModal(true)}>Log Out</button>
					</>
				) : (
					<button onClick={() => showModal(true)}>Log In</button>
				)}
			</span>
		</div>
	)
}

export default Profile
