import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fromAuth } from 'store/selectors'

// https://reacttraining.com/react-router/web/example/auth-workflow
const PrivateRoute = ({ component: Component, ...attributes }) => (
  <Route
    {...attributes}
    render={props =>
      attributes.user && attributes.user.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.object,
  location: PropTypes.object
}

const mapStateToProps = state => ({
  user: fromAuth.getUser(state)
})

export default connect(mapStateToProps)(PrivateRoute)
