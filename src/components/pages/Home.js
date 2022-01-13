import React, { Fragment } from 'react';
import Users from '../users/Users';
import Filter from '../users/Filter';

const Home = () => {
	return (
		<Fragment>
			<Filter />
			<Users />
		</Fragment>
	);
};

export default Home;
