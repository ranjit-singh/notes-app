import React from 'react'
import { connect } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'
import { userActions } from '../../actions';

class NavBar extends React.Component{
	constructor(props) {
			super(props);
	}
	render() {
		const { loggedIn, dispatch, user } = this.props;
		return (
			<Navbar bg='dark' variant='dark'>
				<LinkContainer to='/login'>
					<Navbar.Brand>Notes</Navbar.Brand>
				</LinkContainer>
				<Navbar.Collapse className='justify-content-end'>
					{loggedIn ? (
						<Navbar.Text>
						<span className="display-name">{`Hi ${user && user.firstName}`}</span>
							<a href='/login' onClick={() => dispatch(userActions.logout())}>
								Logout
							</a>
						</Navbar.Text>
					) : (
						<LinkContainer to='/login'>
							<Nav.Link>Log In</Nav.Link>
						</LinkContainer>
					)}
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

function mapStateToProps(state) {
    const { user, loggedIn } = state.authentication;
    return {
        loggedIn,
				user
    };
}
const connectedNavBar = connect(mapStateToProps)(NavBar);
export { connectedNavBar as NavBar };
