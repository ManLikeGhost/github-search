import React, { Component } from 'react';

export class Filter extends Component {
	state = {
		text: '',
	};

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = ( e ) => {
    e.preventDefault();
    this.props.filterUsers( this.state.text );
    this.setState({ text: '' })
  }
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
			</div>
		);
	}
}

export default Filter;
