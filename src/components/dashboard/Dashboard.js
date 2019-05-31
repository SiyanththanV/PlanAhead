import React, { Component } from 'react'
import ProjectList from '../project/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    const { projects, auth, notifs } = this.props;
    if (!auth.uid) {
      return <Redirect to='/signin'/>
    }
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifs={notifs}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifs: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'notifications', orderBy: ['time', 'desc'] },
    { collection: 'projects', orderBy: ['createdAt', 'desc'] }, 
  ])
)(Dashboard)
