import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const SignedInLinks = (props) => {
  const {user} = props
  return (
      <ul className="right">
        <li><NavLink to='/create'>Create Project</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating blue lighten-1">{user.initial}</NavLink></li>
      </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'users' }
  ])
)(SignedInLinks)
