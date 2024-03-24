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
  verificationMethod: {
    email: {
      data: {},
      loading: false,
    },
    phoneNumber: {
      data: {},
      loading: false,
    },
  },
  verifyOtpCheckEmail: {
    data: {},
    message: '',
    loading: false,
  },
};

const resetData = {
  data: {},
  loading: false,
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
    case types.VERIFICATION_EMAIL_METHOD_SUCCESS:
      return {
        ...state,
        verificationMethod: {
          ...state.verificationMethod,
          email: {
            ...state.verificationMethod.email,
            data: action.payload,
          },
        },
      };
    case types.IS_LOADING_VERIFICATION_EMAIL_METHOD:
      return {
        ...state,
        verificationMethod: {
          ...state.verificationMethod,
          email: {
            ...state.verificationMethod.email,
            loading: action.payload,
          },
        },
      };
    case types.VERIFICATION_PHONE_NUMBER_METHOD_SUCCESS:
      return {
        ...state,
        verificationMethod: {
          ...state.phoneNumber,
          phoneNumber: {
            ...state.verificationMethod.phoneNumber,
            data: action.payload,
          },
        },
      };
    case types.IS_LOADING_VERIFICATION_EMAIL_METHOD:
      return {
        ...state,
        verificationMethod: {
          ...state.verificationMethod,
          phoneNumber: {
            ...state.verificationMethod.phoneNumber,
            loading: action.payload,
          },
        },
      };
    case types.VERIFY_OTP_CHECK_EMAIL_SUCCESS:
      return {
        ...state,
        verifyOtpCheckEmail: {
          ...state.verifyOtpCheckEmail,
          data: action.payload,
        },
      };
    case types.IS_LOADING_VERIFY_OTP_CHECK_EMAIL:
      return {
        ...state,
        verifyOtpCheckEmail: {
          ...state.verifyOtpCheckEmail,
          loading: action.payload,
        },
      };
    case types.SET_MESSAGE_ERROR_VERIFY_OTP_CHECK_EMAIL:
      return {
        ...state,
        verifyOtpCheckEmail: {
          ...state.verifyOtpCheckEmail,
          message: action.payload,
        },
      };
    case types.RESET_USER:
      return {
        ...state,
        checkPassword: resetData,
        verificationMethod: {
          email: resetData,
          phoneNumber: resetData,
        },
        verifyOtpCheckEmail: resetData,
      };
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
export const verificationEmailMethod = payload => ({
  type: types.VERIFICATION_EMAIL_METHOD,
  payload,
});
export const verificationEmailMethodSuccess = payload => ({
  type: types.VERIFICATION_EMAIL_METHOD_SUCCESS,
  payload,
});
export const isLoadingVerificationEmailMethod = payload => ({
  type: types.IS_LOADING_VERIFICATION_EMAIL_METHOD,
  payload,
});
export const verificationPhoneNumberMethod = payload => ({
  type: types.VERIFICATION_PHONE_NUMBER_METHOD,
  payload,
});
export const verificationPhoneNumberMethodSuccess = payload => ({
  type: types.VERIFICATION_PHONE_NUMBER_METHOD_SUCCESS,
  payload,
});
export const isLoadingVerificationPhoneNumberMethod = payload => ({
  type: types.IS_LOADING_VERIFICATION_PHONE_NUMBER_METHOD,
  payload,
});
export const verifyOtpCheckEMail = payload => ({
  type: types.VERIFY_OTP_CHECK_EMAIL,
  payload,
});
export const verifyOtpCheckEMailSuccess = payload => ({
  type: types.VERIFY_OTP_CHECK_EMAIL_SUCCESS,
  payload,
});
export const isLoadingVerifyOtpCheckEmail = payload => ({
  type: types.IS_LOADING_VERIFY_OTP_CHECK_EMAIL,
  payload,
});
export const setMessageErrorVerifyOtpCheckEmail = payload => ({
  type: types.SET_MESSAGE_ERROR_VERIFY_OTP_CHECK_EMAIL,
  payload,
});
export const resetUser = payload => ({
  type: types.RESET_USER,
  payload,
});
