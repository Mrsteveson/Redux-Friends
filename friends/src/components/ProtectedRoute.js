import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: FriendList, friends, ...rest }) => {
    return (
        <Route 
            {...rest}
            render = {props => {
                if(localStorage.getItem('token')) {
                    return <FriendList {...props} friends = {friends} />
                } else {
                    return <Redirect to = '/login' />
                }
            }}
        />
    )
}

const mapStateToProps = ({ errorStatusCode }) => ({
    errorStatusCode
});

export default connect(mapStateToProps, {}) (ProtectedRoute);