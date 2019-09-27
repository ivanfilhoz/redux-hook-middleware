export const hookMiddleware = ({ dispatch }) => next => action => {
  if (action && Array.isArray(action.hooks)) {
    action.hooks.forEach(hook => dispatch(hook))
  }

  return next(action)
}
