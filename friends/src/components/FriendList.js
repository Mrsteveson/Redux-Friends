import React from 'react';
import Friend from './Friend';
import FriendForm from './FriendForm';

const FriendList = props => {
    return (
        <div className = 'listContainer'>
            <h1>My Homies</h1>
            <FriendForm/>
            <div>
                {props.friends.map(friend => (
                    <Friend 
                        friend = {friend}
                        key = {friend.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default FriendList;