import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../../services/auth';

import { Container, AreaButton } from './styles';

export default function Header() {
	const history = useHistory();

	function handleLogout() {
		logout();
		history.push('/');
	}

	return (
		<Container>
			<header>
				<Link to='/tasks' className='logo'>
					Task<span>List</span>
				</Link>

				<AreaButton>
					<button type='button'>
						<Link to='/tasks/profile'>
							<FontAwesomeIcon icon={faUser} className='icon' size='2x' />
						</Link>
					</button>

					<button type='button' onClick={handleLogout}>
						<FontAwesomeIcon icon={faSignOutAlt} className='icon' size='2x' />
					</button>
				</AreaButton>
			</header>
		</Container>
	);
}
