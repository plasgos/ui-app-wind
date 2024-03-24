export const linking = {
  prefixes: ['http://localhost:8080'],
  config: {
    screens: {
      Home: {
        path: '',
        initialRouteName: '/',
        screens: {
          homepage: '',
          notifications: 'notifications',
          rfq: 'rfq',
          whislist: 'whislist',
          Account: 'account',
        },
      },
      Register: {
        path: '/register',
        exact: true,
      },
      Login: '/login',
      AccountSettings: '/account-settings',
      InputNewEmail: '/input-new-email',
      // Account: '/account',
      //  ... other screens
    },
  },
};
