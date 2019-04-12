import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ 
    component: FriendList,
    friends, 
    deleteFriend,
    gettingFriends, 
    ...rest 
    }) => {
    return (
        <Route 
            {...rest}
            render = {props => {
                if(localStorage.getItem('token')) {
                    return <FriendList {...props} friends = {friends} deleteFriend = {deleteFriend} gettingFriends = {gettingFriends} />
                } else {
                    return <Redirect to = '/login' />
                }
            }}
        />
    )
}

export default ProtectedRoute;