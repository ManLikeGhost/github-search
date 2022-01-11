import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component {
	componentDidMount() {
    this.props.getSingleUser( this.props.match.params.login );
    this.props.getUserRepos( this.props.match.params.login );
	}

	static propTypes = {
		loading: PropTypes.bool,
		user: PropTypes.object.isRequired,
    getSingleUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
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
			following,
			public_repos,
			public_gists,
			hireable,
			location,
			company,
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
					<div>
						<ul>
							<li>
								{login && (
									<Fragment>
										<strong>Username: </strong>
										{login}
									</Fragment>
								)}
							</li>
							<li>
								{blog && (
									<Fragment>
										<strong>Website: </strong>
										{blog}
									</Fragment>
								)}
							</li>
							<li>
								{company && (
									<Fragment>
										<strong>Company: </strong>
										{company}
									</Fragment>
								)}
							</li>
						</ul>
						{bio && (
							<Fragment>
								<h3>Bio</h3>
								<p>{bio}</p>
							</Fragment>
						)}
						<a href={html_url} className='btn btn-dark my-1'>
							Link to Github
						</a>
					</div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">
              Followers: {followers}
          </div>
          <div className="badge badge-success">
              following: {following}
          </div>
          <div className="badge badge-light">
              Public Repos: {public_repos}
          </div>
          <div className="badge badge-dark">
              Public Gists: {public_gists}
          </div>
        </div>
			</Fragment>
		);
	}
}

export default User;
