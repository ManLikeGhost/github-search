import React from 'react';
import PropTypes from 'prop-types'
const UserItem = ( {user: {avatar_url, profile, html_url}} ) => {
	return (
		<div className='card text-center'>
			<img
				src={avatar_url}
				alt=''
				className='round-img'
				style={{ width: '60px' }}
			/>
			<h3>{profile}</h3>
			<a className='btn btn-dark btn-sm my-1' href={html_url}>
				Link
			</a>
		</div>
	);
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem;
