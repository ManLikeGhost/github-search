import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
	const githubContext = useContext(GithubContext);

	const { user, getSingleUser, loading, getUserRepos, repos,  } = githubContext;

	useEffect(() => {
		getSingleUser(match.params.login);
		getUserRepos(match.params.login);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
	} = user;

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
			<div className='card text-center'>
				<div className='badge badge-primary'>Followers: {followers}</div>
				<div className='badge badge-success'>following: {following}</div>
				<div className='badge badge-light'>Public Repos: {public_repos}</div>
				<div className='badge badge-dark'>Public Gists: {public_gists}</div>
			</div>
			<Repos repos={repos} />
		</Fragment>
	);
};

export default User;
