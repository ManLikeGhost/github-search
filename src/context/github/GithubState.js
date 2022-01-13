import React, { useReducer } from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import { 
  FILTER_USERS,
  SET_LOADING,
  CLEAR_FILTERED_USERS,
  GET_SINGLE_USER,
  GET_USER_REPOS
} from '../types'


const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [ state, dispatch ] = useReducer( GithubReducer, initialState );

  // Filter users
  const filterUsers = async (text) => {
		setLoading();

		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
    
    dispatch({
      type: FILTER_USERS,
      payload: res.data.items
    })
  };
  
  // Get User
  const getSingleUser = async (login) => {
		setLoading();

		const res = await axios.get(
			`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
    
    dispatch({
      type: GET_SINGLE_USER,
      payload: res.data
    })
	};
  // Get Repos
  const getUserRepos = async (login) => {
		setLoading();

		const res = await axios.get(
			`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
    
    dispatch( {
      type: GET_USER_REPOS,
      payload: res.data
    })
	};

  // Clear Users
  const clearFilteredUsers = () => dispatch( {
    type: CLEAR_FILTERED_USERS
  })

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING }) 

  return <GithubContext.Provider
    value={{
      users: state.users,
      user: state.user,
      repos: state.repos,
      loading: state.loading,
      filterUsers,
      clearFilteredUsers,
      getSingleUser,
      getUserRepos
    }}
  >
    {props.children}
  </GithubContext.Provider>
}

export default GithubState;



