import { put, call, takeLatest } from "redux-saga/effects";
import Api from "../../../services";
import types from "./types";
import * as actions from "./reducer";

function* watchCheckEmail(value) {
  yield put(actions.isLoadingCheckRegister(true));
  const { payload } = value;
  try {
    const response = yield call(Api.checkRegister.email, payload);
    const { data } = response;
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
  const { payload } = value;
  try {
    const response = yield call(Api.checkRegister.phoneNumber, payload);
    const { data } = response;
    if (data.success) {
      yield put(actions.getCheckRegisterSuccess(data));
    }
  } catch (e) {
    yield put(actions.isLoadingCheckRegister(false));
  } finally {
    yield put(actions.isLoadingCheckRegister(false));
  }
}

const sagas = [
  takeLatest(types.CHECK_EMAIL, watchCheckEmail),
  takeLatest(types.CHECK_PHONE_NUMBER, watchCheckPhoneNumber),
];

export default sagas;
