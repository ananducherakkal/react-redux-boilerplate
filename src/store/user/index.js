import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  users: [],
  error: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUser: (state) => {
      state.loading = true
    },
    fetchUserSuccess: (state, { payload }) => {
      state.loading = false
      state.users = payload
      state.error = null
    },
    fetchUserError: (state, { payload }) => {
      state.loading = false
      state.users = []
      state.error = payload
    },
  },
})

export const { fetchUser, fetchUserSuccess, fetchUserError } = userSlice.actions

export default userSlice.reducer