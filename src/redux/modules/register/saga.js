import {put, call, takeLatest} from 'redux-saga/effects';
import Api from '../../../services';
import types from './types';
import * as actions from './reducer';

function* watchCheckEmail(value) {
  yield put(actions.isLoadingCheckRegister(true));
  const {payload} = value;
  try {
    const response = yield call(Api.checkRegister.email, payload);
    const {data} = response;
    if (data.success) {
      yield put(actions.getCheckRegisterSuccess(data));
    }
  } catch (e) {
    yield put(actions.isLoadingCheckRegister(false));
  } finally {
    yield put(actions.isLoadingCheckRegister(false));
  }
}

function* watchCheckPhoneNumber(value) {
  yield put(actions.isLoadingCheckRegister(true));
  const {payload} = value;
  try {
    const response = yield call(Api.checkRegister.phoneNumber, payload);
    const {data} = response;
    if (data.success) {
      yield put(actions.getCheckRegisterSuccess(data));
    }
  } catch (e) {
    yield put(actions.isLoadingCheckRegister(false));
  } finally {
    yield put(actions.isLoadingCheckRegister(false));
  }
}

function* watchRequestOtpEmail(value) {
  yield put(actions.isLoadingRequestOtp(true));
  const {payload} = value;
  try {
    const response = yield call(Api.checkRegister.requestOtpEmail, payload);
    const {data} = response;
    if (data.success) {
      yield put(actions.getRequestOtpEmailSuccess(data));
    }
  } catch (e) {
    yield put(actions.isLoadingRequestOtp(false));
  } finally {
    yield put(actions.isLoadingRequestOtp(false));
  }
}

function* watchRequestOtpPhoneNumber(value) {
  yield put(actions.isLoadingRequestOtp(true));
  const {payload} = value;
  try {
    const response = yield call(
      Api.checkRegister.requestOtpPhoneNumber,
      payload,
    );
    const {data} = response;
    if (data.success) {
      yield put(actions.getRequestOtpPhoneNUmberSuccess(data));
    }
  } catch (e) {
    yield put(actions.isLoadingRequestOtp(false));
  } finally {
    yield put(actions.isLoadingRequestOtp(false));
  }
}

function* watchVerifyOtp(value) {
  yield put(actions.isLoadingVerifyOtp(true));
  const {payload} = value;
  try {
    const response = yield call(Api.checkRegister.verifyOtp, payload);
    const {data} = response;
    if (data.success) {
      yield put(actions.getVerifyOtpSuccess(data));
    }
  } catch (e) {
    if (e.response.data) {
      yield put(actions.getVerifyOtpSuccess(e.response.data));
    }
    yield put(actions.isLoadingVerifyOtp(false));
  } finally {
    yield put(actions.isLoadingVerifyOtp(false));
  }
}

function* watchRegister(value) {
  yield put(actions.isLoadingRegister(true));
  const {payload} = value;
  try {
    const response = yield call(Api.checkRegister.register, payload);
    const {data} = response;
    if (data.success) {
      yield put(actions.registerSuccess(data));
    }
  } catch (e) {
    yield put(actions.isLoadingRegister(false));
  } finally {
    yield put(actions.isLoadingRegister(false));
  }
}

const sagas = [
  takeLatest(types.CHECK_EMAIL, watchCheckEmail),
  takeLatest(types.CHECK_PHONE_NUMBER, watchCheckPhoneNumber),
  takeLatest(types.REQUEST_OTP_EMAIL, watchRequestOtpEmail),
  takeLatest(types.REQUEST_OTP_PHONE_NUMBER, watchRequestOtpPhoneNumber),
  takeLatest(types.VERIFY_OTP, watchVerifyOtp),
  takeLatest(types.REGISTER, watchRegister),
];

export default sagas;
