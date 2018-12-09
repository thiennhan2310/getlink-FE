import {put, takeEvery} from 'redux-saga/effects';
import {setToken,LOGIN} from '../actions/auth';

export default function* watchAuth() {
  yield takeEvery(LOGIN, login);
}

function* login(action) {
  try {
    const token = 1;
    yield put(setToken(token));
    localStorage.setItem('token', token);
  } catch (err) {
  }
}