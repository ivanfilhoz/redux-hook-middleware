export const hooksMiddleware = ({ dispatch }) => next => action => {
  if (action && Array.isArray(action.hooks)) {
    const { hooks, ...raw } = action
    const result = next(raw)
    hooks.forEach(hook => dispatch(hook))
    return result
  } else {
    return next(action)
  }
}

export const hook = (action, ...hooks) => {
  const obj = { ...action }
  Object.defineProperty(obj, 'hooks', {
    value: hooks,
    configurable: true
  })
  return obj
}
