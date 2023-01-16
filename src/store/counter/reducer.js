import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./types"

const initalState = {
  counter: 0
}

const cakeReducer = (state = initalState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER: return {
      ...state,
      counter: state.counter + (action.payload?.size || 1)
    }
    case DECREMENT_COUNTER: return {
      ...state,
      counter: state.counter - (action.payload?.size || 1)
    }
    default: return state
  }
}

export default cakeReducer