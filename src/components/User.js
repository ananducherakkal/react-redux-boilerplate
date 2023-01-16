import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../store/rootActions'

export default function User() {
  const { users, loading, error } = useSelector(state => state.user)
  const dispatch = useDispatch()

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
      margin: '20px auto',
    }}>
      <button onClick={() => { dispatch(fetchUsers()) }}>
        Fetch Users
      </button>
      <br/>
      {
        loading
        ? <div>Loading...</div>
        : error
          ? <div>Could not fetch data</div>
          :<div>Users: {users}</div>
      }
    </div>
  )
}
