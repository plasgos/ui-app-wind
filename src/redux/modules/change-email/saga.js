import {put, call, takeLatest} from 'redux-saga/effects';
import Api from '../../../services';
import * as actions from './reducer';
import types from './types';

function* watchCheckPassword(values) {
  const {payload} = values;

  yield put(actions.isLoadingcheckPasswordSuccessChangeEmail(true));
  try {
    const response = yield call(Api.user.checkPassword, payload);
    const {data} = response;
    yield put(actions.checkPasswordSuccessChangeEmail(data));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(actions.isLoadingcheckPasswordSuccessChangeEmail(false));
  }
}

function* watchVerificationEmailMethod(values) {
  const {payload} = values;

  yield put(actions.isLoadingVerificationEmailMethod(true));
  try {
    const response = yield call(Api.changeEmail.reqOtpEmailMethod, payload);
    const {data} = response;
    yield put(actions.verificationEmailMethodSuccess(data));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(actions.isLoadingVerificationEmailMethod(false));
  }
}

function* watchVerificationEmailMethodByPhoneNumber(values) {
  const {payload} = values;

  yield put(actions.isLoadingVerificationPhoneNumberMethod(true));
  try {
    const response = yield call(
      Api.changeEmail.reqOtpEmailByPhoneNumber,
      payload,
    );
    const {data} = response;
    yield put(actions.verificationPhoneNumberMethodSuccess(data));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(actions.isLoadingVerificationPhoneNumberMethod(false));
  }
}

function* watchVerifyOtpCheckEmail(values) {
  const {payload} = values;

  yield put(actions.isLoadingVerifyOtpCheckEmail(true));
  try {
    const response = yield call(Api.changeEmail.verifyOtpCheckEmail, payload);
    const {data} = response;
    yield put(actions.verifyOtpCheckEMailSuccess(data));
  } catch (e) {
    if (e.response) {
      const response = e.response.data.message;
      yield put(actions.setMessageErrorVerifyOtpCheckEmail(response));
    }
  } finally {
    yield put(actions.isLoadingVerifyOtpCheckEmail(false));
  }
}

function* watchChangeNewEmail(values) {
  const {payload} = values;

  yield put(actions.isLoadingchangeNewEmail(true));
  try {
    const response = yield call(Api.changeEmail.changeNewEmail, payload);
    const {data} = response;
    yield put(actions.changeNewEmailSuccess(data));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(actions.isLoadingchangeNewEmail(false));
  }
}

const sagas = [
  takeLatest(types.CHECK_PASSWORD_CHANGE_EMAIL, watchCheckPassword),
  takeLatest(types.VERIFICATION_EMAIL_METHOD, watchVerificationEmailMethod),
  takeLatest(
    types.VERIFICATION_PHONE_NUMBER_METHOD,
    watchVerificationEmailMethodByPhoneNumber,
  ),
  takeLatest(types.VERIFY_OTP_CHECK_EMAIL, watchVerifyOtpCheckEmail),
  takeLatest(types.CHANGE_NEW_EMAIL, watchChangeNewEmail),
];

export default sagas;