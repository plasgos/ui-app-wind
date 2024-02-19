import types from "./types";

const initialState = {
  check: {
    loading: false,
    data: {},
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHECK_REGISTER_SUCCESS:
      return {
        ...state,
        check: {
          ...state.check,
          data: action.payload,
        },
      };
    case types.IS_LOADING_CHECK_REGISTER:
      return {
        ...state,
        check: {
          ...state.check,
          loading: action.payload,
        },
      };
    case types.RESET_CHECK_REGISTER:
      return {
        ...state,
        check: initialState.check,
      };
    default:
      return state;
  }
};

export const getCheckEmail = (payload) => ({
  type: types.CHECK_EMAIL,
  payload,
});
export const getCheckPhoneNumber = (payload) => ({
  type: types.CHECK_PHONE_NUMBER,
  payload,
});
export const getCheckRegisterSuccess = (payload) => ({
  type: types.CHECK_REGISTER_SUCCESS,
  payload,
});
export const isLoadingCheckRegister = (payload) => ({
  type: types.IS_LOADING_CHECK_REGISTER,
  payload,
});
export const resetCheckRegister = (payload) => ({
  type: types.RESET_CHECK_REGISTER,
  payload,
});
