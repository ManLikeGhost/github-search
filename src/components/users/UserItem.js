import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
	return (
		<div className='card text-center'>
			<img
				src={avatar_url}
				alt=''
				className='round-img'
				style={{ width: '60px' }}
			/>
			<h3>{login}</h3>
			<ul>
				<li>
					<Link to={`/user/${login}`}>more</Link>
				</li>
				<li>
					<a
						className='btn btn-dark btn-sm my-1'
						href={html_url}
						target='_blank'
						rel='noopener noreferrer'
					>
						Link to github
					</a>
				</li>
			</ul>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserItem;
