import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    DELETE_USER,

} from './actionTypes'
import axios from 'axios'

const url = 'http://localhost:3030/users';
export const fetchUsers = () => {
    let fetchData = {
        method: 'GET'
    }
    return (dispatch) => {

        dispatch(fetchUsersRequest())
        fetch(url, fetchData)
            .then(response => response.json()).then(data => {

                const users = data
                console.log(users)
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {

                dispatch(fetchUsersFailure(error.message))
            })
    }
}

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const deleteUser = (id) => {
    const userId = id.id;
    fetch('http://localhost:3030/users/' + userId, {
        method: 'DELETE'
    })
        .then(response => response.json()).then(data => {
            const users = data
            // console.log(users,'abcd')
            return {
                type: DELETE_USER,
                payload: users,
                userId
            }

        })
}


export const addUser = (newUser) => {
    return (dispatch) => {
        axios({
            url: `http://localhost:3030/users/`,
            method: 'POST',
            data: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response)

    }
}
export const updateUser = ( id,editData) => {
    return (dispatch) => {
        axios({
            url: `http://localhost:3030/users/${id}`,
            method: 'PUT',
            data: editData,

        })
            .then(response => response)
    }
}