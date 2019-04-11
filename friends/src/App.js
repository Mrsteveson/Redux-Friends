import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchingFriends, } from './actions';
import FriendList from './components/FriendList';
// import FriendForm from './components/FriendForm';
import LoginForm from './components/LoginForm';
import ProtectedRoute from './components/ProtectedRoute';
 

class App extends React.Component {

  componentDidMount() {
    this.props.fetchingFriends();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>Redux My Friends</h1>
            <Link to = '/'>Home</Link>
            <Link to = '/login'>Login</Link>
            <Link to = '/protected'>Protected</Link>
          </header>
          <div>
            <Route 
              path = '/login' 
              component = {LoginForm} 
            />
            <ProtectedRoute exact path = '/protected' 
              component = {FriendList}
              friends = {this.props.friends}
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
    error: friendListReducer.error
  }
}

export default connect(mapStateToProps, { fetchingFriends }) (App);
