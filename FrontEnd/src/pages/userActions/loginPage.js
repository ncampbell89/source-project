import React, { Component } from 'react'
// Material UI
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'
import Switch from '@material-ui/core/Switch'
// Components
import { Link } from 'react-router-dom'
import PopUp from '../global/components/PopUp'
// Redux
import { connect } from 'react-redux'
import { getUser, getSignInStatus } from './../../reducers/user.reducer'
import { signIn } from './../../actions/user.actions'
import SocialButton from './components/socialButton'

class LoginPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      persistence: true
    }
    this.handleChangeUser = this.handleChangeUser.bind(this)
    this.handleSocialLogin = this.handleSocialLogin.bind(this)
    this.handleSocialLoginFailure = this.handleSocialLoginFailure.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handlePersistence = this.handlePersistence.bind(this)
    this.submit = this.submit.bind(this)
    this.redirect = this.redirect.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleSocialLogin (user) {
    console.log(user)
    if(user) {
      this.setState({
        username: user._profile.name
      })
    }
    this.props.signIn(user)
  }

  handleSocialLoginFailure (err) {
    console.log(err)
  }

  handleChangeUser (e) {
    this.setState({ username: e.target.value })
  }

  handleChangePassword (e) {
    this.setState({ password: e.target.value })
  }

  handlePersistence (e) {
    this.setState({ persistence: e.target.checked })
  }

  submit () {
    this.props.dispatch(signIn(this.state))
  }

  redirect () {
    // Here we go back to the previous page after login unless the
    // previous location was the landing page
    if (this.props.location.state !== undefined || this.state.username !== undefined) {
      if (this.props.location.state.from === '/') {
        this.props.history.push(`${this.props.user.user._id}/profile`)
      } else {
        this.props.history.goBack()
      }
    } else {
      this.props.history.goBack()
    }
  }

  handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.submit()
    }
  }

  render () {
    console.log(this.props)
    console.log(this.state.username)
    if (this.props.signInStatus === 'SUCCESS' ||
    (this.props.user.token !== false && this.props.user.token !== undefined)) { this.redirect() }
    return (
      <div className='LoginPage'>
        <PopUp />
        <Typography variant='display3'>Login</Typography>
        {this.props.signInStatus === 'PENDING' && (
          <div className='Form'>
            <LinearProgress size={50} color='secondary' />
            <Typography variant='subtitle1'>Loading...</Typography>
          </div>
        )}
        {(this.props.signInStatus === false || this.props.signInStatus === 'ERROR') && (
          <div className='Form'>
            <TextField
              label='Username / Email'
              value={this.state.username}
              onChange={this.handleChangeUser}
              onKeyPress={(e) => { this.handleKeyPress(e) }}
              margin='normal'
              autoFocus
              variant='outlined'
            />
            <TextField
              label='Password'
              type='password'
              onChange={this.handleChangePassword}
              onKeyPress={(e) => { this.handleKeyPress(e) }}
              margin='normal'
              variant='outlined'
            />
            <div className='Flex JustifyCenter AlignCenter'>
              <Switch
                checked={this.state.persistence}
                onChange={this.handlePersistence}
                value='persistence'
                color='secondary'
              />
              <Typography variant='body1'>Keep me Logged In</Typography>
            </div>
            <Button variant='contained' color='primary' onKeyPress={(e) => { this.handleKeyPress(e) }} onClick={this.submit} className='SubmitButton' >Log In</Button>
            <SocialButton
              provider='facebook'
              appId='407539433452094'
              onLoginSuccess={this.handleSocialLogin}
              onLoginFailure={this.handleSocialLoginFailure}
              style={{
                backgroundColor: '#3578E5', 
                padding: '7px',
                textTransform: 'uppercase', 
                color: '#fff', borderRadius: '20px', 
                border: '0', marginTop: '10px',
                fontFamily: 'gotham_htfbook',
                letterSpacing: '2px',
                fontWeight: '500'
              }}
            >
              <i class="fab fa-facebook-square"></i> Log in
            </SocialButton>
            <Typography variant='caption' className='Recovery LinkUnderline' component={Link} to='/requestpassword'>Forgot password?</Typography>
            <Typography variant='caption' component={Link} to='/signUp' className='TextCenter LinkUnderline' >No account? Sign Up</Typography>

          </div>

        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
    signInStatus: getSignInStatus(state)
  }
}
export default connect(mapStateToProps, { signIn })(LoginPage)
