import {all} from 'redux-saga/effects';
import checkRegister from '../redux/modules/register/saga';
import login from '../redux/modules/login/saga';
import user from '../redux/modules/user/saga';
import changeEmail from '../redux/modules/change-email/saga';
import changePhoneNumber from '../redux/modules/change-phone-number/saga';

export default function* rootSaga() {
  yield all([
    ...checkRegister,
    ...login,
    ...user,
    ...changeEmail,
    ...changePhoneNumber,
  ]);
}
