import {combineReducers} from 'redux';

import registerReducer from './modules/register/reducer';
import loginReducer from './modules/login/reducer';
import userReducer from './modules/user/reducer';

const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  user: userReducer,
});

export default rootReducer;
