import { fork, all } from 'redux-saga/effects';
import { userSaga } from './user/saga';

export default function* saga() {
    yield all([
        fork(userSaga),
    ]);
}
