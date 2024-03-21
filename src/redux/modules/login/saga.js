import {put, call, takeLatest} from 'redux-saga/effects';
import Api from '../../../services';
import * as actions from './reducer';
import types from './types';
import {AsyncStorage} from '@react-native-async-storage/async-storage';

function* watchGetLogin(values) {
  const {payload} = values;
  console.log('🚀 ~ function*watchGetLogin ~ payload:', payload);
  yield put(actions.setIsLoadingLogin(true));
  try {
    let result = {
      user: {},
      token: '',
      logged_in: false,
    };
    const response = yield call(Api.login.account, payload);
    const {data} = response;
    console.log('🚀 ~ function*watchGetLogin ~ data:', data);
    if (data.success) {
      console.log('first');
      result.user = data;
      result.token = data.token;
      result.logged_in = true;
      yield put(actions.getLoginSuccess(result));
    }
  } catch (e) {
    if (e.response) {
      const response = e.response;
      yield put(actions.setMessageLogin(response.data.message));
    }
  } finally {
    yield put(actions.setIsLoadingLogin(false));
  }
}

const sagas = [takeLatest(types.LOGIN, watchGetLogin)];

export default sagas;
