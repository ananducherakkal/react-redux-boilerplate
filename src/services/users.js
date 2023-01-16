import axios from 'axios'

export const getUsers = async () => {
  return await axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => ({ data: response.data?.map(user => user.name) }))
    .catch(error => ({ error }))
}