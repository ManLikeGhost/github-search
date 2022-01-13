import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GithubState from './context/github/GithubState';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import Filter from './components/users/Filter';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';

const App = () => {
	const [repos, setRepos] = useState([]);

	const [loading, setLoading] = useState(false);

	const [alert, setAlert] = useState(null);

	const getUserRepos = async (login) => {
		setLoading(true);

		const res = await axios.get(
			`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		setRepos(res.data);
		setLoading(false);
	};

	const showAlert = (msg, type) => {
		setAlert({ msg, type });
		setTimeout(() => setAlert(null), 5000);
	};

	// async componentDidMount() {
	// 	this.setState({ loading: true });

	// 	const res = await axios.get(
	// 		`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
	// 	);

	// 	this.setState({ users: res.data, loading: false });
	// }
	return (
		<GithubState>
			<Router>
				<div className='App'>
					<NavBar />
					<div className='container'>
						<Alert alert={alert} />
						<Switch>
							<Route
								exact
								path='/'
								render={(props) => (
									<Fragment>
										<Filter setAlert={showAlert} />
										<Users />
									</Fragment>
								)}
							/>
							<Route exact path='/about' component={About} />
							<Route
								exact
								path='/user/:login'
								render={(props) => (
									<User
										{...props}
										getUserRepos={getUserRepos}
										repos={repos}
										loading={loading}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		</GithubState>
	);
};

export default App;
