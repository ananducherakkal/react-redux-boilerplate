import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "./types"

export const fetchUsers = () => {
  return {
    type: FETCH_USERS
  }
}
export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: { users }
  }
}
export const fetchUsersError = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: { error }
  }
}