import axios from 'axios';
import axiosWithAuth from '../utils/axiosAuth';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_START';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
    dispatch ({ type: LOGIN })
    return axios
        .post('http://localhost:5000/api/login', creds)
        .then( response => {
            localStorage.setItem('token', response.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: response.data.payload });
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err })
        })
}

export const FETCHING = 'FETCHING';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const fetchingFriends = () => dispatch => {
    dispatch({ type: FETCHING });
    axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(response => {
            console.log(response.data);
            dispatch({ type: FETCHING_SUCCESS, payload: response.data});
        })
        .catch(err => {
            dispatch({ type: FETCHING_FAILURE, payload: err });
        })
};

export const addFriend = friend => dispatch => {
    dispatch({ type: FETCHING });
    axiosWithAuth()
        .post('http://localhost:5000/api/friends', friend)
        .then(response => {
            console.log(response.data);
            dispatch({ type: FETCHING_SUCCESS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: FETCHING_FAILURE, payload: err })
        })
}

// update the .post url here
export const updateFriend = friend => dispatch => {
    dispatch({ type: FETCHING });
    axiosWithAuth()
        // .post('http://localhost:5000/api/friends', friend)
        .then(response => {
            console.log(response.data);
            dispatch({ type: FETCHING_SUCCESS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: FETCHING_FAILURE, payload: err })
        })
}

export const deleteFriend = id => dispatch => {
    dispatch({ type: FETCHING });
    axiosWithAuth()
        .delete(`http://localhost:5000/api/friends/${id}`)
        .then(response => {
            console.log(response.data);
            dispatch({ type: FETCHING_SUCCESS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: FETCHING_FAILURE, payload: err })
        })
}