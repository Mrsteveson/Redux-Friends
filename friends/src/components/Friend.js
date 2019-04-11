import React from 'react';

const Friend = props => {
    return (
        <div className = 'friendContainer'>
            <div className = 'friendDetails'>
                <h1>{props.friend.name}</h1>
                <p><span>ID: </span>{props.friend.id}</p>
                <p><span>Age: </span>{props.friend.age}</p>
                <p><span>Email: </span>{props.friend.email}</p>
            </div>
            <button onClick = {() => props.deleteFriend(props.friend.id)}>Delete</button>
        </div>
    )
}

export default Friend;