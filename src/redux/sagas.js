import {all} from 'redux-saga/effects';
import checkRegister from '../redux/modules/register/saga';
import login from '../redux/modules/login/saga';

export default function* rootSaga() {
  yield all([...checkRegister, ...login]);
}
