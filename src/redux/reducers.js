import {combineReducers} from 'redux';

import registerReducer from './modules/register/reducer';
import loginReducer from './modules/login/reducer';
import userReducer from './modules/user/reducer';
import changeEmailReducer from './modules/change-email/reducer';
import changePhoneNumberReducer from './modules/change-phone-number/reducer';

const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  user: userReducer,
  changeEmail: changeEmailReducer,
  changePhoneNumber: changePhoneNumberReducer,
});

export default rootReducer;
