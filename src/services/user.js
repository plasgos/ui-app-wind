import {Api} from './api';

export default {
  getInfoProfile: payload =>
    Api.get('/v2/user', {
      headers: {
        token: payload.token,
      },
    }),
};
