import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "./types"

const initalState = {
  loading: false,
  users: [],
  error: null
}

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_USERS: return {
      ...state,
      loading: true
    }
    case FETCH_USERS_SUCCESS: return {
      ...state,
      users: action.payload?.users || [],
      error: null,
      loading: false
    }
    case FETCH_USERS_ERROR: return {
      ...state,
      users: [],
      error: action.payload?.error,
      loading: false
    }
    default: return state
  }
}

export default userReducer