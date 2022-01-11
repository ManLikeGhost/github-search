import React, { useState } from 'react';
import PropTypes from 'prop-types';
const Filter = ({ filterUsers, clearFilteredUsers, setAlert }) => {
	const [text, setText] = useState('')

	const onSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			setAlert('Insert text in the search bar', 'light');
		} else {
			filterUsers(text);
			setText('');
		}
	};

	const onChange = (e) => {
		setText(e.target.value);
	};
	return (
		<div>
			<form onSubmit={onSubmit} action='' className='form'>
				<input
					name='text'
					type='text'
					placeholder='Search Github Users.....'
					value={text}
					onChange={onChange}
				/>
				<input
					type='submit'
					value='Search'
					className='btn btn-dark btn-block'
				/>
			</form>
			<button
				className='btn btn-light btn-block'
				onClick={clearFilteredUsers}
			>
				Clear
			</button>
		</div>
	);
};

Filter.propTypes = {
	filterUsers: PropTypes.func.isRequired,
	clearFilteredUsers: PropTypes.func.isRequired,
	setAlert: PropTypes.func.isRequired,
};

export default Filter;
