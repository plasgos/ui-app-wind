import types from './types';

const initialState = {
  user: {
    data: {},
    loading: false,
  },
  checkPassword: {
    data: {},
    loading: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_INFO_PROFILE_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          data: action.payload,
        },
      };
    case types.IS_LOADING_GET_INFO_PROFILE:
      return {
        ...state,
        user: {
          ...state.user,
          loading: action.payload,
        },
      };
    case types.RESET_GET_INFO_PROFILE:
      return {...state, ...initialState.user};
    case types.CHECK_PASSWORD_SUCCESS:
      return {
        ...state,
        checkPassword: {
          ...state.checkPassword,
          data: action.payload,
        },
      };
    case types.IS_LOADING_CHECK_PASSWORD:
      return {
        ...state,
        checkPassword: {
          ...state.checkPassword,
          loading: action.payload,
        },
      };
    case types.RESET_CHECK_PASSWORD:
      return {...state, checkPassword: initialState.checkPassword};
    default:
      return state;
  }
};

export const getInfoProfile = payload => ({
  type: types.GET_INFO_PROFILE,
  payload,
});
export const getInfoProfileSuccess = payload => ({
  type: types.GET_INFO_PROFILE_SUCCESS,
  payload,
});
export const setIsLoadingGetInfoProfile = payload => ({
  type: types.IS_LOADING_GET_INFO_PROFILE,
  payload,
});
export const resetGetInfoProfile = payload => ({
  type: types.RESET_GET_INFO_PROFILE,
  payload,
});
export const checkPassword = payload => ({
  type: types.CHECK_PASSWORD,
  payload,
});
export const checkPasswordSuccess = payload => ({
  type: types.CHECK_PASSWORD_SUCCESS,
  payload,
});
export const isLoadingcheckPasswordSuccess = payload => ({
  type: types.IS_LOADING_CHECK_PASSWORD,
  payload,
});
export const resetCheckPassword = payload => ({
  type: types.RESET_CHECK_PASSWORD,
  payload,
});
