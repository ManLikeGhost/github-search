import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component {
	componentDidMount() {
		this.props.getSingleUser(this.props.match.params.login);
	}

	static propTypes = {
		loading: PropTypes.bool,
		user: PropTypes.object.isRequired,
		getSingleUser: PropTypes.func.isRequired,
	};

	render() {
		const {
			name,
			avatar_url,
			bio,
			blog,
			login,
			html_url,
			followers,
			followering,
			public_repos,
			public_gists,
			hireable,
			location,
		} = this.props.user;

		const { loading } = this.props;

		if (loading) {
			return <Spinner />;
		}
		return (
			<Fragment>
				<Link to='/' className='btn btn-light'>
					Back To Github-Search
				</Link>
				Hireable:{' '}
				{hireable ? (
					<i className='fas fa-check text-success' />
				) : (
					<i className='fas fa-times-circle text-danger' />
				)}
				<div className='card grid-2'>
					<div className='all-center'>
						<img
							src={avatar_url}
							className='round-img'
							style={{ width: '150px' }}
							alt=''
						/>
						<h1>{name}</h1>
						{location ? <p>Location: {location}</p> : ' '}
					</div>
					<div></div>
				</div>
			</Fragment>
		);
	}
}

export default User;
