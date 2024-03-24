import {put, call, takeLatest} from 'redux-saga/effects';
import Api from '../../../services';
import * as actions from './reducer';
import types from './types';

function* watchGetInfoProfile(values) {
  const {payload} = values;
  yield put(actions.setIsLoadingGetInfoProfile(true));
  try {
    const response = yield call(Api.user.getInfoProfile, payload);
    const {data} = response;

    if (data.success) {
      yield put(actions.getInfoProfileSuccess(data));
    }
  } catch (e) {
    console.log(e);
  } finally {
    yield put(actions.setIsLoadingGetInfoProfile(false));
  }
}

function* watchCheckPassword(values) {
  const {payload} = values;

  yield put(actions.isLoadingcheckPasswordSuccess(true));
  try {
    const response = yield call(Api.user.checkPassword, payload);
    const {data} = response;
    yield put(actions.checkPasswordSuccess(data));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(actions.isLoadingcheckPasswordSuccess(false));
  }
}

function* watchVerificationEmailMethod(values) {
  const {payload} = values;

  yield put(actions.isLoadingVerificationEmailMethod(true));
  try {
    const response = yield call(Api.user.reqOtpEmailMethod, payload);
    const {data} = response;
    yield put(actions.verificationEmailMethodSuccess(data));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(actions.isLoadingVerificationEmailMethod(false));
  }
}

function* watchVerifyOtpCheckEmail(values) {
  const {payload} = values;

  yield put(actions.isLoadingVerifyOtpCheckEmail(true));
  try {
    const response = yield call(Api.user.verifyOtpCheckEmail, payload);
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

const sagas = [
  takeLatest(types.GET_INFO_PROFILE, watchGetInfoProfile),
  takeLatest(types.CHECK_PASSWORD, watchCheckPassword),
  takeLatest(types.VERIFICATION_EMAIL_METHOD, watchVerificationEmailMethod),
  takeLatest(types.VERIFY_OTP_CHECK_EMAIL, watchVerifyOtpCheckEmail),
];

export default sagas;
