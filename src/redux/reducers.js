import {combineReducers} from 'redux';

import registerReducer from './modules/register/reducer';
import loginReducer from './modules/login/reducer';
import userReducer from './modules/user/reducer';
import changeEmailReducer from './modules/change-email/reducer';

const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  user: userReducer,
  changeEmail: changeEmailReducer,
});

export default rootReducer;
