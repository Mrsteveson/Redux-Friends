import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, FETCHING, FETCHING_SUCCESS, FETCHING_FAILURE } from '../actions';

const initialState = {
    friends: [],
    gettingFriends: false,
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
                gettingFriends: false,
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
                gettingFriends: true,
            }
        case FETCHING_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                gettingFriends: false,
                error: null,
            }
        case FETCHING_FAILURE:
            return {
                ...state,
                gettingFriends: false,
                error: action.payload,
            }
        default:
            return state;
    }
}