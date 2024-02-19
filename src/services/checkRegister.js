import { Api } from "./api";

export default {
  email: (payload) =>
    Api.post(`/v2/register/check/email`, { email: payload.email }),
  phoneNumber: (payload) =>
    Api.post(`/v2/register/check/phone`, { phone_number: payload.phoneNumber }),
};
