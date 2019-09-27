import {
  configureStore,
  createAction,
  createReducer,
  getDefaultMiddleware
} from 'redux-starter-kit'
import { getUser } from './api'
import { hookMiddleware } from './hook'

// Action creators
const click = createAction('click')
const userLoading = createAction('user/loading')
const userSuccess = createAction('user/success')

// Actions
const fetchUser = dispatch => {
  dispatch(userLoading())
  return getUser().then(user => {
    dispatch(userSuccess(user))
  })
}

export const clickButton = {
  ...click(),
  hooks: [fetchUser]
}

// Reducer
const initialState = {
  clicked: 0,
  user: null,
  loading: false
}

const reducer = createReducer(initialState, {
  [click]: state => {
    state.clicked++
  },
  [userLoading]: state => {
    state.loading = true
  },
  [userSuccess]: (state, { payload: user }) => {
    state.loading = false
    state.user = user
  }
})

// Store
export const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), hookMiddleware]
})
