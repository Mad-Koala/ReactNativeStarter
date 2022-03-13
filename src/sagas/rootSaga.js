import {all} from 'redux-saga/effects';
import {loginScreenSaga} from 'sagas/authSaga';

function* rootSaga() {
  yield all([loginScreenSaga()]);
}

export default rootSaga;
