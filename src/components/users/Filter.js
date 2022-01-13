import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext'
import AlertContex from '../../context/alert/alertContext'
const Filter = () => {
	const githubContext = useContext( GithubContext );
	
	const alertContext = useContext(AlertContex)

	
	const [ text, setText ] = useState( '' )

	const onSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			alertContext.setAlert('Insert text in the search bar', 'light');
		} else {
			githubContext.filterUsers(text);
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
				onClick={githubContext.clearFilteredUsers}
			>
				Clear
			</button>
		</div>
	);
};



export default Filter;
