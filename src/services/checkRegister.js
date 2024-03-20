import {Api} from './api';

export default {
  email: payload =>
    Api.post(`/v2/register/check/email`, {email: payload.email}),
  phoneNumber: payload =>
    Api.post(`/v2/register/check/phone`, {phone_number: payload.phoneNumber}),
  requestOtpEmail: payload =>
    Api.post(`/v2/register/otp/request/email`, {email: payload.email}),
  requestOtpPhoneNumber: payload =>
    Api.post(`/v2/register/otp/request/phone`, {
      phone_number: payload.phone_number,
    }),
  verifyOtp: payload =>
    Api.post(`/v2/register/otp/verify`, {
      phone_number: payload.phone_number,
      email: payload.email,
      otp_code: payload.otp_code,
    }),
  register: payload =>
    Api.post(`/v2/register`, {
      name: payload.name,
      password: payload.password,
      token_reg: payload.token_reg,
    }),
};
