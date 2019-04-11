import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { login } from '../actions';

class LoginForm extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  login = event => {
    event.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push('/protected');
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              'Log in'
            )}
          </button>
        </form>
        {this.props.error && <p className="error">{this.props.error}</p>}
      </div>
    );
  }
}

const mapStateToProps = ({ loggingIn, error }) => ({
    error,
    loggingIn
  });
  
  export default connect(
    mapStateToProps,
    { login }
  )(LoginForm);
  