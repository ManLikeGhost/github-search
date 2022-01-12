import {
	FILTER_USERS,
	SET_LOADING,
	CLEAR_FILTERED_USERS,
	GET_SINGLE_USER,
	GET_USER_REPOS,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case FILTER_USERS:
			return {
				...state,
				users: action.payload,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};
