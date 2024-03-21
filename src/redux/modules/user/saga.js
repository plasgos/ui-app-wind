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

const sagas = [takeLatest(types.GET_INFO_PROFILE, watchGetInfoProfile)];

export default sagas;
