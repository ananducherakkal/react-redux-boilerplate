import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_USERS } from './types'
import { fetchUsersSuccess, fetchUsersError } from './actions'
import { getUsers } from '../../services/users'

function* fetchUsersFun () {
  const { error, data } = yield call(getUsers)
  if (error) yield put(fetchUsersError(error))
  else yield put(fetchUsersSuccess(data))
}

function* saga() {
  yield takeEvery(FETCH_USERS, fetchUsersFun)
}

export default saga