import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: FriendList, friends, deleteFriend, ...rest }) => {
    return (
        <Route 
            {...rest}
            render = {props => {
                if(localStorage.getItem('token')) {
                    return <FriendList {...props} friends = {friends} deleteFriend = {deleteFriend} />
                } else {
                    return <Redirect to = '/login' />
                }
            }}
        />
    )
}

// const mapStateToProps = ({ errorStatusCode }) => ({
//     errorStatusCode
// });

export default ProtectedRoute;