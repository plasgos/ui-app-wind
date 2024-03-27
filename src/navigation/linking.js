export const linking = {
  prefixes: ['http://localhost:8080'],
  config: {
    screens: {
      Home: {
        path: '',
        initialRouteName: '/',
        screens: {
          hometab: '',
          notifications: 'notifications',
          rfq: 'rfq',
          whislist: 'whislist',
          Account: {
            path: 'account',
            screens: {
              AccountScreen: '',
              AccountSettings: '/settings',
            },
          },
        },
      },
      Register: {
        path: '/register',
        exact: true,
      },
      Login: '/login',
      InputNewEmail: '/input-new-email',
    },
  },
};
