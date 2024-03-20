import types from './types';

const initialState = {
  user: {},
  token: '',
  logged_in: false,
  isLoadingLogin: false,
  isLoadingLogout: false,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        logged_in: action.payload.logged_in,
      };
    case types.IS_LOADING_LOGIN:
      return {...state, isLoadingLogin: action.payload};
    case types.LOGOUT_SUCCESS:
      return {...state, ...initialState};
    case types.IS_LOADING_LOGOUT:
      return {...state, isLoadingLogout: action.payload};
    case types.SET_MESSAGE_LOGIN:
      return {...state, message: action.payload};
    case types.RESET_LOGIN:
      return initialState;
    default:
      return state;
  }
};

export const getLogin = payload => ({
  type: types.LOGIN,
  payload,
});
export const getLoginSuccess = payload => ({
  type: types.LOGIN_SUCCESS,
  payload,
});
export const setIsLoadingLogin = payload => ({
  type: types.IS_LOADING_LOGIN,
  payload,
});
export const setMessageLogin = payload => ({
  type: types.SET_MESSAGE_LOGIN,
  payload,
});

export const getLogout = payload => ({
  type: types.LOGOUT,
  payload,
});
export const getLogoutSuccess = payload => ({
  type: types.LOGOUT_SUCCESS,
  payload,
});
export const setIsLoadingLogout = payload => ({
  type: types.IS_LOADING_LOGOUT,
  payload,
});

export const resetLogin = payload => ({
  type: types.RESET_LOGIN,
});
