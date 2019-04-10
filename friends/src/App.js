import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { fetchFriendsList, } from './actions';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
 

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    this.props.fetchFriendsList();
  }

  render() {
    return (
      <div className="App">
        <h1>Redux My Friends</h1>
        <FriendForm />
        <FriendList 
          friends = {this.props.friends}
        />
      </div>
    );
  }
}

function mapStateToProps({ friendListReducer }) {
  return {
    friends: friendListReducer.friends,
    fetching: friendListReducer.fetching,
    error: friendListReducer.error
  }
}

export default connect(mapStateToProps, { fetchFriendsList }) (App);
