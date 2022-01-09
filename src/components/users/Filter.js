import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Filter extends Component {
	state = {
		text: '',
	};

	static propTypes = {
		filterUsers: PropTypes.func.isRequired,
		clearFilteredUsers: PropTypes.func.isRequired,
		setAlert: PropTypes.func.isRequired,
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.text === '') {
			this.props.setAlert('Insert text in the search bar', 'light');
		} else {
			this.props.filterUsers(this.state.text);
			this.setState({ text: '' });
		}
	};
	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit} action='' className='form'>
					<input
						name='text'
						type='text'
						placeholder='Search Github Users.....'
						value={this.state.text}
						onChange={this.onChange}
					/>
					<input
						type='submit'
						value='Search'
						className='btn btn-dark btn-block'
					/>
				</form>
				<button
					className='btn btn-light btn-block'
					onClick={this.props.clearFilteredUsers}
				>
					Clear
				</button>
			</div>
		);
	}
}

export default Filter;
