import * as React from 'react'
import { connect } from 'react-redux'
import { clickButton } from './redux'

const mapStateToProps = state => ({
  clicked: state.clicked,
  user: state.user,
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  clickButton: () => dispatch(clickButton)
})

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ clicked, user, loading, clickButton }) => {
  return (
    <>
      <button onClick={clickButton}>Fetch user</button>
      <hr />
      <pre>{JSON.stringify({ clicked, loading, user })}</pre>
    </>
  )
})
