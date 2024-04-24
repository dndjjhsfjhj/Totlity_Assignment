import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
      this.setState({username: event.target.value})
  }

  onChangePassword = event => {
      this.setState({password: event.target.value})
    
  }

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/home')
  }


  submitForm = async event => {
    event.preventDefault()
    
      this.onSubmitSuccess()

  }

  onClickSkip = async () => {
      this.onSubmitSuccess()
  
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
          required
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
          required
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state

    return (
      <div className="login-form-container">
        
        <form className="form-container" onSubmit={this.submitForm}>
          <h1 className='login'>Login</h1>
          <p>Username:<strong>test</strong></p>
          <p>Password:<strong>test</strong></p>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          <button
            type="button"
            className="login-button"
            onClick={this.onClickSkip}
          >
            Without Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm