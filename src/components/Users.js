import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../store/user'
export default function Counter() {
  const { loading, users, error } = useSelector(state => state.user)
  const dispatch = useDispatch()

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
      margin: '20px auto',
    }}>
      <button onClick={() => { dispatch(fetchUser()) }}>
        Fetch Users
      </button>
      <br/>
      {
        loading
        ? <div>Loading...</div>
        : error
          ? <div>Could not fetch users</div>
          : <div>Users: {users}</div>
      }
    </div>
  )
}
