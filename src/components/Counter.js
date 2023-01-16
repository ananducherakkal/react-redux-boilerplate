import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter, decrementCounter } from '../store/rootActions'

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
      <button onClick={() => { dispatch(incrementCounter())}}>
        Increment
      </button>
      <br/>
      <button onClick={() => { dispatch(decrementCounter())}}>
        Decrement
      </button>
      <br/>
      <div>
        { counter }
      </div>
    </div>
  )
}
