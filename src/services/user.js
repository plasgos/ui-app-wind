import {Api} from './api';

export default {
  getInfoProfile: payload =>
    Api.get('/v2/user', {
      headers: {
        token: payload.token,
      },
    }),
  checkPassword: payload =>
    Api.post('/v2/user/check-password', payload.data, {
      headers: {
        token: payload.token,
      },
    }),
  reqOtpEmailMethod: payload =>
    Api.get('/v2/user/update-email/otp/request/email', {
      headers: {
        token: payload.token,
      },
    }),
  reqOtpPhoneNumberMethod: payload =>
    Api.get('/v2/user/update-email/otp/request/phone-number', {
      headers: {
        token: payload.token,
      },
    }),
  verifyOtpCheckEmail: payload =>
    Api.post('/v2/user/update-email/otp/confirm/check', payload.data, {
      headers: {
        token: payload.token,
      },
    }),
};
