export const getUser = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: 'John Doe',
        age: 22
      })
    }, 1000)
  })
