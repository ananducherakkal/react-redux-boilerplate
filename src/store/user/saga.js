
import { getUsers } from '../../services/user';
import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUser, fetchUserError, fetchUserSuccess } from '.';

export function* userSagaWorker() {
  const { data, error } = yield call(getUsers)
  if (error) yield put(fetchUserError(error))
  else yield put(fetchUserSuccess(data))
}

export function* userSaga() {
  yield takeEvery(fetchUser().type, userSagaWorker);
}
