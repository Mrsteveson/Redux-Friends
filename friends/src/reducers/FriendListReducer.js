import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, FETCHING, FETCHING_SUCCESS, FETCHING_FAILURE } from '../actions';

const initialState = {
    friends: [],
    fetchingFriends: false,
    addingFriends: false,
    deletingFriend: false,
    updatingFriend: false,
    loggingIn: false,
    error: null,
}

export const friendListReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                loggingIn: true,
                fetchingFriends: false,
                error: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                error: null,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                error: action.payload
            }

        case FETCHING:
            return {
                ...state,
                fetchingFriends: true,
            }
        case FETCHING_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                fetchingFriends: false,
                error: null,
            }
        case FETCHING_FAILURE:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload,
            }
        default:
            return state;
    }
}