import React from 'react';
import Friend from './Friend';
import FriendForm from './FriendForm';
import Loader from 'react-loader-spinner';

const FriendList = props => {
    return ( 
        <div className = 'listContainer'>
            <h1>Add A Friend</h1>
            <FriendForm/>
            <h1>{props.gettingFriends ?
                (<Loader type="Ball-Triangle" color="#FF00FF" height={80} width={80} />)
                : ('These Are My Friends')}
            </h1>
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

