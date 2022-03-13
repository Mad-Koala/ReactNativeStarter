import {userLogin} from 'api/auth/loginApi';
import {put, takeLatest} from 'redux-saga/effects';
import * as TYPES from 'actions/actionTypes';

function* loginUser({payload}) {
  try {
    const response = yield userLogin(payload);
    yield put({type: TYPES.LOGIN_SUCCESS, response});
  } catch (error) {
    yield put({type: TYPES.LOGIN_FAILURE, error: error.message});
  }
}

function* loginScreenSaga() {
  yield takeLatest(TYPES.LOGIN_REQUEST, loginUser);
}

export {loginScreenSaga};
