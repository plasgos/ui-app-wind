import types from './types';

const initialState = {
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
  newEmail: {
    data: {},
    loading: false,
  },
};

const resetData = {
  data: {},
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHECK_PASSWORD_SUCCESS_CHANGE_EMAIL:
      return {
        ...state,
        checkPassword: {
          ...state.checkPassword,
          data: action.payload,
        },
      };
    case types.IS_LOADING_CHECK_PASSWORD_CHANGE_EMAIL:
      return {
        ...state,
        checkPassword: {
          ...state.checkPassword,
          loading: action.payload,
        },
      };
    case types.RESET_CHECK_PASSWORD_CHANGE_EMAIL:
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
          ...state.verificationMethod,
          phoneNumber: {
            ...state.verificationMethod.phoneNumber,
            data: action.payload,
          },
        },
      };
    case types.IS_LOADING_VERIFICATION_PHONE_NUMBER_METHOD:
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
    case types.CHANGE_NEW_EMAIL_SUCCESS:
      return {
        ...state,
        newEmail: {
          ...state.newEmail,
          data: action.payload,
        },
      };
    case types.IS_LOADING_CHANGE_NEW_EMAIL:
      return {
        ...state,
        newEmail: {
          ...state.newEmail,
          loading: action.payload,
        },
      };
    case types.RESET_CHANGE_EMAIL:
      return {
        ...state,
        checkPassword: resetData,
        verificationMethod: {
          email: resetData,
          phoneNumber: resetData,
        },
        verifyOtpCheckEmail: resetData,
        newEmail: resetData,
      };
    default:
      return state;
  }
};

export const checkPasswordChangeEmail = payload => ({
  type: types.CHECK_PASSWORD_CHANGE_EMAIL,
  payload,
});
export const checkPasswordSuccessChangeEmail = payload => ({
  type: types.CHECK_PASSWORD_SUCCESS_CHANGE_EMAIL,
  payload,
});
export const isLoadingcheckPasswordSuccessChangeEmail = payload => ({
  type: types.IS_LOADING_CHECK_PASSWORD_CHANGE_EMAIL,
  payload,
});
export const resetCheckPasswordChangeEmail = payload => ({
  type: types.RESET_CHECK_PASSWORD_CHANGE_EMAIL,
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
export const changeNewEmail = payload => ({
  type: types.CHANGE_NEW_EMAIL,
  payload,
});
export const changeNewEmailSuccess = payload => ({
  type: types.CHANGE_NEW_EMAIL_SUCCESS,
  payload,
});
export const isLoadingchangeNewEmail = payload => ({
  type: types.IS_LOADING_CHANGE_NEW_EMAIL,
  payload,
});
export const resetChangeEmail = payload => ({
  type: types.RESET_CHANGE_EMAIL,
  payload,
});