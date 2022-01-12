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

  // Get User

  // Get Repos

  // Clear Users

  // Set Loading


  return <GithubContext.Provider
    value={{
      users: state.users,
      user: state.user,
      repos: state.repos,
      loading: state.loading
    }}
  >
    {props.children}
  </GithubContext.Provider>
}

export default GithubState;



