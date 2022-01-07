import React, { Component } from 'react';

export class UserItem extends Component {
	render() {
		const { avatar_url, profile, html_url } = this.props.user;
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
	}
}

export default UserItem;
