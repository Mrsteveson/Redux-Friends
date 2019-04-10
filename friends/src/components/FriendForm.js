import React from 'react';

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
                <button>Add Friend</button>
            </div>
        )
    }
}
export default FriendForm;