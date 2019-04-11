import React from 'react';
import Friend from './Friend';
import FriendForm from './FriendForm';
// import Loader from 'react-loader-spinner';

const FriendList = props => {
    return (
        <div className = 'listContainer'>
            <h1>Add A Friend</h1>
            <FriendForm/>
            <h1>My Friends...</h1>
            {/* {props.fetchingFriends ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              'My Friends'
            )} */}
            <div>
                {props.friends.map(friend => (
                    <Friend 
                        friend = {friend}
                        key = {friend.id}
                        deleteFriend = {props.deleteFriend}
                    />
                ))}
            </div>
        </div>
    )
}

export default FriendList;