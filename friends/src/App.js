import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchingFriends, deleteFriend } from './actions';

import FriendList from './components/FriendList';
import LoginForm from './components/LoginForm';
import ProtectedRoute from './components/ProtectedRoute';
 

class App extends React.Component {
  state = {
    updateFriend: {}
  }

  componentDidMount() {
    this.props.fetchingFriends();
  }

  startUpdate = object => {
    this.setState({
      updateFriend: object
    })
  }

  updateFriend = object => {
    this.props.updateFriend(object);
    this.setState({
      updateFriend: {}
    })
  }

  handleLogout = () => {
    this.setState({
      loggedIn: false,
    })
    localStorage.clear();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>Redux Friends List</h1>
            <Link to = '/'>Home</Link>
            <Link to = '/login'>Login</Link>
            <Link to = '/protected'>Protected</Link>
          </header>
          <button onClick = {this.handleLogout}>Logout</button>
          <div>
            <Route 
              path = '/login' 
              component = {LoginForm} 
            />
            <ProtectedRoute exact path = '/protected' 
              component = {FriendList}
              friends = {this.props.friends}
              deleteFriend = {this.props.deleteFriend}
              startUpdate = {this.startUpdate}
              gettingFriends = {this.props.gettingFriends}
            />
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ friendListReducer }) {
  return {
    friends: friendListReducer.friends,
    fetching: friendListReducer.fetching,
    error: friendListReducer.error,
    gettingFriends: friendListReducer.gettingFriends
  }
}

export default connect(mapStateToProps, { fetchingFriends, deleteFriend }) (App);
