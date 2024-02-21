import types from "./types";

const initialState = {
  check: {
    loading: false,
    data: {},
  },
  otp: {
    loading: false,
    data: {
      email: {},
      phoneNumber: {},
    },
  },
  verifyOtp: {
    loading: false,
    data: {},
  },
  register: {
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
    case types.REQUEST_OTP_EMAIL_SUCCESS:
      return {
        ...state,
        otp: {
          ...state.otp,
          data: {
            ...state.otp.data,
            email: action.payload,
          },
        },
      };
    case types.REQUEST_OTP_PHONE_NUMBER_SUCCESS:
      return {
        ...state,
        otp: {
          ...state.otp,
          data: {
            ...state.otp.data,
            phoneNumber: action.payload,
          },
        },
      };
    case types.RESET_OTP:
      return {
        ...state,
        otp: initialState.otp,
      };
    case types.IS_LOADING_REQUEST_OTP:
      return {
        ...state,
        otp: {
          ...state.otp,
          loading: action.payload,
        },
      };
    case types.VERIFY_OTP_SUCCESS:
      return {
        ...state,
        verifyOtp: {
          ...state.verifyOtp,
          data: action.payload,
        },
      };
    case types.RESET_VERIFY_OTP:
      return {
        ...state,
        verifyOtp: initialState.verifyOtp,
      };
    case types.IS_LOADING_VERIFY_OTP:
      return {
        ...state,
        verifyOtp: {
          ...state.verifyOtp,
          loading: action.payload,
        },
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          data: action.payload,
        },
      };
    case types.IS_LOADING_REGISTER:
      return {
        ...state,
        register: {
          ...state.register,
          loading: action.payload,
        },
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
export const requestOtpEmail = (payload) => ({
  type: types.REQUEST_OTP_EMAIL,
  payload,
});
export const requestOtpPhoneNumber = (payload) => ({
  type: types.REQUEST_OTP_PHONE_NUMBER,
  payload,
});
export const getRequestOtpEmailSuccess = (payload) => ({
  type: types.REQUEST_OTP_EMAIL_SUCCESS,
  payload,
});
export const getRequestOtpPhoneNUmberSuccess = (payload) => ({
  type: types.REQUEST_OTP_PHONE_NUMBER_SUCCESS,
  payload,
});
export const resetOtp = (payload) => ({
  type: types.RESET_OTP,
  payload,
});
export const isLoadingRequestOtp = (payload) => ({
  type: types.IS_LOADING_REQUEST_OTP,
  payload,
});
export const setVerifyOtp = (payload) => ({
  type: types.VERIFY_OTP,
  payload,
});
export const getVerifyOtpSuccess = (payload) => ({
  type: types.VERIFY_OTP_SUCCESS,
  payload,
});
export const resetVerifyOtp = (payload) => ({
  type: types.RESET_VERIFY_OTP,
  payload,
});
export const isLoadingVerifyOtp = (payload) => ({
  type: types.IS_LOADING_VERIFY_OTP,
  payload,
});
export const register = (payload) => ({
  type: types.REGISTER,
  payload,
});
export const registerSuccess = (payload) => ({
  type: types.REGISTER_SUCCESS,
  payload,
});
export const isLoadingRegister = (payload) => ({
  type: types.IS_LOADING_REGISTER,
  payload,
});
