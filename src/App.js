import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import Filter from './components/users/Filter';
import axios from 'axios';
import Alert from './components/layout/Alert';
import About from './components/pages/About'
import './App.css';
class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null,
	};

	async componentDidMount() {
		this.setState({ loading: true });

		const res = await axios.get(
			`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		this.setState({ users: res.data, loading: false });
	}

	filterUsers = async (text) => {
		this.setState({ loading: true });

		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		this.setState({ users: res.data.items, loading: false });
	};

	clearFilteredUsers = () => {
		this.setState({ users: [], loading: false });
	};

	setAlert = (msg, type) => {
		this.setState({
			alert: {
				msg,
				type,
			},
		});
		setTimeout(() => this.setState({ alert: null }), 5000);
	};

	render() {
		return (
			<Router>
				<div className='App'>
					<NavBar />
					<div className='container'>
						<Alert alert={this.state.alert} />
						<Switch>
							<Route
								exact
								path='/'
								render={props => (
									<Fragment>
										<Filter
											filterUsers={this.filterUsers}
											clearFilteredUsers={this.clearFilteredUsers}
											setAlert={this.setAlert}
										/>
										<Users
											loading={this.state.loading}
											users={this.state.users}
										/>
									</Fragment>
								)}
							/>
							<Route exact path='/about' component={About}/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
