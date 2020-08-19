import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    DELETE_USER,
   
  } from '../actions/actionTypes'
  
  const initialState = {
    loading: false,
    users: [],
    error: ''
  }
  
  const users = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_USERS_SUCCESS:
        return {
          loading: false,
          users: action.payload,
          error: ''
        }
      case FETCH_USERS_FAILURE:
        return {
          loading: false,
          users: [],
          error: action.payload
        }
    case DELETE_USER:
        return users.filter((id)=>id !== action.id)
     
        
      default: return state
    }
  }
  
  export default users;