import {call,put, takeEvery} from 'redux-saga/effects';
import {setToken,LOGIN} from '../actions/auth';
import { apiPost} from '../helpers/api';

export default function* watchAuth() {
  yield takeEvery(LOGIN, login);
}

function* login(action) {
  try {
    const {data} = yield(call(apiPost,'/auth/login',{userName:action.userName,password:action.password}));
    yield put(setToken(data.token));
    localStorage.setItem('token', data.token);
  } catch (err) {
  }
}