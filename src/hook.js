export const hooksMiddleware = ({ dispatch }) => next => action => {
  if (action && Array.isArray(action.hooks)) {
    action.hooks.forEach(hook => dispatch(hook))
  }

  return next(action)
}

export const hook = (action, ...hooks) => {
  const obj = { ...action }
  Object.defineProperty(obj, 'hooks', {
    value: hooks,
    configurable: true
  })
  return obj
}
