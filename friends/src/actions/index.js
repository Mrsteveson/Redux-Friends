import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const fetchingFriends = () => dispatch => {
    dispatch({ type: FETCHING });
    axios
        .get('http://localhost:5000/api/friends')
        .then(response => {
            console.log(response.data);
            dispatch({ type: FETCHING_SUCCESS, payload: response.data.results});
        })
        .catch(err => {
            dispatch({ type: FETCHING_FAILURE, payload: err });
        })
};