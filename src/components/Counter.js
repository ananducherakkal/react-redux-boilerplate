import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../store/counter'

export default function Counter() {
  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
      margin: '20px auto',
    }}>
      <button onClick={() => { dispatch(increment())}}>
        Increment
      </button>
      <br/>
      <button onClick={() => { dispatch(decrement())}}>
        Decrement
      </button>
      <br/>
      <div>
        { counter }
      </div>
    </div>
  )
}
