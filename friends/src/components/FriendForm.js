import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: '',
        }
    }

    handleChange = event => {
        this.setState ({
            [event.target.name]: event.target.value
        })
    }

    handleAddFriend = event => {
        // event.preventDefault();
        let friend = { ...this.state }
        this.props.addFriend(friend);
        this.setState({
            name: '',
            age: '',
            email: ''
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type = 'text'
                        name = 'name'
                        placeholder = 'Name'
                        onChange = {this.handleChange}
                        value = {this.state.name}
                    />

                    <input 
                        type = 'text'
                        name = 'age'
                        placeholder = 'Age'
                        onChange = {this.handleChange}
                        value = {this.state.age}
                    />

                    <input 
                        type = 'text'
                        name = 'email'
                        placeholder = 'Email'
                        onChange = {this.handleChange}
                        value = {this.state.email}
                    />
                </form>
                <button onClick = {() => this.handleAddFriend()}>Add Friend</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        addingFriends: state.addingFriends
    }; 
};

export default connect(mapStateToProps, { addFriend }) (FriendForm);