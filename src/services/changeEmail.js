import {Api} from './api';

export default {
  reqOtpEmailMethod: payload =>
    Api.get('/v2/user/update-email/otp/request/email', {
      headers: {
        token: payload.token,
      },
    }),
  reqOtpEmailByPhoneNumber: payload =>
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
  changeNewEmail: payload =>
    Api.post('v2/user/update-email/otp/request/change', payload.data, {
      headers: {
        token: payload.token,
      },
    }),
};
