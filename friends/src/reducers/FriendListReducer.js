import { FETCHING, FETCHING_SUCCESS, FETCHING_FAILURE } from '../actions';

const initialState = {
    friends: [],
    fetchingFriends: false,
    savingFriends: false,
    deletingFriend: false,
    updatingFriend: false,
    error: null,
}

export const friendsListReducer = ( state = initialState, action ) => {
    switch(action.type) {
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