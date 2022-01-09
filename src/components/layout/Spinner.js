import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
	<Fragment>
		<img src={spinner} alt='Loading...' style={useSpinnerStyles} />
	</Fragment>;
};

const useSpinnerStyles = {
	width: '200px',
	margin: 'auto',
	display: 'block',
};

export default Spinner;
