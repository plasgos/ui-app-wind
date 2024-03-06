export const linking = {
  prefixes: ['http://localhost:8080'],
  config: {
    screens: {
      Home: {
        path: '',
        initialRouteName: '/',
        screens: {
          homepage: '',
          notifications: '/notifications',
          rfq: '/rfq',
          whislist: '/whislist',
          Account: '/Account',
        },
      },
      Register: {
        path: '/register',
        exact: true,
      },
      Login: '/login',
      Account: '/account',
      //  ... other screens
    },
  },
};
